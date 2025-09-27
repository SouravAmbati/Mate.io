// import axios from "axios";
// import { createContext } from "react";

// export const NotebookContext = createContext();

// axios.defaults.withCredentials = true;

// export const NotebookProvider = ({ children }) => {
//   const token = localStorage.getItem("token");

//   const createNotebook = async (notebookName) => {
//     try {
//       const res = await axios.post(
//         "/api/notebook/create",
//         { notebookName },
//         {
//           headers: { Authorization: `Bearer ${token}` },
//         }
//       );
//       return res.data;
//     } catch (error) {
//       return { success: false, message: error.message };
//     }
//   };

//   const getAllNotebooks = async () => {
//     try {
//       const res = await axios.get("/api/notebook/notebooks", {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       return res.data;
//     } catch (error) {
//       return { success: false, message: error.message };
//     }
//   };

//   const getNotebookById = async (id) => {
//     try {
//       const res = await axios.get(`/api/notebook/notebooks/${id}`, {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       return res.data;
//     } catch (error) {
//       return { success: false, message: error.message };
//     }
//   }; // <-- this closing bracket was missing

//   return (
//     <NotebookContext.Provider
//       value={{ createNotebook, getAllNotebooks, getNotebookById }}
//     >
//       {children}
//     </NotebookContext.Provider>
//   );
// };

import axios from "axios";
import { createContext, useContext } from "react";
import { AuthContext } from "./AuthContext";
import { useState } from "react";

export const NotebookContext = createContext();

axios.defaults.withCredentials = true;

export const NotebookProvider = ({ children }) => {
  const { token } = useContext(AuthContext);
  const [ID,setId]=useState(null);

  const authHeaders = () => ({
    headers: { Authorization: token ? `Bearer ${token}` : "" },
  });

  const createNotebook = async (notebookName) => {
    try {
      if (!token) return { success: false, message: "User not authenticated" };

      const res = await axios.post("/api/notebook/create", { notebookName }, authHeaders());
      return res.data;
    } catch (error) {
      return { success: false, message: error.response?.data?.message || error.message };
    }
  };




  const getAllNotebooks = async () => {
    try {
      if (!token) return { success: false, message: "User not authenticated" };

      const res = await axios.get("/api/notebook/notebooks", authHeaders());
      return res.data;
    } catch (error) {
      return { success: false, message: error.response?.data?.message || error.message };
    }
  };

  const getNotebookById = async (id) => {
    try {
      if (!token) return { success: false, message: "User not authenticated" };

      const res = await axios.get(`/api/notebook/notebooks/${id}`, authHeaders());
      return res.data;
    } catch (error) {
      return { success: false, message: error.response?.data?.message || error.message };
    }
  };

  const getNotesByNotebookId = async (notebookId) => {
    try {
      const res = await axios.get(`/api/notes/note/${notebookId}`, {
        headers: { Authorization: token ? `Bearer ${token}` : "" }
      });
      return res.data;
    } catch (error) {
      console.log(error);
      return { success: false, message: error.message };
    }
  };

  const specificNote = async (id) => {
    try {
      const res = await axios.get(`/api/notes/specific-note/${id}`, {
        headers: { Authorization: token ? `Bearer ${token}` : "" }
      });
      console.log("Axios response:", res.data);
      return res.data;
    } catch (error) {
      console.log(error);
      return { success: false, message: error.message };
    }
  }

  const createNote = async (noteId, topicName) => {
    try {
      if (!token) return { success: false, message: "User not authenticated" };

      const res = await axios.post(
        `/api/notes/create/${noteId}`,
        { topicName },
        authHeaders()
      );
      return res.data;
    } catch (error) {
      return { success: false, message: error.response?.data?.message || error.message };
    }
  };

  const saveNote = async (id, content) => {
    try {
      if (!token) return { success: false, message: "User not authenticated" };

      const res = await axios.post(
        `/api/notes/save/${id}`,
        { id, content },
        authHeaders()
      );
      return res.data;
    } catch (error) {
      return { success: false, message: error.response?.data?.message || error.message };
    }
  }
  const GenerateNote = async (topicName) => {
    try {
      if (!token) return { success: false, message: "User not authenticated" };

      const res = await axios.post(
        `/api/notes/generate`,
        { topicName },
        authHeaders()
      );
      return res.data;
    } catch (error) {
      return { success: false, message: error.response?.data?.message || error.message };
    }
  }

  return (
    <NotebookContext.Provider
      value={{ createNotebook, getAllNotebooks, getNotebookById, getNotesByNotebookId, createNote, specificNote, saveNote, GenerateNote,ID,setId }}
    >
      {children}
    </NotebookContext.Provider>
  );
};
