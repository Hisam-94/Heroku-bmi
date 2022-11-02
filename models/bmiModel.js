const mongoose = require("mongoose")

const bmiSchema = mongoose.Schema({
    height:String,
    weight:String,
    email:String,
    bmi:String,
},{ timestamps: true })

const bmiModel  = mongoose.model("bmi",bmiSchema)

module.exports = {
    bmiModel
}