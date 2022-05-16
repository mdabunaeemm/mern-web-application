import express from "express";
import mongoose from "mongoose";

const postSchema=mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    blog:{
        type:String,
        required:true,
    },
    name:String,
    creator:String,
    selectedFile:{
        type:String,
        required:true
    },
    createdAt:{
        type:Date,
        default:new Date(),
    }


})

const PostMessage=mongoose.model('PostMessage', postSchema);
export default PostMessage;