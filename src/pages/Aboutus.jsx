import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import aboutus from "../assests/aboutus.jpg";
function AboutUs(){
    return(
        <>
        <header>
        <nav>
        <Navbar/>
        </nav>
        <h1 className="font-bold ...  -mb-2  text-center sm:text-left  sm:ml-11 mb-3 text-xl text-sky-800">About Us</h1>
        </header>
       <main>
       <p className="text-justify ...  p-5 -mb-2 sm:text-left sm:ml-11 text-sky-700 mb-4">
        We are an Iraqi web application  who wants to show the
        world how beautiful Iraq is and to let them explore the
        the history of our country and give them the chance to 
        visit the first civilization of Mesopotamia.we are trusted 
        source for adventure & experiential travel inspiration,
        producing original, insightful and passionate storytelling 
        to challenge its readers to explore Iraq
        </p>  
   <div className="grid justify-items-center... sm:grid sm:ustify-items-start... ml-7">
   <img src={aboutus} className="rounded-xl mt-5 w-80 h-80 mb-11 "></img>
   </div>
   
   <h2 className="font-bold ... -mt-4  text-center sm:text-left sm:ml-11 text-xl text-sky-800 mb-2 ">Contact Us</h2>
   <h5 className="text-center  sm:text-left sm:ml-11 text-l text-sky-700 mb-4 ">
    Based in Baghdad Iraq <br/>
    Civilizations@gmail.com
    </h5>
    </main> 
       




        <Footer/>
        </>
    )
}

export default AboutUs;