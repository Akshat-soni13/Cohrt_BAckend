const express = require("express");

const app = express();

app.use(express.json())


const notes=[];

app.post("/notes",(req,res)=>
{
        notes.push(req.body);
    console.log(req.body);
    res.status(201).json({
        message:"Notes Created Succesfully"
    });
    
})

app.get("/notes",(req,res)=>{
    res.status(200).json(
        {
            notes:notes
        }
    )
})


app.delete("/notes/:id",(req,res)=>{
    
    delete notes[req.params.id]
    res.status(204).json({
        message:"Data ddeletetd "
    })
})

app.patch("/notes/:idx", (req, res) => {
    const idx = req.params.idx;

    if (!notes[idx]) {
        return res.status(404).json({ message: "Note not found" });
    }

    notes[idx].desc = req.body.desc;

    res.status(200).json({
        message: "Notes Updated Successfully",
        updatedNote: notes[idx]
    });
});


module.exports = app;
