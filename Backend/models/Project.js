const mongoose=require("mongoose")

// const fileSchema = new mongoose.Schema({
//     filename: {
//       type: String,
//       required: true
//     },
  
    
//   });

const projectSchema = new mongoose.Schema({
    projectName:{
        type:String,
        required:true
    },
    authorName:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    
    // files:[fileSchema]

})


module.exports=mongoose.model('Project',projectSchema)