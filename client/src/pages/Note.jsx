// import React, { useContext, useEffect, useState } from "react";
// import { Link, useNavigate, useParams } from "react-router-dom";
// import { NotebookContext } from "../../context/NotebookContext";
// import { FiArrowLeft } from "react-icons/fi";

// const Note = () => {
//   const { id } = useParams();
//   const { getNotesByNotebookId,specificNote,ID } = useContext(NotebookContext);
//   const [notes, setNotes] = useState([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchNotes = async () => {
//       console.log("Notebook ID from URL:", id);
//       const res = await specificNote(id);
//        console.log("API response:", res);
//       if (res.success) {
//         setNotes(res.data);
//       }
//     };
//     fetchNotes();
//   }, [id]);

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-[#151515] px-4">
//       {/* Fixed Back Button (always at top-left corner of screen) */}
//             <button
//               onClick={() => navigate(`/all-notes/${ID}`)}
//               className="fixed top-5 left-5 flex items-center gap-2  text-white px-3 py-2 rounded-md cursor-pointer hover:text-[#b94f4f] transition z-50 shadow-md"
//             >
//               <FiArrowLeft size={20} />
//               Back
//             </button>
      
//       <div className="bg-[#1E1E1E] text-white rounded-xl shadow-lg p-6 sm:p-8 md:p-10 max-w-2xl w-full text-center">
//         {Array.isArray(notes) && notes.length > 0 ? (
//           notes.map((note) => (
//             <div key={note._id} className="mb-6">
//               <h2 className="text-xl sm:text-2xl md:text-3xl font-bold italic mb-4">
//                 {note.topic}
//               </h2>
//               <p className="text-sm sm:text-base md:text-lg leading-relaxed italic font-[Inter]">
//                 {note.note}
//               </p>
//             </div>
//           ))
//         ) : (
//           <p className="text-gray-400">No notes available</p>
//         )}
//         <Link to={`/editor/${id}`}>
//           <button className="mt-6 w-full sm:w-auto px-6 py-3 bg-[#C85454] cursor-pointer hover:bg-[#C854] text-white font-semibold rounded-lg shadow-md transition-all duration-300">
//             ✍️ Edit Notes
//           </button>
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default Note;


// import React, { useContext, useEffect, useState } from "react";
// import { Link, useNavigate, useParams } from "react-router-dom";
// import { NotebookContext } from "../../context/NotebookContext";
// import { FiArrowLeft } from "react-icons/fi";

// const Note = () => {
//   const { id } = useParams();
//   const { getNotesByNotebookId, specificNote, ID } = useContext(NotebookContext);
//   const [notes, setNotes] = useState([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchNotes = async () => {
//       console.log("Notebook ID from URL:", id);
//       const res = await specificNote(id);
//       console.log("API response:", res);
//       if (res.success) {
//         setNotes(res.data);
//       }
//     };
//     fetchNotes();
//   }, [id]);

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-[#151515] px-4">
//       {/* Fixed Back Button */}
//       <button
//         onClick={() => navigate(`/all-notes/${ID}`)}
//         className="fixed top-5 left-5 flex items-center gap-2 text-white px-3 py-2 rounded-md cursor-pointer hover:text-[#b94f4f] transition z-50 shadow-md"
//       >
//         <FiArrowLeft size={20} />
//         Back
//       </button>

//       <div className="bg-[#1E1E1E] text-white rounded-xl shadow-lg p-6 sm:p-8 md:p-10 max-w-2xl w-full text-center">
//         {Array.isArray(notes) && notes.length > 0 ? (
//           notes.map((note) => (
//             <div key={note._id} className="mb-6 text-left">
//               {/* Topic Title */}
//               <h2 className="text-xl sm:text-2xl md:text-3xl font-bold italic mb-4 text-center">
//                 {note.topic}
//               </h2>

//               {/* Quill styled content */}
//               <div
//                 className="prose prose-invert max-w-none leading-relaxed"
//                 dangerouslySetInnerHTML={{ __html: note.note }}
//               />
//             </div>
//           ))
//         ) : (
//           <p className="text-gray-400">No notes available</p>
//         )}

//         <Link to={`/editor/${id}`}>
//           <button className="mt-6 w-full sm:w-auto px-6 py-3 bg-[#C85454] cursor-pointer hover:bg-[#a53e3e] text-white font-semibold rounded-lg shadow-md transition-all duration-300">
//             ✍️ Edit Notes
//           </button>
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default Note;


//commented on 5th october
// import React, { useContext, useEffect, useState } from "react";
// import { Link, useNavigate, useParams } from "react-router-dom";
// import { NotebookContext } from "../../context/NotebookContext";
// import { FiArrowLeft } from "react-icons/fi";

// const Note = () => {
//   const { id } = useParams();
//   const { specificNote, ID } = useContext(NotebookContext);
//   const [notes, setNotes] = useState([]);
//   const [loading, setLoading] = useState(true); // <-- loading state
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchNotes = async () => {
//       setLoading(true); // start loading
//       console.log("Notebook ID from URL:", id);
//       const res = await specificNote(id);
//       console.log("API response:", res);
//       if (res.success) {
//         setNotes(res.data);
//       } else {
//         setNotes([]);
//       }
//       setLoading(false); // stop loading
//     };
//     fetchNotes();
//   }, [id, specificNote]);

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-[#151515] px-4">
//       {/* Fixed Back Button */}
//       <button
//         onClick={() => navigate(`/all-notes/${ID}`)}
//         className="fixed top-5 left-5 flex items-center gap-2 text-white px-3 py-2 rounded-md cursor-pointer hover:text-[#b94f4f] transition z-50 shadow-md"
//       >
//         <FiArrowLeft size={20} />
//         Back
//       </button>

//       <div className="bg-[#1E1E1E] text-white rounded-xl shadow-lg p-6 sm:p-8 md:p-10 max-w-2xl w-full text-center">
//         {/* Show loading first */}
//         {loading ? (
//           <p className="text-gray-400 text-lg">Loading note...</p>
//         ) : Array.isArray(notes) && notes.length > 0 ? (
//           notes.map((note) => (
//             <div key={note._id} className="mb-6 text-left">
//               {/* Topic Title */}
//               <h2 className="text-xl sm:text-2xl md:text-3xl font-bold italic mb-4 text-center">
//                 {note.topic}
//               </h2>

//               {/* Quill styled content */}
//               <div
//                 className="prose prose-invert max-w-none leading-relaxed"
//                 dangerouslySetInnerHTML={{ __html: note.note }}
//               />
//             </div>
//           ))
//         ) : (
//           <p className="text-gray-400">No notes available</p>
//         )}

//         <Link to={`/editor/${id}`}>
//           <button className="mt-6 w-full sm:w-auto px-6 py-3 bg-[#C85454] cursor-pointer hover:bg-[#a53e3e] text-white font-semibold rounded-lg shadow-md transition-all duration-300">
//             ✍️ Edit Notes
//           </button>
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default Note;




//commented on 5th october
// import React, { useContext, useEffect, useState } from "react";
// import { Link, useNavigate, useParams } from "react-router-dom";
// import { NotebookContext } from "../../context/NotebookContext";
// import { FiArrowLeft, FiTrash2 } from "react-icons/fi";

// const Note = () => {
//   const { id } = useParams();
//   const { specificNote, ID, deleteNote } = useContext(NotebookContext);
//   const [notes, setNotes] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchNotes = async () => {
//       setLoading(true);
//       const res = await specificNote(id);
//       if (res.success) {
//         setNotes(res.data);
//       } else {
//         setNotes([]);
//       }
//       setLoading(false);
//     };
//     fetchNotes();
//   }, [id, specificNote]);

//   const handleDeleteNote = async () => {
//     if (window.confirm("Are you sure you want to delete this note?")) {
//       const res = await deleteNote(id);
//       if (res.success) {
//         alert("Note deleted successfully");
//         navigate(`/all-notes/${ID}`);
//       } else {
//         alert(res.message || "Failed to delete note");
//       }
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-[#151515] px-4 relative">
//       {/* Back Button */}
//       <button
//         onClick={() => navigate(`/all-notes/${ID}`)}
//         className="fixed top-5 left-5 flex items-center gap-2 text-white px-3 py-2 rounded-md cursor-pointer hover:text-[#b94f4f] transition z-50 shadow-md"
//       >
//         <FiArrowLeft size={20} />
//         Back
//       </button>

//       {/* Delete Note Button */}
//       <button
//         onClick={handleDeleteNote}
//         className="fixed top-5 right-5 flex items-center gap-2 bg-[#C85454] hover:bg-[#b94f4f] text-white px-3 py-2 rounded-md cursor-pointer transition z-50 shadow-md"
//       >
//         <FiTrash2 size={20} />
//         <span className="hidden sm:inline">Delete Note</span>
//       </button>

//       {/* Note Content */}
//       <div className="bg-[#1E1E1E] text-white rounded-xl shadow-lg p-6 sm:p-8 md:p-10 max-w-2xl w-full text-center mt-10">
//         {loading ? (
//           <p className="text-gray-400 text-lg">Loading note...</p>
//         ) : Array.isArray(notes) && notes.length > 0 ? (
//           notes.map((note) => (
//             <div key={note._id} className="mb-6 text-left">
//               {/* Note Topic */}
//               <h2 className="text-xl sm:text-2xl md:text-3xl font-bold italic mb-4 text-center">
//                 {note.topic}
//               </h2>

//               {/* Quill-styled Note Content */}
//               <div
//                 className="prose prose-invert max-w-none leading-relaxed"
//                 dangerouslySetInnerHTML={{ __html: note.note }}
//               />
//             </div>
//           ))
//         ) : (
//           <p className="text-gray-400">No notes available</p>
//         )}

//         {/* Edit Button */}
//         <Link to={`/editor/${id}`}>
//           <button className="mt-6 w-full sm:w-auto px-6 py-3 bg-[#C85454] cursor-pointer hover:bg-[#a53e3e] text-white font-semibold rounded-lg shadow-md transition-all duration-300">
//             ✍️ Edit Notes
//           </button>
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default Note;


import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { NotebookContext } from "../../context/NotebookContext";
import { FiArrowLeft, FiTrash2 } from "react-icons/fi";
import axios from "axios";
import "quill/dist/quill.snow.css";

const Note = () => {
  const { id } = useParams();
  const { specificNote, ID } = useContext(NotebookContext);
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // ✅ Fetch notes when page loads
  useEffect(() => {
    const fetchNotes = async () => {
      setLoading(true);
      console.log("Notebook ID from URL:", id);
      const res = await specificNote(id);
      console.log("API response:", res);
      if (res.success) {
        setNotes(res.data);
      } else {
        setNotes([]);
      }
      setLoading(false);
    };
    fetchNotes();
  }, [id, specificNote]);

  // ✅ Delete note function
  const deleteNote = async (noteId) => {
    if (!window.confirm("Are you sure you want to delete this note?")) return;
    try {
      const res = await axios.delete(`/api/notes/note/${noteId}`);
      if (res.data.success) {
        alert("Note deleted successfully!");
        navigate(`/all-notes/${ID}`);
      } else {
        alert(res.data.message || "Failed to delete note");
      }
    } catch (error) {
      alert(error.response?.data?.message || error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#151515] px-4">
      {/* Fixed Back Button */}
      <button
        onClick={() => navigate(`/all-notes/${ID}`)}
        className="fixed top-5 left-5 flex items-center gap-2 text-white px-3 py-2 rounded-md cursor-pointer hover:text-[#b94f4f] transition z-50 shadow-md"
      >
        <FiArrowLeft size={20} />
        Back
      </button>

      <div className="bg-[#1E1E1E] text-white rounded-xl shadow-lg p-6 sm:p-8 md:p-10 max-w-2xl w-full text-center">
        {/* Show loading first */}
        {loading ? (
          <p className="text-gray-400 text-lg">Loading note...</p>
        ) : Array.isArray(notes) && notes.length > 0 ? (
          notes.map((note) => (
            <div key={note._id} className="mb-6 text-left">
              {/* Topic Title */}
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold italic mb-4 text-center">
                {note.topic}
              </h2>

              {/* ✅ This part will render exactly like in Quill */}
              <div
                className="ql-editor bg-transparent text-white"
                dangerouslySetInnerHTML={{ __html: note.note }}
              />

              {/* Buttons (Edit + Delete) */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6">
                <Link to={`/editor/${id}`}>
                  <button className="px-6 py-3 bg-[#C85454] hover:bg-[#a53e3e] text-white font-semibold rounded-lg shadow-md transition-all duration-300 cursor-pointer">
                    ✍️ Edit Notes
                  </button>
                </Link>

                <button
                  onClick={() => deleteNote(note._id)}
                  className="flex items-center justify-center gap-2 px-6 py-3 bg-transparent border border-[#C85454] text-[#C85454] hover:bg-[#C85454] hover:text-white rounded-lg shadow-md transition-all duration-300 cursor-pointer"
                >
                  <FiTrash2 size={18} />
                  Delete Note
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-400">No notes available</p>
        )}
      </div>
    </div>
  );
};

export default Note;
