const {Router} = require("express")
const { bmiModel } = require("../models/bmiModel")
const bmiRoute = Router()

bmiRoute.post("/",async(req,res)=>{
    try{
        console.log(req.body.email)
        const {height,weight} = req.body
        const height_in_mt = height*0.3048
        const height_in_sqmt = height_in_mt**2
        const bmi = (weight/height_in_sqmt).toFixed(2)
        const data = new bmiModel({email:req.body.email,height:height,weight:weight,bmi:bmi})
        await data.save()
        res.send({bmi:bmi})
    }
    catch(err){
        console.log(err)
        res.send({msg:"Something went worng"})
    }
})

bmiRoute.get("/",async(req,res)=>{

    try{
        const {email} = req.body
        const result = await bmiModel.find({email})
        res.send(result)
    }
    catch(err){
        console.log(err)
        res.send({msg:"Something went worng"})
    }
   
})

module.exports = {
    bmiRoute
}