const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    username:String,
    name:String,
    password:String
})

const userModel = mongoose.model("users",userSchema,"users")

module.exports =  userModel;