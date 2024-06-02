import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Navbar(){
  const [isOpen, setIsOpen] = useState(false);
  const Navigate=useNavigate();
 return (
   <nav className="flex items-center justify-between flex-wrap p-6">

    {/* humburger postion */}
     <div className="flex items-center flex-shrink-0 text-white mr-6 lg:mr-72"></div>
     <div className="block lg:hidden">
       <button
         onClick={() => setIsOpen(!isOpen)}
         className="flex items-center px-3 py-2 rounded text-sky-800 hover:text-sky-800"
       >
         <svg
           className={`fill-current h-7 w-7 ${isOpen ? "hidden" : "block"}`}
           viewBox="0 0 20 20"
         >
           <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
         </svg>
         <svg
           className={`fill-current h-7 w-7 ${isOpen ? "block" : "hidden"}`}
           viewBox="0 0 20 20"
         >
           <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
         </svg>
       </button>

     </div>
     <div className={`w-full block flex-grow lg:flex ${isOpen ? "block" : "hidden"}`}>
       <div className="text-sm lg:flex-grow  ">
        <ul className="flex text-lg justify-center mb-4 bg-sky-50 text-emerald-500 font-medium p-4"> 
        <div className="flex mr-80">
          <li>
          <a href="/Home" onClick={()=>{Navigate('/Home')}} className="block mt-4 l:inline-block lg:mt-0 text-sky-800  border-b-blue-300 px-3">Home</a>
          </li>
          <li>
          <a href="/Civilizations" onClick={()=>{Navigate('/Civilizations')}} className="block mt-4 l:inline-block lg:mt-0 text-sky-800  border-b-blue-300 px-3">Civilizations</a>
          </li>
          <li>
          <a href="/Events" onClick={()=>{Navigate('/Events')}} className="block mt-4 l:inline-block lg:mt-0 text-sky-800 border-b-blue-300 px-3">Events</a>
          </li>
          <li>
          <a href="/Programmes" onClick={()=>{Navigate('/Programmes')}} className="block mt-4 l:inline-block lg:mt-0 text-sky-800  border-b-blue-300 px-3">Programmes</a>
          </li>
          </div>
          <div className="flex text-lg ml-80">
          <li>
          <a href="/Signup" onClick={()=>{Navigate('/Signup')}} className="block mt-4 l:inline-block lg:mt-0 text-sky-800  border-b-blue-300 px-3">Signup</a>
          </li>
          <li>
          <a href="/Login" onClick={()=>{Navigate('/Login')}} className="block mt-4 l:inline-block lg:mt-0 text-sky-800 border-b-blue-300 px-3">Login</a>
          </li>
          </div>
        </ul>
      
       </div>
       <div>

       </div>
     </div>
   </nav>
 );
}

export default Navbar;