const mongoose = require("mongoose");

const noteSchema = new mongoose.Schema({
    title:String,
    description:String,
})


// schema bat ahai data abse ko ha ham data konsa format me store karna wala hai 


const notemodel = mongoose.model("notes",noteSchema);

module.exports = notemodel