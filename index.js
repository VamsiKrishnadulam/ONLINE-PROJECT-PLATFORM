const connectToMongo = require("./db");
const express = require("express");
connectToMongo();
const app = express();
const cors = require("cors");
const port = 4000;
const Project = require("./models/Project");
const User=require("./models/User");

const { GridFsStorage } = require('multer-gridfs-storage');


app.use(cors());
app.use(express.json());  //Middle ware
app.use(express.urlencoded({ extended: false }));

//Available routes
//Create a user using:   "/api/auth/".
app.use("/api/auth", require("./Routes/auth"));

app.get("/",(req,res)=>{
  Project.find({},function(err,data){
    if(err)
    {
      console.log(err)
    }
    else{
      res.json(data)
      
    }
})
})


// app.post("/newUser",(req,res)=>{
//   const Username=req.body.UsernameSUP;
//   const email=req.body.EmailidSUP;
//   const firstname=req.body.FirstnameSUP;
//   const lastname=req.body.LastnameSUP;
//   const password=req.body.PasswordSUP;
//   const newUser=new User({
//     Username,
//     email,
//     firstname,
//     lastname,
//     password
//   })
//   newUser.save((err,data)=>{
//     if(err){
//       console.log(err);
//     }
//     res.json(data);
//   });

// })

// const multer= require("multer");


// const storage = new GridFsStorage({
//   url: "mongodb+srv://vamsikrishnadulam:vamsi14885@cluster0.u5wtiec.mongodb.net/ONLINE_PROJECT_PLATFORM1?retryWrites=true&w=majority",
//   options: { useNewUrlParser: true, useUnifiedTopology: true },
//   file: (req, file) => {
//     return new Promise((resolve, reject) => {
//       const fileInfo = {
//         filename: file.originalname,
//         metadata: {
//           authorName: req.body.authorName,
//           projectName: req.body.projectName,
//           description: req.body.description
//         }
//       };
//       resolve(fileInfo);
//     });
//   }
// });

// // Routes
// app.post('/newproject', upload.array('files'), (req, res) => {
//   res.json({ message: 'Project created successfully' });
// });

















// app.post("/newproject",(req,res)=>{
//   // const files=req.body.files;
//  const authorName=req.body.authorName;
//  const projectName=req.body.projectName;
//  const description=req.body.description;

// //  const newFiles=files.map((file)=>({
// //    name:file.originalname,
// //    path:file.path,
   
// //  }));
//  const newProject=new Project({
//    authorName,
//    projectName,
//    description,
//   //  files:newFiles
//  })
//  newProject.save((err,data)=>{
//   if(err){
//     console.log(err);
//   }
//   res.json(data);
//  })
//  console.log(newProject)

// })



app.post("/newproject", (req, res) => {
  const projectName = req.body.projectName;
  const authorName = req.body.authorName;
  const description = req.body.description;
  const newProject = new Project({
    projectName,
    authorName,
    description,
  });
  newProject.save((err, data) => {
    if (err) {
      console.log(err);
    }
    res.json(data);
  });
  console.log(newProject);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});