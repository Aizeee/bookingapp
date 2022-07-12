import express from "express";

const router=express.Router()

router.get("^/$ | /filename(.html)?", (req,res)=>{
    res.sendFile(path.join(__dirname,'folder','fileName')) //////// ()? means optional
})

router.get("/new-page(.html)?", (req,res)=>{
    res.sendFile(path.join(__dirname,'folder','SecondFileName'))
})
router.get("/old-page(.html)?", (req,res)=>{
    res.redirect(301, "/new-page")
})

export default router