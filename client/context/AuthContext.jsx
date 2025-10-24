import { createContext, useEffect, useState } from "react"
import axios from "axios";
import { jwtDecode } from "jwt-decode";
const backendURL=import.meta.env.VITE_BACKEND_URL
axios.defaults.baseURL=backendURL


export const AuthContext=createContext();

export const AuthProvider=({children})=>{
  const [user,setUser]=useState(null);
  const [token,setToken]=useState(localStorage.getItem("token")||null);

  useEffect(()=>{
    if(token){
        localStorage.setItem("token",token);
    }else{
        localStorage.removeItem("token")
    }
  },[token]);


  const handleLogout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem("token");
    navigate("/auth");
  };

  // ✅ Check token validity and auto logout when expired
  useEffect(() => {
    if (token) {
      try {
        const decoded = jwtDecode(token);
        const currentTime = Date.now() / 1000;

        if (decoded.exp < currentTime) {
          // Token already expired
          handleLogout();
        } else {
          // Still valid → set timeout to auto logout
          const remainingTime = (decoded.exp - currentTime) * 1000;
          console.log("Token expires in:", remainingTime / 1000, "seconds");

          const timer = setTimeout(() => {
            console.log("Token expired, logging out...");
            handleLogout();
          }, remainingTime);

          return () => clearTimeout(timer);
        }
      } catch (err) {
        console.error("Error decoding token:", err);
        handleLogout();
      }
    } else {
      localStorage.removeItem("token");
    }
  }, [token]);


  const signup=async(formData)=>{
    try {
        const res=await axios.post("/api/user/signup",formData);
        if(res.data.success){
            setUser(res.data.userData);
            setToken(res.data.token);
        }
        return res.data;
    } catch (error) {
        return {success:false,message:error.message}
    }
  }

   const login = async (formData) => {
    try {
      const res = await axios.post("/api/user/login", formData);
      if (res.data.success) {
        setUser(res.data.userData);
        setToken(res.data.token);
      }
      return res.data;
    } catch (error) {
      return { success: false, message: error.message };
    }
  };

  return (
    <AuthContext.Provider value={{user,token,signup,login,handleLogout}}>
        {children}
    </AuthContext.Provider>
  )
}