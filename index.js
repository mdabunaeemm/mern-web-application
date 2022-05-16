import express, { Router } from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import routerPost from "./routes/post.js"
import routerUser from "./routes/user.js";

const app=express();
app.use(bodyParser.json({limit:"30mb",extended:true}));
app.use(bodyParser.urlencoded({limit:"30mb",extended:true}));
app.use(cors());
app.use("/posts",routerPost)
app.use("/user",routerUser)

const CONNECTION_URL="mongodb+srv://naeemabu:naeem321@cluster0.xmzeu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL,{useNewUrlParser:true, useUnifiedTopology:true})
.then(()=>app.listen(PORT,()=>console.log(`Server is running on Port: ${PORT}`)))
.catch((error)=>console.log(error.message))



