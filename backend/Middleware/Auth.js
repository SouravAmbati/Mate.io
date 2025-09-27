
import user from "../Models/user.model.js";
import jwt from "jsonwebtoken"

// export const protectRoute=async(req,res,next)=>{
//     try {
//         const token=req.headers.token;
//         const decoded=jwt.verify(token,process.env.JWT_SECRET)
        
//         const User=await user.findById(decoded.userId).select("-password")
//         if(!User){
//             return res.json({success:false,message:"user not found"});
//         }
//         req.user=User;
//         next();
//     } catch (error) {
//         console.log(error.message);
//         return res.json({success:false,message:error.message});
//     }
// }


export const protectRoute = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization; // standard way
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.json({ success: false, message: "No token provided" });
    }

    const token = authHeader.split(" ")[1]; // extract jwt
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const User = await user.findById(decoded.userId).select("-password");
    if (!User) {
      return res.json({ success: false, message: "User not found" });
    }

    req.user = User;
    next();
  } catch (error) {
    console.log(error.message);
    return res.json({ success: false, message: error.message });
  }
};
