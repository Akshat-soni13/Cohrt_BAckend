// create server here 

const express = require("express");


const app = express();

app.use(express.json())


const notes =[
    {
        title:"test title1",
        description:"this is description"
    }
]


app.get("/",(req,res)=>{
    console.log("Heelo world ")
    res.send("Kiaso ho ")
    
})

app.post("/notes",(req,res)=>{
    res.send("notes created ")
    notes.push(req.body)
})


app.get("/notes",(req,res)=>{
    res.send(notes);

})

app.delete("/notesDel/:id",(req,res)=>{

    console.log(req.params)
    delete notes[req.params.id]
    res.send("OK")

})


app.patch("/notes/:idx", (req, res) => {
  const idx = Number(req.params.idx);

  // index valid hai ya nahi
  if (!notes[idx]) {
    return res.status(404).send("Note not found");
  }

  // description body me hai ya nahi
  if (!req.body.description) {
    return res.status(400).send("Description is required");
  }

  notes[idx].description = req.body.description;
  res.send("Notes Updated Successfully");
});



module.exports = app;   