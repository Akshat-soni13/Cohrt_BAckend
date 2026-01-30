// create server and api
//  and crud operation dat bas pe karna ka liye we require model 
const notemodel = require("./models/notes.model");
const noteModel = require("./models/notes.model")
const express = require("express");
const app = express();

app.use(express.json())

app.post("/notes", async (req,res)=>{

    const {title,description} = req.body;
  const note =  await  notemodel.create({
        title,description
    })

    res.status(201).json({
        message:"Note Create Succesfullyt",
        note    
    })

})


module.exports = app;