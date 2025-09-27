import { createContext, useEffect, useState } from "react"
import axios from "axios";

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
    <AuthContext.Provider value={{user,token,signup,login}}>
        {children}
    </AuthContext.Provider>
  )
}