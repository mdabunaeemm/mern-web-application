import express from "express";
import {signIn, signUp} from "../controllers/users.js";
const router = express.Router()

router.post("/signin", signIn);
router.post("/signup", signUp)
// router.post("/",loginController)
export default router;