import React from 'react'
// import { FiTrash2 } from "react-icons/fi";


const Card = ({ title }) => {
  return (
    <div className='h-[300px] md:w-[300px] w-[170px] md:h-[400px] rounded-[40px] bg-[#CCCCCC] flex flex-col justify-center'>
       <div className='h-auto md:h-auto w-full bg-[#151515] md:text-[48px] text-white flex items-center justify-center italic text-[30px]'>
         {title}
       </div>
    </div>
  )
}

export default Card

//  <div className='custom-scroll h-screen overflow-y-scroll w-full text-white'>
       
//     </div>
// <FiTrash2 className="text-red-500 cursor-pointer mr-[500px]" />


