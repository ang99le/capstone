import { useNavigate } from "react-router-dom";

function Footer(){
    const Navigate=useNavigate();
    return(
        <div>
        <footer className=" grid grid-cols-2 px-5 text-white bg-sky-800 p-5">
         <h6>CopyRights2024</h6>
         <div className="hover:text-sky-600">
         <a href="/Aboutus" onClick={()=>Navigate('/Aboutus')} >AboutUs</a>
         </div>
        </footer>
        </div>
    )
}

export default Footer;