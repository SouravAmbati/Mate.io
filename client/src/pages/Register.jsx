// import React, { useContext, useState } from "react";
// import { AuthContext } from "../../context/AuthContext";
// import { useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";

// const AuthForm = () => {
//   const [isLogin, setIsLogin] = useState(false);
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: "",
//   });
//   const {signup,login}=useContext(AuthContext)
//   const navigate = useNavigate();
//   const handleChange = (e) => {
//     setFormData((prev) => ({
//       ...prev,
//       [e.target.name]: e.target.value,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     let response;
//     if (isLogin) {
      
//       response= await login({email:formData.email, password:formData.password});
//     } else {
//       response = await signup(formData);
//     }
//     if (response.success) {
//       navigate("/add-notebook"); // 👈 redirect after success
//       toast.success(response.message)
//     } else {
//       toast.error(response.message);
//     }
//   };

//   return (
//     <div className="flex justify-center items-center h-screen bg-[#FFFFFF]">
//       <div className="bg-white shadow-lg rounded-2xl p-8 w-[90%] max-w-md">
//         <h2 className="text-2xl font-bold text-center mb-6 text-[#C85454]">
//           {isLogin ? "Login" : "Sign Up"}
//         </h2>

//         <form onSubmit={handleSubmit} className="space-y-4">
//           {!isLogin && (
//             <input
//               type="text"
//               name="name"
//               placeholder="Name"
//               value={formData.name}
//               onChange={handleChange}
//               className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:border-[#C85454]"
//               required
//             />
//           )}

//           <input
//             type="email"
//             name="email"
//             placeholder="Email"
//             value={formData.email}
//             onChange={handleChange}
//             className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:border-[#C85454]"
//             required
//           />

//           <input
//             type="password"
//             name="password"
//             placeholder="Password"
//             value={formData.password}
//             onChange={handleChange}
//             className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:border-[#C85454]"
//             required
//           />

//           <button
//             type="submit"
//             className="w-full bg-[#C85454] text-white py-3 rounded-lg hover:bg-[#a63d3d] transition"
//           >
//             {isLogin ? "Login" : "Sign Up"}
//           </button>
//         </form>

//         <p className="text-center mt-4 text-sm">
//           {isLogin ? "Don’t have an account?" : "Already have an account?"}{" "}
//           <button
//             onClick={() => setIsLogin(!isLogin)}
//             className="text-[#C85454] font-semibold cursor-pointer"
//           >
//             {isLogin ? "Sign Up" : "Login"}
//           </button>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default AuthForm;
// import React, { useContext, useState } from "react";
// import { AuthContext } from "../../context/AuthContext";
// import { useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";
// import { GoogleLogin } from "@react-oauth/google"; // ✅ add this

// const AuthForm = () => {
//   const [isLogin, setIsLogin] = useState(false);
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: "",
//   });
//   const { signup, login, googleLogin } = useContext(AuthContext);
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setFormData((prev) => ({
//       ...prev,
//       [e.target.name]: e.target.value,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     let response;
//     if (isLogin) {
//       response = await login({ email: formData.email, password: formData.password });
//     } else {
//       response = await signup(formData);
//     }
//     if (response.success) {
//       navigate("/add-notebook");
//       toast.success(response.message);
//     } else {
//       toast.error(response.message);
//     }
//   };

//   // ✅ handle google login
//   const handleGoogleSuccess = async (credentialResponse) => {
//     const token = credentialResponse.credential;
//     const res = await googleLogin(token);
//     if (res.success) {
//       toast.success(res.message);
//       navigate("/add-notebook");
//     } else {
//       toast.error(res.message);
//     }
//   };

//   const handleGoogleError = () => {
//     toast.error("Google Sign-in Failed!");
//   };

//   return (
//     <div className="flex justify-center items-center h-screen bg-[#FFFFFF]">
//       <div className="bg-white shadow-lg rounded-2xl p-8 w-[90%] max-w-md">
//         <h2 className="text-2xl font-bold text-center mb-6 text-[#C85454]">
//           {isLogin ? "Login" : "Sign Up"}
//         </h2>

//         <form onSubmit={handleSubmit} className="space-y-4">
//           {!isLogin && (
//             <input
//               type="text"
//               name="name"
//               placeholder="Name"
//               value={formData.name}
//               onChange={handleChange}
//               className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:border-[#C85454]"
//               required
//             />
//           )}

//           <input
//             type="email"
//             name="email"
//             placeholder="Email"
//             value={formData.email}
//             onChange={handleChange}
//             className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:border-[#C85454]"
//             required
//           />

//           <input
//             type="password"
//             name="password"
//             placeholder="Password"
//             value={formData.password}
//             onChange={handleChange}
//             className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:border-[#C85454]"
//             required
//           />

//           <button
//             type="submit"
//             className="w-full bg-[#C85454] text-white py-3 rounded-lg hover:bg-[#a63d3d] transition"
//           >
//             {isLogin ? "Login" : "Sign Up"}
//           </button>
//         </form>

//         {/* ✅ Google Login Button */}
//         <div className="flex justify-center mt-5">
//           <GoogleLogin onSuccess={handleGoogleSuccess} onError={handleGoogleError} />
//         </div>

//         <p className="text-center mt-4 text-sm">
//           {isLogin ? "Don’t have an account?" : "Already have an account?"}{" "}
//           <button
//             onClick={() => setIsLogin(!isLogin)}
//             className="text-[#C85454] font-semibold cursor-pointer"
//           >
//             {isLogin ? "Sign Up" : "Login"}
//           </button>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default AuthForm;

//31/10/2025
import React from "react";
import { toast } from "react-toastify";
import { GoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";

const AuthForm = () => {
  const { googleLogin } = useContext(AuthContext);
  const navigate = useNavigate();

  // Handle Google login success
  const handleGoogleSuccess = async (credentialResponse) => {
    const token = credentialResponse.credential;
    const res = await googleLogin(token);
    if (res.success) {
      toast.success(res.message);
      navigate("/add-notebook");
    } else {
      toast.error(res.message);
    }
  };

  
  const handleGoogleError = () => {
    toast.error("Google Sign-in Failed!");
  };

  return (
    <div className="flex justify-center items-center h-screen bg-[#FFFFFF] px-4">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-sm text-center">
        <h2 className="text-2xl font-bold text-[#C85454] mb-6">
          Sign in to Mate-IO
        </h2>

        {/* ✅ Google Login Button */}
        <div className="flex justify-center">
          <GoogleLogin
            onSuccess={handleGoogleSuccess}
            onError={handleGoogleError}
            width="100%" 
          />
        </div>

        <p className="text-gray-500 text-sm mt-4">
          Continue securely using your Google account.
        </p>
      </div>
    </div>
  );
};

export default AuthForm;


