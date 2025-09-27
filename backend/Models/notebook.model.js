import mongoose from "mongoose";

const notebookSchema=new mongoose.Schema({
    user:{type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    notebookName: String,
})

const notebook=mongoose.models.notebook||mongoose.model('notebook',notebookSchema);

export default notebook