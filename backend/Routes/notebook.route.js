import express from "express";
import { createNotebook, deleteNotebook, GetAllNotebook, SpecificNotebook } from "../Controllers/notebook.controller.js";
import { protectRoute } from "../Middleware/Auth.js";

const noteBookRouter=express.Router();


noteBookRouter.post('/create',protectRoute,createNotebook)
noteBookRouter.get('/notebooks',protectRoute,GetAllNotebook)
noteBookRouter.get('/notebooks/:id',SpecificNotebook)
noteBookRouter.delete('/notebooks/:id',deleteNotebook)

export default noteBookRouter;