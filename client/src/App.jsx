import React, { useContext } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Homebutton from './components/Homebutton'
import AddNotebook from './pages/AddNotebook'
import AddNotes from './pages/AddNotes'
import AllNotes from './pages/AllNotes'
import Note from './pages/Note'
import AuthForm from './pages/Register'
import { AuthContext } from '../context/AuthContext'
import {ToastContainer} from 'react-toastify'

const App = () => {
  const ProtectedRoute = ({ children }) => {
  const { token } = useContext(AuthContext);

  // if no token → redirect to /auth
  if (!token) {
    return <Navigate to="/auth" />;
  }

  return children;
};
  return (
    <div>
      <ToastContainer/>
      <Routes>
        <Route path='/auth' element={<AuthForm/>}/>
        <Route path='/' element={<><Homebutton /></>} />
        <Route path='/add-notebook' element={<ProtectedRoute><AddNotebook /></ProtectedRoute>} />
        <Route path='/editor/:id' element={<ProtectedRoute><AddNotes /></ProtectedRoute>} />
        <Route path='/all-notes/:id' element={<ProtectedRoute><AllNotes /></ProtectedRoute>} />
        <Route path='/note/:id' element={<ProtectedRoute><Note /></ProtectedRoute>} />
      </Routes>
    </div>
  )
}

export default App