const express = require("express");
const User = require("../models/User");
var bcrypt = require("bcryptjs");
const { body, validationResult } = require("express-validator");
const router = express.Router();
var jwt = require('jsonwebtoken');

const JWT_SECRET="VAMSIDULAM";
// const salt = bcrypt.genSalt(10);
const salt = 8;

//Creating a User using :POST "api/auth/createuser" no login required
router.post(
  "/createuser",
  [
    body("EmailidSUP", "Enter a valid email").isEmail(),
    body("UsernameSUP", "Enter a valid username").isLength({ min: 5 }),
   body("PasswordSUP", "password must be atleast 5  charecters").isLength({
      min: 5,
    }),
  ],
  async (req, res) => {
    console.log(req.body);
    const success=false;
    const errors = validationResult(req);
    console.log(success)
    if (!errors.isEmpty()){
      
      return res.status(400).json({ errors: errors.array() });
      
    }
    
    try {
      let user = await User.findOne({ email: req.body.email });
      
      
      if (user){
        return res.status(400).json({ error: "sorry a user with this mail already exists" });
      }
      
      // const salt=await bcrypt.genSalt(10);//returns a promise 
      const securedPass=await bcrypt.hash(req.body.PasswordSUP,salt)
      
      user = await User.create({
        Username: req.body.UsernameSUP,
        password: securedPass,
        email: req.body.EmailidSUP,
      });
      const data={
        user:{
            id:user.id
        }
      }
      const authToken =await jwt.sign(data,JWT_SECRET);
      
      res.json(authToken);
      
    } catch (error){
      console.error(error.message);
      res.status(508).send("Internal server error occured");
    }
  }
);

//Authenticate a user  using POST "api/auth/Login" No login required
router.post(
    "/loginUser",
    [
    //   body("email", "Enter a valid email").isEmail(),
      body("username", "Enter a valid username").isLength({ min: 5 }),
      body("password", "password must be atleast 5  charecters").isLength({
        min: 5,
      }),
    ],
    async (req, res) => {
        let success=false;
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({success, errors: errors.array() });
        }
        const username=req.body.username;
        const password=req.body.password;
        // try{

            let user =await User.findOne({Username: username});
            console.log(user);
            if(!user){
                success=false;
                return res.status(400).json({success,error:"Please enter correct username or password "})
            }

            console.log(salt);
            // const hashedPassword =await bcrypt.hash(password, salt);
            // console.log(hashedPassword, user.password);
            const passwordCompare=await bcrypt.compareSync(password,user.password);
            console.log(passwordCompare);
            if(!passwordCompare){
                success=false;
                return res.status(400).json({success,error:"Please enter correct username or password 67"})
            }
            const data={
                user:{
                    id:user.id
                }
              }
              const authToken =jwt.sign(data,JWT_SECRET);
              success=true;
              res.json({success,authToken});
        // }
        // catch (error) {
        //     console.error(error.message);
        //     res.status(500).send("Internal server error occured");
        //   }
        
    })
module.exports = router
