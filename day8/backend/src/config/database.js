const mongoose = require("mongoose");


function ConnectDb()
{
    mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        console.log("Connect to db")
    })

}

module.exports = ConnectDb;