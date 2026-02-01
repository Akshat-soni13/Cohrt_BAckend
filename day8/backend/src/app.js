// create server and write api

const express = require("express");
const noteModel = require("./models/note.model");

const app = express();

app.use(express.json())


// post api notes ko create karwayagi and them woh backend me store karegi notes ka data req.body me se ayega note that 


app.post("/notes",async(req,res)=>{

    const {title,description} = req.body;

    const note = await noteModel.create({
        title,description
    })

    res.status(201).json({
        message:"Note Created Succesfully",
        note
    })

})

// get api ye sara notes jo database me hai usko array ke form me dispayu karadegio 


app.get("/notes", async (req,res)=>{
    
    const notes = await noteModel.find();

    res.status(200).json(
        {
            message:"Notes Here=>::",
            notes
        }
    )
})

// detee is n=use to delete note from database 

app.delete("/notes/:id",async (req,res)=>{
    const id = req.params.id;
    console.log(id);
    await noteModel.findByIdAndDelete(id);
    res.status(200).json({
        message:"Note Deleted"
    })
})

// patch use to update tyhe descriptio of notes 


app.patch("/notes/:id",async (req,res)=>{
    const id = req.params.id;
    const { description } = req.body; 

    const noteupdated =await noteModel.findByIdAndUpdate(id,{ description })

    res.status(200).json({
        message:"NOte updated SUccesfuully ",
        noteupdated

    })

})

module.exports= app;
