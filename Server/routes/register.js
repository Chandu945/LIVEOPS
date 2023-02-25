const express = require("express")
const regmodel = require("../models/register")

const router = express.Router()

router.post("/register" , async (req ,res)=>{
    try{
        const {username , email , password ,age} = req.body
        let data = await regmodel.findOne({email:email})
        if(data !== null){
            res.status(404).json({
                status : "failure",
                message : "user already exists"
            })
        }else{
            let insert = await regmodel.create({
                username:username,
                email: email,
                password : password,
                age:age,
                
            })
            res.status(201).json({
                status : "success",
                message : "user created successfully",
                data : insert
            })
        }
    }catch(e){
        res.status(400).json({
            status : "failed",
            message : e.message
        })
    }
})

module.exports = router