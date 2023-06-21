const express = require("express");
const User = require("../models/User");
var bcrypt = require("bcryptjs");
const { body, validationResult } = require("express-validator");
const router = express.Router();
var jwt = require('jsonwebtoken');

const JWT_SECRET="VAMSIDULAM"

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
    const errors = validationResult(req);
    if (!errors.isEmpty()){
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      let user = await User.findOne({ email: req.body.email });
      console.log(user);
      console.log("vamsi");
      if (!user){
        return res.status(400).json({ error: "sorry a user with this mail already exists" });
      }
      const salt=await bcrypt.genSalt(10);//returns a promise 
      const securedPass= await bcrypt.hash(req.body.password,salt)
      user = await User.create({
        Username: req.body.Username,
        password: securedPass,
        email: req.body.email,
      });
      const data={
        user:{
            id:user.id
        }
      }
      const authToken =await jwt.sign(data,JWT_SECRET);
      console.log("vamsi");
      res.json({authToken});
    } catch (error){
      console.error(error.message);
      res.status(500).send("Internal server error occured");
    }
  }
);

//Authenticate a user  using POST "api/auth/Login" No login required
router.post(
    "/loginUser",
    [
    //   body("email", "Enter a valid email").isEmail(),
      body("Username", "Enter a valid username").isLength({ min: 5 }),
      body("password", "password must be atleast 5  charecters").isLength({
        min: 5,
      }),
    ],
    async (req, res) => {
        let success=false;
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const {Username,password}=req.body;
        try{
            let user=await User.findOne({Username});
            if(!user){
                success=false;
                return res.status(400).json({success,error:"Please enter correct username or password"})
            }
            const passwordCompare=await bcrypt.compare(password,user.password);
            if(!passwordCompare){
                success=false;
                return res.status(400).json({success,error:"Please enter correct username or password"})
            }
            const data={
                user:{
                    id:user.id
                }
              }
              const authToken =jwt.sign(data,JWT_SECRET);
              success=true;
              res.json({success,authToken});
        }
        catch (error) {
            console.error(error.message);
            res.status(500).send("Internal server error occured");
          }
        
    })
module.exports = router
