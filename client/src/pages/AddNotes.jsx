// import React, { useContext, useEffect, useRef, useState } from "react";
// import Quill from "quill";
// import "quill/dist/quill.snow.css";
// import { useParams, Link, useNavigate } from "react-router-dom";
// import { NotebookContext } from "../../context/NotebookContext";
// import { FiArrowLeft } from "react-icons/fi";

// const AddNotes = () => {
//   const { id } = useParams();
//   const { GenerateNote,saveNote  } = useContext(NotebookContext);
//   const editorRef = useRef(null);
//   const quillInstance = useRef(null);
//   const [content, setContent] = useState("");
//   const [topicName, setTopicName] = useState("");
//   const navigate = useNavigate();

//   useEffect(() => {
//     if (editorRef.current && !quillInstance.current) {
//       quillInstance.current = new Quill(editorRef.current, {
//         theme: "snow",
//         placeholder: "Write something...",
//       });

//       quillInstance.current.on("text-change", () => {
//         setContent(quillInstance.current.root.innerHTML);
//       });
//     }
//   }, []);

//   const handleGenerate = async () => {
//     if (!topicName.trim()) {
//       alert("Please enter a topic name before generating");
//       return;
//     }
//     // const note=generateNote(topicName)
//     const res = await GenerateNote(topicName); // no noteContent → triggers AI
//     if (res.success) {
//       const generated = res.data;
//       quillInstance.current.root.innerHTML = generated; // inject AI text into editor
//       setContent(generated);
//     } else {
//       alert(res.message);
//     }
//   };

//   const handleSubmit = async () => {
//     if (!topicName.trim()) {
//       alert("Please enter a topic name");
//       return;
//     }
//     const res = await saveNote(id,content);
//     if (res.success) {
//       alert("Note saved!");
//       navigate(`/note/${id}`);
//     } else {
//       alert(res.message);
//     }
//   };

//   return (
//     <div className="editor-wrapper flex flex-col h-screen p-4">
//       {/* Fixed Back Button (always at top-left corner of screen) */}
//                   <button
//                     onClick={() => navigate(`/note/${id}`)}
//                     className="fixed top-5 left-5 flex items-center gap-2  text-white px-3 py-2 rounded-md cursor-pointer hover:text-[#b94f4f] transition z-50 shadow-md"
//                   >
//                     <FiArrowLeft size={20} />
//                     Back
//                   </button>
//       {/* Topic input */}
//       <input
//         type="text"
//         value={topicName}
//         onChange={(e) => setTopicName(e.target.value)}
//         placeholder="Enter topic name..."
//         className="mb-4 p-2 border rounded bg-amber-50"
//       />

//       {/* Editor */}
//       <div ref={editorRef} className="flex-1 border rounded bg-white" />

//       {/* Button container */}
//       <div className="absolute bottom-5 right-5 flex flex-col gap-2">
//         <button onClick={handleGenerate} className="editor-button">
//           Generate
//         </button>
//         <button onClick={handleSubmit} className="editor-button">
//           Submit
//         </button>
//       </div>
//     </div>
//   );
// };

// export default AddNotes;









// import React, { useContext, useEffect, useRef, useState } from "react";
// import Quill from "quill";
// import "quill/dist/quill.snow.css";
// import { useParams, useNavigate } from "react-router-dom";
// import { NotebookContext } from "../../context/NotebookContext";
// import { FiArrowLeft } from "react-icons/fi";

// const AddNotes = () => {
//   const { id } = useParams();
//   const { GenerateNote, saveNote } = useContext(NotebookContext);
//   const editorRef = useRef(null);
//   const quillInstance = useRef(null);
//   const [content, setContent] = useState("");
//   const [topicName, setTopicName] = useState("");
//   const navigate = useNavigate();

//   useEffect(() => {
//     if (editorRef.current && !quillInstance.current) {
//       quillInstance.current = new Quill(editorRef.current, {
//         theme: "snow",
//         placeholder: "Write something...",
//       });

//       quillInstance.current.on("text-change", () => {
//         setContent(quillInstance.current.root.innerHTML);
//       });
//     }
//   }, []);

//   const handleGenerate = async () => {
//     if (!topicName.trim()) {
//       alert("Please enter a topic name before generating");
//       return;
//     }
//     const res = await GenerateNote(topicName);
//     if (res.success) {
//       const generated = res.data;
//       quillInstance.current.root.innerHTML = generated;
//       setContent(generated);
//     } else {
//       alert(res.message);
//     }
//   };

//   const handleSubmit = async () => {
//     if (!topicName.trim()) {
//       alert("Please enter a topic name");
//       return;
//     }
//     const res = await saveNote(id, content);
//     if (res.success) {
//       alert("Note saved!");
//       navigate(`/note/${id}`);
//     } else {
//       alert(res.message);
//     }
//   };

