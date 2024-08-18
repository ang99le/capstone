// import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function Footer(){
    const {t} = useTranslation();
    return(
        <div>
        
         <footer className=" text-white z-20 ">
         <svg xmlns="http://www.w3.org/2000/svg" className="w-full h-auto" viewBox="0 0 1440 320">
         <path fill="#075985" fill-opacity="1" d="M0,224L60,202.7C120,181,240,139,360,122.7C480,107,600,117,720,133.3C840,149,960,171,1080,165.3C1200,160,1320,128,1380,112L1440,96L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"/></svg>
          
        <div className="flex justify-center">
        <div className="-mt-16 md:-mt-20 lg:-mt-28 flex md:gap-60 lg:gap-80 absolute text-center">
        <h1 className="hidden md:block text-lg -ml-24 text-white md:mt-5 p-3 lg:-ml-72">{t("Copyrights2024")}</h1>
        <div className="flex flex-col justify-center">
        <h6 className="font-bold text-md md:text-2xl text-white md:-ml-24">{t("Contact Us")}</h6>
        <h5 className="text-sm md:text-l text-white md:-ml-24">
        Based in Baghdad Iraq <br/>
        Civilizations@gmail.com
        </h5>
        </div>
        </div>
          
        </div>      
       </footer>  




        </div>
    )
}

export default Footer;