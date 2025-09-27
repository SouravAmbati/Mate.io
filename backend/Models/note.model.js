import mongoose from "mongoose";

const noteSchema=new mongoose.Schema({
    notebook:{ type: mongoose.Schema.Types.ObjectId, ref: 'notebook'},
    topic: String,
    note: String,
})

const note=mongoose.models.note||mongoose.model('note',noteSchema);

export default note