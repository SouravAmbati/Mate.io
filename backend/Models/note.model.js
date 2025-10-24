import mongoose from "mongoose";

const noteSchema=new mongoose.Schema({
    notebook:{ type: mongoose.Schema.Types.ObjectId, ref: 'notebook'},
    topic: String,
    note: String,
})
noteSchema.index({notebook:1});
const note=mongoose.models.note||mongoose.model('note',noteSchema);

export default note