import express from "express";
import Hotel from "../models/Hotel.js"

const router = express.Router()
//create
router.post("/", async (req,res)=>{
    const newHotel = new Hotel(req.body)
    try{
        const savedHotel = await newHotel.save()
       res.send("hotel") 
    } catch (error){
        res.status(500).json(error)
    }
    
})
//UPDATE
router.put("/:id", async (req,res)=>{
    try{
        const updatedHotel = await Hotel.findByIdAndUpdate(req.params.id,{$set: req.body},{new:true})
        res.send("hotel updated") 
    } catch (error){
        res.status(500).json(error)
    }
    
})
//DELETE
//GET
//GET ALL
export default router