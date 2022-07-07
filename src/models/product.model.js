const mongoose= require("mongoose");


const prodSchema= new mongoose.Schema({

    code:{type:Number, required:true, unique:true },
    prodName:{type:String, required:true},
    unitPrice:{type:Number, required:true}
},
{
    versionKey:false,
    timestamps:true
})