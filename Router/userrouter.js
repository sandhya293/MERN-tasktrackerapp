const express = require('express')
const Router = express.Router()
const userModel = require("../modal/userModel")

Router.use(express.json())

Router.get("/",(req,res) => {

    res.json({data:"You are on Register page"})
})
Router.post('/register',(req,res)=> {

    const userdata = req.body
    
    userModel.create(userdata)


    return res.json({data:"inserted"})
})

Router.post('/login', async(req,res)=> {

    const userlogin = req.body
    console.log("user",userlogin)
    const loginuser = await userModel.find(userlogin)

    return res.json({data:loginuser})
})

module.exports = Router;
