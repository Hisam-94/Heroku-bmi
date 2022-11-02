const {Router} = require("express")
const { UserModel } = require("../Models/UserModel")
const GetProfile = Router()

GetProfile.get("/",async(req,res)=>{
    try{
        const {email} = req.body
        const result = await UserModel.find({email})
        res.send(result)
    }
    catch(err){
        console.log(err)
        res.send({msg:"Something went worng"})
    }
})

module.exports = {
    GetProfile
}