const mongoose = require("mongoose");

const taskSchema = mongoose.Schema({

    user:String,
    title:String,
    desc:String,
    date:Date
    
})

const taskModel = mongoose.model("task",taskSchema,"task")

module.exports =  taskModel;