//   return (
//     <div className="editor-wrapper flex flex-col h-screen p-4 relative">
//       {/* Fixed Back Button */}
//       <button
//         onClick={() => navigate(`/note/${id}`)}
//         className="fixed top-5 left-5 flex items-center gap-2 text-white px-3 py-2 rounded-md cursor-pointer hover:text-[#b94f4f] transition z-50 shadow-md"
//       >
//         <FiArrowLeft size={20} />
//         Back
//       </button>

//       {/* Main content area with padding to avoid overlap */}
//       <div className="flex flex-col flex-1 pt-16">
//         {/* Topic input */}
//         <input
//           type="text"
//           value={topicName}
//           onChange={(e) => setTopicName(e.target.value)}
//           placeholder="Enter topic name..."
//           className="mb-4 p-2 border rounded bg-amber-50"
//         />

//         {/* Editor */}
//         <div ref={editorRef} className="flex-1 border rounded bg-white" />
//       </div>

//       {/* Button container */}
//       <div className="fixed bottom-5 right-5 flex flex-col gap-2">
//         <button onClick={handleGenerate} className="editor-button">
//           Generate
//         </button>
//         <button onClick={handleSubmit} className="editor-button">
//           Submit
//         </button>
//       </div>
//     </div>
//   );
// };

// export default AddNotes;






import React, { useContext, useEffect, useRef, useState } from "react";
import Quill from "quill";
import "quill/dist/quill.snow.css";
import { useParams, useNavigate } from "react-router-dom";
import { NotebookContext } from "../../context/NotebookContext";
import { FiArrowLeft } from "react-icons/fi";

const AddNotes = () => {
  const { id } = useParams();
  const { GenerateNote, saveNote } = useContext(NotebookContext);
  const editorRef = useRef(null);
  const quillInstance = useRef(null);
  const [content, setContent] = useState("");
  const [topicName, setTopicName] = useState("");
  const [loading, setLoading] = useState(false); // 🔹 loading state
  const navigate = useNavigate();

  useEffect(() => {
    if (editorRef.current && !quillInstance.current) {
      quillInstance.current = new Quill(editorRef.current, {
        theme: "snow",
        placeholder: "Write something...",
        readOnly: false,
      });

      quillInstance.current.on("text-change", () => {
        setContent(quillInstance.current.root.innerHTML);
      });
    }
  }, []);

  const handleGenerate = async () => {
    if (!topicName.trim()) {
      alert("Please enter a topic name before generating");
      return;
    }
    setLoading(true); // show loader
    quillInstance.current.disable(); // prevent typing during loading

    const res = await GenerateNote(topicName);

    if (res.success) {
      const generated = res.data;
      quillInstance.current.root.innerHTML = generated;
      setContent(generated);
    } else {
      alert(res.message);
    }

    quillInstance.current.enable();
    setLoading(false); // hide loader
  };

  const handleSubmit = async () => {
    if (!topicName.trim()) {
      alert("Please enter a topic name");
      return;
    }
    const res = await saveNote(id, content);
    if (res.success) {
      alert("Note saved!");
      navigate(`/note/${id}`);
    } else {
      alert(res.message);
    }
  };

  return (
    <div className="editor-wrapper flex flex-col h-screen p-4 relative">
      {/* Fixed Back Button */}
      <button
        onClick={() => navigate(`/note/${id}`)}
        className="fixed top-5 left-5 flex items-center gap-2 text-white px-3 py-2 rounded-md cursor-pointer hover:text-[#b94f4f] transition z-50 shadow-md"
      >
        <FiArrowLeft size={20} />
        Back
      </button>

      {/* Main content area with padding to avoid overlap */}
      <div className="flex flex-col flex-1 pt-16 relative">
        {/* Topic input */}
        <input
          type="text"
          value={topicName}
          onChange={(e) => setTopicName(e.target.value)}
          placeholder="Enter topic name..."
          className="mb-4 p-2 border rounded bg-amber-50"
        />

        {/* Editor with loader overlay */}
        <div ref={editorRef} className="flex-1 border rounded bg-white relative" />

        {loading && (
          <div className="absolute inset-0 flex items-center justify-center  z-10 rounded">
            <div className="w-10 h-10 border-4 border-blue-400 border-t-transparent rounded-full animate-spin"></div>
          </div>
        )}
      </div>

      {/* Button container */}
      <div className="fixed bottom-5 right-5 flex flex-col gap-2">
        <button
          onClick={handleGenerate}
          className="editor-button disabled:opacity-50"
          disabled={loading}
        >
          {loading ? "Generating..." : "Generate"}
        </button>
        <button
          onClick={handleSubmit}
          className="editor-button"
          disabled={loading}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default AddNotes;
