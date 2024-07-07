import {useState } from "react";
import {Link} from "react-router-dom";
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';
import {useNavigate } from "react-router-dom";



function Navbar(){
  const navigate= useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = () => {               
    signOut(auth).then(() => {
    // Sign-out successful.
        navigate("/");
        console.log("Signed out successfully")
    }).catch((error) => {
    // An error happened.
    });
}
 return (
  <div>
   
   {/* <div className="fields">
      <input type="file" onChange={handleChange} />
      <button disabled={loading || !photo} onClick={handleClick}>Upload</button>
      <img src={photoURL} alt="Avatar" className="avatar" />
    </div> */}
   <nav className="flex items-center justify-between flex-wrap ">

    {/* humburger postion */}
     <div className="flex items-center flex-shrink-0 mr-6 lg:mr-72"></div>
     <div className="block lg:hidden">
       <button
         onClick={() => setIsOpen(!isOpen)}
         className="flex items-center px-3 py-3 rounded text-sky-800"
       >
         <svg
           className={`fill-current h-7 w-7 ${isOpen ? "hidden" : "block"}`}
           viewBox="0 0 20 20"
         >
           <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v" />
         </svg>
         <svg
           className={`fill-current h-7 w-7 ${isOpen ? "block" : "hidden"}`}
           viewBox="0 0 20 20"
         >
           <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
         </svg>
       </button>

     </div>
     <div className={`shadow-xl  w-full block flex-grow lg:flex ${isOpen ? "block" : "hidden"}`}>
     
        <div className="flex flex-col text-center font-medium md:flex-grow md:flex md:justify-start md:flex-row md:text-lg bg-sky-800 pb-3 pt-3">
          
         <Link to={`/Home`}><a href="/Home" className="block mt-4 l:inline-block lg:mt-0 text-white  border-b-blue-300 px-4 hover:bg-sky-700 rounded-lg p-2 ml-3">Home</a></Link>
         <Link to={`/Civilizations`}><a href="/Civilizations" className="block mt-4 l:inline-block lg:mt-0 text-white  border-b-blue-300 px-4 hover:bg-sky-700 rounded-lg p-2">Civilizations</a></Link>
         <Link to={`/Events`}><a href="/Events"className="block mt-4 l:inline-block lg:mt-0 text-white border-b-blue-300 px-4 hover:bg-sky-700 rounded-lg p-2">Events</a></Link>
         <Link to={`/Programmes`}><a href="/Programmes" className="block mt-4 l:inline-block lg:mt-0 text-white  border-b-blue-300 px-4 hover:bg-sky-700 rounded-lg p-2">Programmes</a></Link>
          </div>

          <div className="flex flex-col text-center font-medium md:flex md:flex-row md:justify-end md:text-lg bg-sky-800 pb-3 pt-3">
          <div>

   </div>
   
         <Link to={`/Signup`}><a href="/Signup"className="block mt-4 l:inline-block lg:mt-0 text-white  border-b-blue-300 px-4 hover:bg-sky-700 rounded-lg p-2">Signup</a></Link>
         <Link to={`/Login`}><a href="/Login"className="block mt-4 l:inline-block lg:mt-0 text-white border-b-blue-300 px-4 hover:bg-sky-700 rounded-lg p-2">Login</a></Link>
         <button className="text-white" onClick={handleLogout}>Logout</button>
         
   
    
       
       </div>

       <div>

       </div>
     </div>
   </nav>

  
   
   </div>

);
}

export default Navbar;