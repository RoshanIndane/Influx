const express = require("express");
const connect = require("./configs/db");

const prodController=require("./controller/product.controller")

const app=express()


app.use(express.json());
app.use("/prod", prodController );




app.listen(7001, async() =>{
    
        await connect();
        console.log("running on port 7001");
  
});