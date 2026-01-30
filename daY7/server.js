// start api  and connect with database woprk of this file 
const app = require("./src/app");
const connectTodb = require("./src/config/database")
require("dotenv").config()
   



connectTodb();
app.listen(3000,()=>{
    console.log("Seever is running succesfully ")
})