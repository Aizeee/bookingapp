import express from "express";
import {
    createHotel,
    updateHotel,
    deleteHotel,
    getHotel,
    getHotels

} from "../controllers/hotel.js";

const router = express.Router()

//create
router.post("/", createHotel)
//UPDATE
router.put("/:id", updateHotel)
//DELETE
router.delete("/:id", deleteHotel)
//GET
router.get("/:id", getHotel)
//GET ALL
router.get("/:id", getHotels)


export default router