// import express from "express";
// import { Login, SignUp } from "../Controllers/user.controller.js";

// const userRouter=express.Router();

// userRouter.post('/signup',SignUp)
// userRouter.post('/login',Login)

// export default userRouter;
import express from "express";
import { GoogleAuth } from "../Controllers/user.controller.js";

const userRouter = express.Router();

// old routes removed
userRouter.post("/google-auth", GoogleAuth);

export default userRouter;
