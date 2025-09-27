import express from "express";
import cookieParser from "cookie-parser";
import connectDB from "./config/db.js";
import dotenv from "dotenv";
dotenv.config();
import userRouter from "./Routes/user.routes.js";
import noteBookRouter from "./Routes/notebook.route.js";
import noteRouter from "./Routes/note.routes.js";
import cors from "cors"



const PORT = process.env.PORT || 4000;

const app = express();

//middlewares
app.use(express.json());
app.use(cookieParser());
app.use(cors({
  origin: "*",
  credentials: true
}));

connectDB();
// Test route
app.get("/", (req, res) => {
  res.send("Server is up and running 🚀");
});

app.use('/api/user',userRouter)
app.use('/api/notebook',noteBookRouter)
app.use('/api/notes',noteRouter)




export default app