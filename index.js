const express = require("express")
const { connection } = require("./Config/db")
const { SignUpRoute } = require("./routes/signupRoute")
const { LoginRoute } = require("./routes/loginRoute")
const cors = require("cors")
const { authentication } = require("./middleware/authentication")
const { GetProfile } = require("./routes/getProfileRoutes")
const { bmiRoute } = require("./routes/calculateBMI")

const app = express()
app.use(express.json())
app.use(cors())

app.use("/signup",SignUpRoute)

app.use("/login",LoginRoute)

app.use(authentication)

app.use("/getProfile",GetProfile)

app.use("/calculateBMI",bmiRoute)
// app.use("/calculateBMI",bmiRoute)

const PORT = process.env.PORT || 8080

app.listen(PORT, async()=>{
    try{
        await connection
        console.log("Connected to DB successfully")
    }
    catch(err){
        console.log(err)
    }
    console.log(`Server running on PORT ${PORT}`)
})