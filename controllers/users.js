import bcrypt from "bcrypt";
import UserModel from "../models/users.js";
import jwt from "jsonwebtoken";


export const signIn = async (req, res)=>{
    const {email, password} = req.body;
    try {
        const existingUser= await UserModel.findOne
        
        
        
        
        
        
        
        ({email});
        if(!existingUser) return res.status(404).json({message:"User dosen't exist."})
        const isPassworCurrect = await bcrypt.compare(password, existingUser.password)
        if(!isPassworCurrect)return res.status(400).json({message:"invalid creadintials."})
        const token = jwt.sign({email:existingUser.email, id:existingUser._id}, "gskjgdsik", {expiresIn:"1h"});
        res.status(200).json({result:existingUser, token})
    } catch {
        res.status(500).json({
            message:"Something went wrong",
        })
    }
}

export const signUp=async (req, res)=>{
    const {firstName, lastName, email, password, confirmPassword} = req.body;

    try {
        const existingUser = await UserModel.findOne({email});
        if(existingUser) return res.status(400).json({message:"User already exist!"});
        if(password !== confirmPassword) return res.status(400).json({message:"Password dosen't match"});
        const hashPassword = await bcrypt.hash(password, 10);
        const result = await UserModel.create({email,password:hashPassword, name:`${firstName} ${lastName}`});
        const token = jwt.sign({email:result.email, id:result._id},"gskjgdsik",{expiresIn:"1h"});
        res.status(200).json({result, token})
    } catch (error) {
        res.status(500).json({
            message:"Something went wrong",
        })
    }
}