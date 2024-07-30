// import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function Footer(){
    const {t} = useTranslation();
    return(
        <div>
        
         <footer className=" text-white z-20 ">
         <svg xmlns="http://www.w3.org/2000/svg" className="hidden md:block" viewBox="0 0 1440 320"><path fill="#075985" fill-opacity="1" d="M0,224L60,202.7C120,181,240,139,360,122.7C480,107,600,117,720,133.3C840,149,960,171,1080,165.3C1200,160,1320,128,1380,112L1440,96L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
         <svg xmlns="http://www.w3.org/2000/svg" className="block md:hidden w-[374px]" viewBox="0 0 800 320"><path fill="#075985" fill-opacity="1" d="M0,224L60,202.7C120,181,240,139,360,122.7C480,107,600,117,720,133.3C840,149,960,171,1080,165.3C1200,160,1320,128,1380,112L1440,96L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>

         {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#075985" fill-opacity="1" d="M0,256L60,240C120,224,240,192,360,197.3C480,203,600,245,720,240C840,235,960,181,1080,176C1200,171,1320,213,1380,234.7L1440,256L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg> */}
        
        {/* <a href="/" aria-label="Scroll down"
                class="flex items-center justify-center w-10 mx-auto text-yellow-500 duration-300 transform border border-gray-400 rounded-full hover:text-teal-accent-400 hover:border-teal-accent-400 hover:shadow hover:scale-110">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
                    <path
                        d="M10.293,3.293,6,7.586,1.707,3.293A1,1,0,0,0,.293,4.707l5,5a1,1,0,0,0,1.414,0l5-5a1,1,0,1,0-1.414-1.414Z">
                    </path>
                </svg>
            </a> */}
          
          < div className="flex justify-center">
          <div className="-mt-20 md:-mt-24 flex md:gap-72 absolute text-center">
       <h1 className="hidden md:block text-lg -ml-24 text-white md:mt-5 p-3 md:-ml-72">{t("Copyrights2024")}</h1>
       <div className="flex flex-col justify-center">
       <h2 className="font-bold  text-xl text-white md:-ml-24">{t("Contact Us")}</h2>
         <h5 className=" text-l text-white md:-ml-24">
         Based in Baghdad Iraq <br/>
         Civilizations@gmail.com
        </h5>
          </div>
       </div>
          
          </div>

     

        {/*<Link to={`/Aboutus`}><a href="/Aboutus">AboutUs</a></Link>  */}
      
       </footer>  




        </div>
    )
}

export default Footer;