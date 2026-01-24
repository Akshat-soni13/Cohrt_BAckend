const express = require("express");

const app = express();

app.use(express.json())

const notes = [
    {
        titie:"test title 1 ",
        description :"Text description 1"
    },
    {
        titie:"test title 2 ",
        description :"Text description 2"
    }
]

app.get("/",(req,res)=>
{

    res.send(notes)
})

app.post("/notes",(req,res)=>{
    
    console.log(req.body)
    res.send("Note Created")
    notes.push(req.body);
}
)


app.listen(3000,()=>{
    console.log("Server is running ");

})