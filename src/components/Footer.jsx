import { Navigate } from "react-router-dom";

function Footer(){
    return(
        <div>
        <footer className=" grid grid-cols-2 px-5 text-sky-800">
         <h6>CopyRights2024</h6>
     
         <a href="/Aboutus" onClick={()=>Navigate('/Aboutus')}>AboutUs</a>
    
        </footer>
        </div>
    )
}

export default Footer;