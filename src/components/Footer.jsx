import { useNavigate } from "react-router-dom";

function Footer(){
    const Navigate=useNavigate();
    return(
        <div>
        <footer className=" grid grid-cols-2 text-sm px-5 text-white bg-sky-800 p-2 lg:p-4">
         <h6>Copyrights2024</h6>
         <div className="hover:text-sky-600 text-sm">
         <a href="/Aboutus" onClick={()=>Navigate('/Aboutus')} >AboutUs</a>
         </div>
        </footer>
        </div>
    )
}

export default Footer;