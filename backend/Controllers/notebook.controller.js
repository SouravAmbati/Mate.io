import notebook from "../Models/notebook.model.js";

//create notebook
export const createNotebook = async (req, res) => {
  try {
    //get notebook name
    const { notebookName } = req.body;
    const userId=req.user._id
    //check if name is not empty
    if (!notebookName) {
      return res.json({ success: false, message: "required field missing" });
    }
    //store it in db with user_id(get it from params)
    const notebookExist = await notebook.findOne({ notebookName, user: userId });
    if (notebookExist) {
      return res.json({ success: false, message: "NoteBook already exist" });
    }
    const newNotebook = new notebook({
       user:userId,
       notebookName,
    });
    const Newnotebook = await newNotebook.save();
    //send the response
    res.json({success:true,data:Newnotebook,savedNotebookId:Newnotebook._id,message:"notebook created"})
  } catch (error) {
    console.log(error.message);
    return res.json({success:false,message:error.message})
  }
};

//get allNotebook
// export const GetAllNotebook = async (req, res) => {
//   try {
//     //get all notebooks
//     const notebooks=await notebook.find();
//     if(!notebooks){
//       return res.json({success:false,message:"no notebook created"})
//     }
//     //send the response
//     res.json({success:true,data:notebooks})
//   } catch (error) {
//     console.log(error.message);
//     return res.json({success:false,message:error.message})
//   }
// };

export const GetAllNotebook = async (req, res) => {
  try {
    const userId = req.user._id; // user from protectRoute

    const notebooks = await notebook.find({ user: userId });

    if (!notebooks || notebooks.length === 0) {
      return res.json({ success: false, message: "No notebook created yet" });
    }

    res.json({ success: true, data: notebooks });
  } catch (error) {
    console.log(error.message);
    return res.json({ success: false, message: error.message });
  }
};

//get SpecificNotebook
export const SpecificNotebook = async (req, res) => {
  try {
    //get userId from params
    const userId=req.params;
    //findNotebook with that userId
    const Notebook=await notebook.findOne(userId);
    if(!Notebook){
      return res.json({success:false,message:"Notebook dont exist"});
    }
    //send the response
     res.json({success:true,data:Notebook})
  } catch (error) {
    console.log(error.message);
    return res.json({success:false,message:error.message})
  }
};
