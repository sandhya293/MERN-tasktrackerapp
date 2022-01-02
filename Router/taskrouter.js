const express = require('express')
const Router = express.Router()
const taskModel = require("../modal/taskMdel")
Router.use(express.json())

Router.get("/",(req,res) => {

    res.json({data:"You are on login page"})
})

Router.post('/addtask',(req,res) => {

      const mytask = req.body

      const addtask =taskModel.create(mytask)

      return res.json({data:addtask})
})

Router.post('/gettask', async(req,res) => {

    const taskuser = req.body
    console.log("username",taskuser)
    const getdata = await taskModel.find(taskuser)

    return res.json({data:getdata})


})
Router.post('/deletetask', async(req,res) => {

    const dlt = req.body
    const dlttask = await taskModel.findOneAndDelete(dlt)

    return res.json({data:"deleted"})
})

Router.post('/update' , async(req,res)=> {

    const uid = req.body

    const updateuser =await taskModel.find(uid)

    return res.json({data:updateuser})
})

Router.put('/updt/:_id' , async(req,res) => {
      
    const uid = req.params._id
    
    const updtuser = req.body

    const user_update = await taskModel.findOneAndUpdate({_id:uid},updtuser,{new:true})
    
    return res.json({data:updtuser})

})

module.exports = Router;
