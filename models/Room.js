import mongoose from "mongoose";

const RoomSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    type:{
        type: String,
        required: true,
    
    }


})