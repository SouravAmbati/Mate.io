// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'
// import { BrowserRouter } from 'react-router-dom';
// import { AuthProvider } from '../context/AuthContext.jsx';
// import { NotebookProvider } from '../context/NotebookContext.jsx';

// createRoot(document.getElementById('root')).render(
//   <BrowserRouter>
//     <AuthProvider>
//       <NotebookProvider>
//         <App />
//       </NotebookProvider>
//     </AuthProvider>
//   </BrowserRouter>,
// )


import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from '../context/AuthContext.jsx';
import { NotebookProvider } from '../context/NotebookContext.jsx';
import { GoogleOAuthProvider } from '@react-oauth/google'; 

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>  
      <AuthProvider>
        <NotebookProvider>
          <App />
        </NotebookProvider>
      </AuthProvider>
    </GoogleOAuthProvider>
  </BrowserRouter>,
)

