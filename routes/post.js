import express from "express";

const router = express.Router();
import {controllerPost, getPost, createPost, updatePost, deletePost} from "../controllers/post.js"
import checkLogin from "../middlewares/checkLogin.js";


router.get("/", controllerPost)
router.get("/:id", getPost)
router.post("/",checkLogin, createPost)
router.patch("/:id", checkLogin, updatePost);
router.delete("/:id",checkLogin, deletePost)

export default router;