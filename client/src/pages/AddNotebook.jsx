// import React, { useContext, useEffect, useState } from 'react'
// import { FiPlus } from "react-icons/fi"
// import { FiX } from "react-icons/fi";
// import Card from '../components/Card';
// import { Link, useNavigate } from 'react-router-dom'
// import { NotebookContext } from '../../context/NotebookContext';
// import { AuthContext } from '../../context/AuthContext';
// import { FiArrowLeft } from "react-icons/fi";



// const AddNotebook = () => {
//     const [display, setDisplay] = useState(false);
//     const [name, setName] = useState('')
//     const [notebooks, setNotebooks] = useState([]);
//     const { createNotebook, getAllNotebooks } = useContext(NotebookContext);
//     const {token}=useContext(AuthContext)
//     const navigate = useNavigate();
//     const handleSubmit = async() => {
//   if (name.trim() !== "") {
//      const res=await createNotebook(name);
//      if(res.success){
//       setNotebooks([...notebooks,res.data]);
//       setName("");
//       setDisplay(false)
//      }
//   }else{
//       alert(res.message)
//   }
// };
//     useEffect(() => {
//   const fetchData = async () => {
//     const res = await getAllNotebooks();
//     if (res.success) {
//       setNotebooks(res.data);
//     } else {
//       setNotebooks([]);
//     }
//   };
//   fetchData();
// }, []);

//     return (
//         <div className='h-screen flex justify-center items-center'>
//              <button
//                     onClick={() => navigate(`/`)}
//                     className="fixed top-5 left-5 flex items-center gap-2 text-white px-3 py-2 rounded-md cursor-pointer hover:text-[#b94f4f] transition z-50 shadow-md"
//                   >
//                     <FiArrowLeft size={20} />
//                     Back
//                   </button>

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
//                     <input onChange={(e) => setName(e.target.value)} value={name} className='w-[200px] h-[30px] rounded-[5px] bg-white md:w-[400px] md:h-[50px] normal pl-2' type="text" placeholder='Maths...' />
//                     <button onClick={() => {
//                         handleSubmit();
//                         setDisplay(false)
//                     }} className='cursor-pointer w-[100px] bg-white border-none h-[30px] rounded-[5px] mt-[10px] ml-[90px] text-[15px] normal md:w-[161px] md:h-[40px] md:ml-[240px]'>Submit</button>
//                 </div>
//             </div> : ''}
//             {/* Add button */}
//             <div className={`${display ? 'hidden' : 'fixed bottom-10 right-10  bg-[#C85454] flex justify-center items-center h-[65px] w-[65px] rounded-full md:h-[100px] md:w-[100px]'}`}>
//                 <FiPlus onClick={() => setDisplay(true)} className="text-white text-[35px] md:text-[60px] cursor-pointer" />
//             </div>

//             {display ? '' : <div className='custom-scroll h-screen overflow-y-scroll pt-20 w-full text-white grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6  p-6' >
//                 {notebooks.map((item, index) => (
//                     <Link key={item._id} to={`/all-notes/${item._id}`}><Card  title={item.notebookName} /></Link>
//                 ))}
//             </div>}

//         </div>
//     )
// }

// export default AddNotebook



import React, { useContext, useEffect, useState } from 'react'
import { FiPlus, FiX, FiArrowLeft } from "react-icons/fi";
import Card from '../components/Card';
import { Link, useNavigate } from 'react-router-dom'
import { NotebookContext } from '../../context/NotebookContext';
import { AuthContext } from '../../context/AuthContext';
import { toast } from 'react-toastify';

const AddNotebook = () => {
    const [display, setDisplay] = useState(false);
    const [name, setName] = useState('')
    const [notebooks, setNotebooks] = useState([]);
    const [loading, setLoading] = useState(true);  // <-- loading state
    const { createNotebook, getAllNotebooks } = useContext(NotebookContext);
    const { token } = useContext(AuthContext)
    const navigate = useNavigate();

    const handleSubmit = async () => {
        if (name.trim() !== "") {
            const res = await createNotebook(name);
            if (res.success) {
                setNotebooks([...notebooks, res.data]);
                setName("");
                setDisplay(false)
                toast.success(res.message)
            } else {
                // alert(res.message);
                toast.error(res.message)
            }
        } else {
            toast.error("Notebook name is required");
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true); // start loading
            const res = await getAllNotebooks();
            if (res.success) {
                setNotebooks(res.data);
            } else {
                setNotebooks([]);
            }
            setLoading(false); // stop loading
        };
        fetchData();
    }, []);

    return (
        <div className='h-screen flex justify-center items-center'>
            {/* Back button */}
            <button
                onClick={() => navigate(`/`)}
                className="fixed top-5 left-5 flex items-center gap-2 text-white px-3 py-2 rounded-md cursor-pointer hover:text-[#b94f4f] transition z-50 shadow-md"
            >
                <FiArrowLeft size={20} />
                Back
            </button>

            {/* Enter name component */}
            {display ? (
                <div className='w-[300px] h-[200px] bg-[#C85454] md:w-[500px] md:h-[300px] rounded-[10px] p-3'>
                    {/* cross icon */}
                    <div className='flex justify-end'>
                        <FiX onClick={() => setDisplay(false)} className='text-white cursor-pointer' size={24} />
                    </div>
                    <div className='text-center'>
                        <p className='normal text-2xl md:text-4xl  text-white'>
                            <span className='italic text-white text-2xl md:text-4xl'>Notebook</span> Name
                        </p>
                    </div>
                    {/* input */}
                    <div className='flex flex-col items-center gap-2 mt-[20px] md:mt-[50px]'>
                        <input
                            onChange={(e) => setName(e.target.value)}
                            value={name}
                            className='w-[200px] h-[30px] rounded-[5px] bg-white md:w-[400px] md:h-[50px] normal pl-2'
                            type="text"
                            placeholder='Maths...'
                        />
                        <button
                            onClick={handleSubmit}
                            className='cursor-pointer w-[100px] bg-white border-none h-[30px] rounded-[5px] mt-[10px] ml-[90px] text-[15px] normal md:w-[161px] md:h-[40px] md:ml-[240px]'
                        >
                            Submit
                        </button>
                    </div>
                </div>
            ) : ''}

            {/* Add button */}
            <div className={`${display ? 'hidden' : 'fixed bottom-10 right-10 bg-[#C85454] flex justify-center items-center h-[65px] w-[65px] rounded-full md:h-[100px] md:w-[100px]'}`}>
                <FiPlus onClick={() => setDisplay(true)} className="text-white text-[35px] md:text-[60px] cursor-pointer" />
            </div>

            {/* Show loading or notebooks */}
            {display ? '' : (
                <div className='custom-scroll h-screen overflow-y-scroll pt-20 w-full text-white grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6'>
                    {loading ? (
                        <div className="col-span-full flex justify-center items-center text-xl text-gray-300">
                            Loading notebooks...
                        </div>
                    ) : (
                        notebooks.map((item) => (
                            <Link key={item._id} to={`/all-notes/${item._id}`}>
                                <Card title={item.notebookName} />
                            </Link>
                        ))
                    )}
                </div>
            )}
        </div>
    )
}

export default AddNotebook
