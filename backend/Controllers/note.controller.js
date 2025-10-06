import mongoose from "mongoose";
import note from "../Models/note.model.js";
import { generateNote } from "../Services/generateContent.js";
import { decrypt, encrypt } from "../config/crypto.js";

//create Note
// export const createNote = async (req, res) => {
//   try {
//     //get TopicName and the note
//     const {topicName}=req.body;
//     const notebookid=req.params
    
//     //check if fields are not empty
//     if(!topicName){
//       return res.json({success:false,message:"requiered field is empty"});
//     }
//     //based on that generate the content
//     const response=await generateNote(topicName);
//     //store it in db with user_id(get it from params)
//     const newNote=new note({
//       notebook:notebookid,
//       topic:topicName,
//       note:response
//     })
//     const Note=await newNote.save();
//     //send the response
//     return res.json({success:true,data:Note,message:"Note Created"})
//   } catch (error) {
//      console.log(error.message);
//     return res.json({success:false,message:error.message})
//   }
// };

// export const createNote = async (req, res) => {
//   try {
//     const { topicName, noteContent } = req.body;
//     const { id: notebookid } = req.params;

//     if (!topicName) {
//       return res.json({ success: false, message: "Required field is empty" });
//     }

//     let finalContent = noteContent;

//     // If no noteContent passed → auto-generate with AI
//     // if (!noteContent) {
//     //   finalContent = await generateNote(topicName);
//     // }

//     const newNote = new note({
//       notebook: notebookid,
//       topic: topicName,
//       note: finalContent,
//     });

//     const savedNote = await newNote.save();
//     return res.json({ success: true, data: savedNote, message: "Note Created" });
//   } catch (error) {
//     console.log(error.message);
//     return res.json({ success: false, message: error.message });
//   }
// };

export const generateNoteController = async (req, res) => {
  try {
    const { topicName } = req.body;

    if (!topicName) {
      return res.json({ success: false, message: "Topic name is required" });
    }

    // Generate AI note
    const ai_content = await generateNote(topicName);

    return res.json({
      success: true,
      data: ai_content,
      message: "AI-generated note",
    });
  } catch (error) {
    console.log(error.message);
    return res.json({ success: false, message: error.message });
  }
};

export const createNote = async (req, res) => {
  try {
    const { topicName} = req.body;
    const { id: notebookid } = req.params;

    if (!topicName) {
      return res.json({ success: false, message: "Required field is empty" });
    }
    const newNote = new note({
      notebook: notebookid,
      topic: topicName,
      note: encrypt("")
    });

    const savedNote = await newNote.save();
    return res.json({ success: true, data: savedNote, message: "Note Created" });
  } catch (error) {
    console.log(error.message);
    return res.json({ success: false, message: error.message });
  }
};

export const saveNote = async (req, res) => {
  try {
    const { content } = req.body;
    const encrypted=encrypt(content) // content input from user
    const { id } = req.params;    // note id

    if (!content) {
      return res.json({ success: false, message: "Content is required" });
    }

    // Find the note by id and update its 'note' field
    const updatedNote = await note.findByIdAndUpdate(
      id,
      { note: encrypted },
      { new: true } // return the updated document
    );

    if (!updatedNote) {
      return res.json({ success: false, message: "Note not found" });
    }

    return res.json({
      success: true,
      data: updatedNote,
      message: "Note updated successfully",
    });
  } catch (error) {
    console.log(error.message);
    return res.json({ success: false, message: error.message });
  }
};

// Get Specific Note
export const SpecificNote = async (req, res) => {
  try {
    //get userId from params
     const { id } = req.params;
    //findNote with that userId
    const Notes=await note.find({notebook: id})
    if(!Notes){
      return res.json({success:false,message:"Notes not available"})
    }
    
    //send the response
    res.json({success:true,data: Notes})
  } catch (error) {
     console.log(error.message);
    return res.json({success:false,message:error.message})
  }
};

//delete specific note
export const deleteNote=async(req,res)=>{
  try {
    const {id}=req.params
    await note.findByIdAndDelete({_id:id});
    res.json({success:true,message:"Note Deleted"});
  } catch (error) {
    console.log(error.message);
    return res.json({ success: false, message: error.message });
  }
}


export const Note = async (req, res) => {
  try {
    const { id } = req.params;

    console.log("Fetching notes for notebook:", id); // log ID 
    const Notes = await note.find({_id:id});
    console.log("Notes found:", Notes); // log notes from DB

    if (!Notes || Notes.length === 0) {
      return res.json({ success: false, message: "Notes not available" });
    }
     const decryptedNotes = Notes.map((n) => ({
      ...n._doc, // copy all fields
      note: n.note ? decrypt(n.note) : "", // decrypt note content
    }));

    res.json({ success: true, data: decryptedNotes });
  } catch (error) {
    console.log(error.message);
    return res.json({ success: false, message: error.message });
  }
};
