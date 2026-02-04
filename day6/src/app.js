const express = require("express");
const mongoose = require("mongoose")

const app = express();

app.use(express.json())


function ConnecttOdB()
{
    mongoose.connect("mongodb+srv://aki:THyXn0RhkVdQQ0z2@cluster0.bjjqcnm.mongodb.net/day06")
    // ye callback tab use hota hai when we want agar servre connet ho jaya tab pata chal jaya 
    .then(()=>{
        console.log("Connected to database")
    })

}

ConnecttOdB();

module.exports = app;