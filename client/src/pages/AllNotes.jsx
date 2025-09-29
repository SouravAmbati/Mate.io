// import React, { useState } from 'react'
// import { FiPlus } from "react-icons/fi"
// import { FiX } from "react-icons/fi";
// import Card from '../components/Card';
// import {Link} from 'react-router-dom'



// const AllNotes = () => {
//     const [display, setDisplay] = useState(false);
//     const [name,setName]=useState('')
//     const [cards, setCards] = useState([]);
//     const handleSubmit = () => {
//   if (name.trim() !== "") {
//     setCards([...cards, name]); 
//     setName(""); 
//   }
// };

     
//     return (
//         <div className='h-screen flex justify-center items-center'>

//             {/* Enter name component */}
//             {display ? <div className='w-[300px] h-[200px] bg-[#C85454] md:w-[500px] md:h-[300px] rounded-[10px] p-3'>
//                 {/* cross icon */}
//                 <div className='flex justify-end'>
//                     <FiX onClick={() => setDisplay(false)} className='text-white cursor-pointer' size={24} />
//                 </div>
//                 <div className='text-center'>
//                     <p className='normal text-2xl md:text-4xl  text-white'><span className='italic text-white text-2xl md:text-4xl'>Notebook</span>  Name</p>
//                 </div>
//                 {/* input */}
//                 <div className='flex flex-col items-center gap-2 mt-[20px] md:mt-[50px]'>
//                     <input onChange={(e)=>setName(e.target.value)} value={name} className='w-[200px] h-[30px] rounded-[5px] bg-white md:w-[400px] md:h-[50px] normal pl-2' type="text" placeholder='Maths...' />
//                     <button  onClick={()=>{
//                         handleSubmit();
//                         setDisplay(false)
//                     }} className='cursor-pointer w-[100px] bg-white border-none h-[30px] rounded-[5px] mt-[10px] ml-[90px] text-[15px] normal md:w-[161px] md:h-[40px] md:ml-[240px]'>Submit</button>
//                 </div>
//             </div> : ''}
//             {/* Add button */}
//             <div className={`${display ? 'hidden' : 'fixed bottom-10 right-10  bg-[#C85454] flex justify-center items-center h-[65px] w-[65px] rounded-full md:h-[100px] md:w-[100px]'}`}>
//                 <FiPlus onClick={() => setDisplay(true)} className="text-white text-[35px] md:text-[60px] cursor-pointer" />
//             </div>

//             {display?'':<div className='custom-scroll h-screen overflow-y-scroll w-full text-white grid grid-cols-2 md:grid-cols-6 gap-4  p-4 ' >
//                {cards.map((item, index) => (
//       <Link to={'/editor'}><Card key={index} title={item} /></Link>
//   ))}
//             </div>}

//         </div>
//     )
// }

// export default AllNotes



// import React, { useContext, useEffect, useState } from "react";
// import { FiPlus,FiX, FiArrowLeft } from "react-icons/fi";
// import Card from "../components/Card";
// import { NotebookContext } from "../../context/NotebookContext";
// import { useParams, Link, useNavigate } from "react-router-dom";


// let currentNotebookId = null;
// export const getNotebookId = () => currentNotebookId;
// const AllNotes = () => {
//   const [display, setDisplay] = useState(false);
//   const [name, setName] = useState("");
//   const [notes, setNotes] = useState([]);
//   const { getNotesByNotebookId,createNote,setId } = useContext(NotebookContext);

//   const { id } = useParams(); // notebook ID from URL
//    setId(id);
  
//   const navigate = useNavigate();

//   useEffect(() => {
    
//     const fetchNotes = async () => {
//       const res = await getNotesByNotebookId(id);
//       if (res.success) {
//         setNotes(res.data);
//       } else {
//         setNotes([]); // fallback empty
//       }
//     };
//     fetchNotes();
//   }, [id,getNotesByNotebookId]);

//   const handleSubmit = async () => {
//   if (name.trim() === "") return;

//   // send to backend
//   const res = await createNote(id, name);

//   if (res.success) {
//     // update frontend state
//     setNotes([...notes, res.data]);
//     setName("");
//     setDisplay(false);
//   } else {
//     alert(res.message); // handle errors
//   }
// };
//   return (
//     <div className="h-screen flex justify-center items-center">
//       {/* Fixed Back Button (always at top-left corner of screen) */}
//       <button
//         onClick={() => navigate("/add-notebook")}
//         className="fixed top-5 left-5 flex items-center gap-2  text-white px-3 py-2 rounded-md cursor-pointer hover:text-[#b94f4f] transition z-50 shadow-md"
//       >
//         <FiArrowLeft size={20} />
//         Back
//       </button>

