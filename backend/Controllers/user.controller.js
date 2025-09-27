import user from "../Models/user.model.js";
import validator from "validator";
import bcrypt from "bcrypt"
import { createToken } from "../lib/CreateToken.js";

//user register
export const SignUp = async (req, res) => {
  try {
    //collect name,email and password
    const { name, email, password } = req.body;
    //check if any field is empty
    if (!name || !email || !password) {
      return res.json({success:false, message: "Field is empty" });
    }
    //check if email is valid
    if (!validator.isEmail(email)) {
      return res.json({ success:false, message: "Email is invalid" });
    }
    // check if email exist
    const userExist = await user.findOne({ email });
    if (userExist) {
      return res.json({success:false, message: "User already exist" });
    }
    //hash password
    const hashedPassword = await bcrypt.hash(password, 10);
    //store name email and password in db
      const newUser = new user({
            name,
            email,
            password:hashedPassword
        });
        const User = await newUser.save();
        const token=createToken(User._id);
    //share token
    res.json({success:true,message:"successfully registered",userData:User,token: token})
  } catch (error) {
    console.log(error.message);
    return res.json({success:false,message:error.message})
  }
};

//user login
export const Login = async (req, res) => {
  try {
    // take email and password
    const { email, password } = req.body;

    // check if any field is empty
    if (!email || !password) {
      return res.json({ success: false, message: "Field is empty" });
    }

    // check if email is valid
    if (!validator.isEmail(email)) {
      return res.json({ success: false, message: "Email is invalid" });
    }

    // check if user exists
    const userExist = await user.findOne({ email });
    if (!userExist) {
      return res.json({ success: false, message: "User not found" });
    }

    // check if password matches
    const isMatch = await bcrypt.compare(password, userExist.password);
    if (!isMatch) {
      return res.json({ success: false, message: "Invalid credentials" });
    }

    // generate token
    const token = createToken(userExist._id);

    // share token + user data
    return res.json({
      success: true,
      message: "Successfully Logged In",
      userData: userExist,
      token: token
    });

  } catch (error) {
    console.log(error.message);
    return res.json({ success: false, message: error.message });
  }
};
