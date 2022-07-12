import express from "express"
import mongoose from 'mongoose'
import dotenv from "dotenv"
import authRoute from "./routes/auth.js"
import hotelRoute from "./routes/hotels.js"
import usersRoute from "./routes/users.js"
import roomsRoute from "./routes/rooms.js"

const app = express()
dotenv.config()

const connect = async ()=>{
    try{
        await mongoose.connect(process.env.MONGO)
    } catch (err){
        throw err
    }
}


mongoose.connection.on("disconnected", ()=>{
    console.log("mongoDB disconnected")
})
mongoose.connection.on("connected", ()=>{
    console.log("mongoDB connected")
})
app.use(express.json())
app.use("/auth", authRoute);
app.use("/hotel", hotelRoute);
app.use("/users", usersRoute);
app.use("/rooms", roomsRoute);

app.listen(3504,()=>{
    connect()
    console.log("connected to backend")
})