//       {/* Enter name component */}
//       {display && (
//         <div className="w-[300px] h-[200px] bg-[#C85454] md:w-[500px] md:h-[300px] rounded-[10px] p-3">
//           <div className="flex justify-end">
//             <FiX onClick={() => setDisplay(false)} className="text-white cursor-pointer" size={24} />
//           </div>
//           <div className="text-center">
//             <p className="text-2xl md:text-4xl text-white">
//               <span className="italic">Note</span> Name
//             </p>
//           </div>
//           <div className="flex flex-col items-center gap-2 mt-[20px] md:mt-[50px]">
//             <input
//               onChange={(e) => setName(e.target.value)}
//               value={name}
//               className="w-[200px] h-[30px] rounded-[5px] bg-white md:w-[400px] md:h-[50px] pl-2"
//               type="text"
//               placeholder="Topic..."
//             />
//             <button
//               onClick={() => {
//                 handleSubmit();
//                 setDisplay(false);
//               }}
//               className="w-[100px] bg-white h-[30px] rounded-[5px] mt-[10px] ml-[90px] md:w-[161px] md:h-[40px] md:ml-[240px]"
//             >
//               Submit
//             </button>
//           </div>
//         </div>
//       )}

//       {/* Add button */}
//       {!display && (
//         <div className="fixed bottom-10 right-10 bg-[#C85454] flex justify-center items-center h-[65px] w-[65px] rounded-full md:h-[100px] md:w-[100px]">
//           <FiPlus onClick={() => setDisplay(true)} className="text-white text-[35px] md:text-[60px] cursor-pointer" />
//         </div>
//       )}

//       {!display && (
//         <div className="custom-scroll h-screen overflow-y-scroll pt-20 w-full text-white grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6  p-6">
//           {notes.map((item) => (
//             <Link key={item._id} to={`/note/${item._id}`}>
//               <Card title={item.topic} />
//             </Link>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default AllNotes;







import React, { useContext, useEffect, useState } from "react";
import { FiPlus, FiX, FiArrowLeft } from "react-icons/fi";
import Card from "../components/Card";
import { NotebookContext } from "../../context/NotebookContext";
import { useParams, Link, useNavigate } from "react-router-dom";

let currentNotebookId = null;
export const getNotebookId = () => currentNotebookId;

const AllNotes = () => {
  const [display, setDisplay] = useState(false);
  const [name, setName] = useState("");
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true); // <-- loading state

  const { getNotesByNotebookId, createNote, setId } = useContext(NotebookContext);
  const { id } = useParams(); // notebook ID from URL
  const navigate = useNavigate();

  useEffect(() => {
    setId(id);

    const fetchNotes = async () => {
      setLoading(true); // start loading
      const res = await getNotesByNotebookId(id);
      if (res.success) {
        setNotes(res.data);
      } else {
        setNotes([]); // fallback empty
      }
      setLoading(false); // stop loading
    };

    fetchNotes();
  }, [id, getNotesByNotebookId, setId]);

  const handleSubmit = async () => {
    if (name.trim() === "") return;

    const res = await createNote(id, name);
    if (res.success) {
      setNotes([...notes, res.data]);
      setName("");
      setDisplay(false);
    } else {
      alert(res.message);
    }
  };

  return (
    <div className="h-screen flex justify-center items-center">
      {/* Back button */}
      <button
        onClick={() => navigate("/add-notebook")}
        className="fixed top-5 left-5 flex items-center gap-2 text-white px-3 py-2 rounded-md cursor-pointer hover:text-[#b94f4f] transition z-50 shadow-md"
      >
        <FiArrowLeft size={20} />
        Back
      </button>

      {/* Enter name component */}
      {display && (
        <div className="w-[300px] h-[200px] bg-[#C85454] md:w-[500px] md:h-[300px] rounded-[10px] p-3">
          <div className="flex justify-end">
            <FiX onClick={() => setDisplay(false)} className="text-white cursor-pointer" size={24} />
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-4xl text-white">
              <span className="italic">Note</span> Name
            </p>
          </div>
          <div className="flex flex-col items-center gap-2 mt-[20px] md:mt-[50px]">
            <input
              onChange={(e) => setName(e.target.value)}
              value={name}
              className="w-[200px] h-[30px] rounded-[5px] bg-white md:w-[400px] md:h-[50px] pl-2"
              type="text"
              placeholder="Topic..."
            />
            <button
              onClick={handleSubmit}
              className="w-[100px] bg-white h-[30px] rounded-[5px] mt-[10px] ml-[90px] md:w-[161px] md:h-[40px] md:ml-[240px]"
            >
              Submit
            </button>
          </div>
        </div>
      )}

      {/* Add button */}
      {!display && (
        <div className="fixed bottom-10 right-10 bg-[#C85454] flex justify-center items-center h-[65px] w-[65px] rounded-full md:h-[100px] md:w-[100px]">
          <FiPlus onClick={() => setDisplay(true)} className="text-white text-[35px] md:text-[60px] cursor-pointer" />
        </div>
      )}

      {/* Notes list or loader */}
      {!display && (
        <div className="custom-scroll h-screen overflow-y-scroll pt-20 w-full text-white grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
          {loading ? (
            <div className="col-span-full flex justify-center items-center text-xl text-gray-300">
              Loading notes...
            </div>
          ) : notes.length > 0 ? (
            notes.map((item) => (
              <Link key={item._id} to={`/note/${item._id}`}>
                <Card title={item.topic} />
              </Link>
            ))
          ) : (
            <div className="col-span-full flex justify-center items-center text-lg text-gray-400">
              No notes found
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default AllNotes;
