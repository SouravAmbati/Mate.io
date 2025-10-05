import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';

const Homebutton = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear token from localStorage
    localStorage.removeItem("token");
    toast.success("successfully logged out")

    // Redirect to login page (or home)
    navigate("/auth");
  };

  return (
    <div className="relative flex justify-center items-center h-screen bg-[#FFFFFF]">
      {/* Logout Button - Top Right */}
      <button
        onClick={handleLogout}
        className="absolute top-4 right-4  text-black h-[40px] w-[120px] rounded-md hover:text-[#b94f4f] transition cursor-pointer"
      >
        Logout
      </button>

      {/* Main Notebook Button */}
      <div>
        <Link to={'/add-notebook'}>
          <button className="bg-[#C85454] h-[50px] w-[200px] flex justify-center items-center cursor-pointer rounded-md hover:bg-[#b94f4f] transition">
            <img
              className="w-[150px] ml-[5px]"
              src="/Logo.png"
              alt="Logo"
            />
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Homebutton
