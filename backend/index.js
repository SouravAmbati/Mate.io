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
const allowedOrigins = [
  "https://mate-io-frontend.vercel.app",
  "https://mate-io-frontend-git-main-souravs-projects-65.vercel.app"
];
// app.use(cors({
//   origin: "http://localhost:5173",
//   credentials: true
// }));
// app.use(cors({
//   // origin: "https://mate-io-frontend.vercel.app", // frontend URL
//   origin: "mate-io-frontend-git-main-souravs-projects-65.vercel.app", // frontend URL
//   credentials: true, // allow cookies
// }));
app.use(cors({
  origin: function(origin, callback){
    if(!origin) return callback(null, true); // allow non-browser requests
    if(allowedOrigins.includes(origin)){
      return callback(null, true);
    } else {
      return callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
}));

app.options("*", cors({
  origin: allowedOrigins,
  credentials: true,
}));




connectDB();
// Test route
app.get("/", (req, res) => {
  res.send("Server is up and running 🚀");
});

app.use('/api/user',userRouter)
app.use('/api/notebook',noteBookRouter)
app.use('/api/notes',noteRouter)

app.listen(PORT, () => {
  console.log(`✅ Server listening on http://localhost:${PORT}`);
});


export default app