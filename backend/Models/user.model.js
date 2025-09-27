import mongoose from "mongoose";

const userSchema=new mongoose.Schema({
    name: String,
    email: { type: String, unique: true },
    password: String,
})

const user=mongoose.models.user||mongoose.model('User',userSchema);

export default user