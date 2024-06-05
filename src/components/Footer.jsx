import { Link } from "react-router-dom";

function Footer(){
 
    return(
        <div>
        <footer className=" grid grid-cols-2 text-sm px-5 text-white bg-sky-800 p-2 lg:p-4">
         <h6>Copyrights2024</h6>
         <div className="hover:text-sky-600 text-sm">
            <Link to={`/Aboutus`}><a href="/Aboutus">AboutUs</a></Link>
         
         </div>
        </footer>
        </div>
    )
}

export default Footer;