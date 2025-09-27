import express from "express";
import { Login, SignUp } from "../Controllers/user.controller.js";

const userRouter=express.Router();

userRouter.post('/signup',SignUp)
userRouter.post('/login',Login)

export default userRouter;