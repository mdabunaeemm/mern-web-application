
import mongoose from "mongoose";
import PostMessage from "../models/createPost.js";

export const controllerPost= async (req, res)=>{
    try {
        const postMessages= await PostMessage.find();
        console.log(postMessages)

        res.status(200).json(postMessages);
    } catch (error) {
        res.status(404).json({message:error.message});
        console.log("hello")

        
    }
}

export const getPost= async (req, res)=>{
    const {id} = req.params
   
    try {
        const post= await PostMessage.findOne({_id:id});
        
        res.status(200).json(post);
         console.log(id)
    } catch (error) {
        res.status(404).json({message:error.message}); 
        console.log(error)    
    }
}

export const createPost=async (req, res)=>{
    const post =req.body;
    const newPost = new PostMessage({...post, creator:req.userId, createdAt: new Date().toISOString()});
    
    try {
        
        await newPost.save();
        
        res.status(201).json(newPost)
        
    } catch (error) {
        res.status(409).json({message:error.message});
        
    }
}

export const updatePost=async (req, res)=>{
    const {id:_id} = req.params;
    console.log(_id);
    const post =req.body;

    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('no post with the id');
    const updatedPost = await PostMessage.findByIdAndUpdate(_id, {...post, _id}, { new : true });
    res.json(updatedPost);
}

export const deletePost=async (req, res)=>{
    const {id} = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('no post with the id');
    await PostMessage.findByIdAndRemove(id);
    res.json({message:"Post deleted sucessfully"});
}