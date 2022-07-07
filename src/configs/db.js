const mongoose= require("mongoose");

module.exports=()=>{
    return mongoose.connect("mongodb+srv://roshan123:roshan123@cluster0.n9bczkv.mongodb.net/?retryWrites=true&w=majority")
}