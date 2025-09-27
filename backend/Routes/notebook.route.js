import express from "express";
import { createNotebook, GetAllNotebook, SpecificNotebook } from "../Controllers/notebook.controller.js";
import { protectRoute } from "../Middleware/Auth.js";

const noteBookRouter=express.Router();


noteBookRouter.post('/create',protectRoute,createNotebook)
noteBookRouter.get('/notebooks',protectRoute,GetAllNotebook)
noteBookRouter.get('/notebooks/:id',SpecificNotebook)

export default noteBookRouter;