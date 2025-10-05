import express from "express";
import { createNote, deleteNote, generateNoteController, Note, saveNote, SpecificNote } from "../Controllers/note.controller.js";
import { protectRoute } from "../Middleware/Auth.js";

const noteRouter=express.Router();


noteRouter.post('/create/:id',protectRoute,createNote)
noteRouter.get('/note/:id',protectRoute,SpecificNote)
noteRouter.get('/specific-note/:id',protectRoute,Note)
noteRouter.post('/save/:id',protectRoute,saveNote)
noteRouter.post('/generate',protectRoute,generateNoteController)
noteRouter.delete('/note/:id',deleteNote);

export default noteRouter;