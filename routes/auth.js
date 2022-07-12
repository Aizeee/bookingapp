import express from "express"
import User from "../models/User.js"
import bcrypt from "bcrypt"
const saltRounds = 10;

const router = express.Router()

router.post("/", async (req, res, next)=>{
    try{
        const salt = bcrypt.genSaltSync(saltRounds);
        const hash = bcrypt.hashSync(req.body.password, salt);

        const newUser = new User({
            username:req.body.username,
            email: req.body.email,
            password: hash
        })
        await newUser.save()
        res.status(201).send("username created")
    }catch(err){
        next(err)
    }
})

export default router