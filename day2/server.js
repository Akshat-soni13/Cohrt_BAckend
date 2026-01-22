const express = require("express");

const app  = express();

app.get("/",(req,res)=>{
    res.send("Hello Akshat Soni fefdfd fdfdfdfdfdf ")
})

app.get("/about",function(req,res)
{
    console.log("This is an about page ");
    res.send("Heeelo about page by...")
})

app.listen(3000);
