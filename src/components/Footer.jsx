import { Link } from "react-router-dom";

function Footer(){
 
    return(
        <div className="font-markazi ">

<div class="h-[150px]  rounded-t-[100px] z-40  bg-yellow-500"></div>
<div class="h-[30px] -mt-28 rounded-t-[100px] bg-sky-800"></div>

         <footer className="bg-sky-800 text-white p-8">
        <a href="/" aria-label="Scroll down"
                class="flex items-center -mt-12 justify-center w-10 h-10 mx-auto text-white duration-300 transform border border-gray-400 rounded-full hover:text-teal-accent-400 hover:border-teal-accent-400 hover:shadow hover:scale-110">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
                    <path
                        d="M10.293,3.293,6,7.586,1.707,3.293A1,1,0,0,0,.293,4.707l5,5a1,1,0,0,0,1.414,0l5-5a1,1,0,1,0-1.414-1.414Z">
                    </path>
                </svg>
            </a>
       <div className="flex ">
       <h1 className="text-lg mt-8">Copyrights2024</h1>
       <div className="flex flex-col text-center mx-auto">
       <h2 className="font-bold  text-xl text-white mt-4 -ml-24">Contact Us</h2>
         <h5 className=" text-l text-white mb-4 -ml-24">
         Based in Baghdad Iraq <br/>
         Civilizations@gmail.com
        </h5>
        </div>
      
       </div>
  
    
{/*         
         <Link to={`/Aboutus`}><a href="/Aboutus">AboutUs</a></Link>  */}
      
       </footer>  




        </div>
    )
}

export default Footer;