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
        <h1 className="font-bold ...  text-center lg:ml-11 text-xl text-sky-800 mb-4 ">About Us</h1>
        </header>
       <main>
       <p className="text-center p-4 lg:ml-11 text-l text-sky-700 mb-4">
        We are an Iraqi web application  who wants to show the<br/>
        world how beautiful Iraq is and to let them explore the <br/>
        the history of our country and give them the chance to <br/>
        visit the first civilization of Mesopotamia.we are trusted <br/>
        source for adventure & experiential travel inspiration,<br/>
        producing original, insightful and passionate storytelling <br/>
        to challenge its readers to explore Iraq
        </p>  
   <div className="grid justify-items-center ... lg:ml-11">
   <img src={aboutus} className="rounded-xl mt-5 w-80 h-80 mb-11 "></img>
   </div>
   
   <h2 className="font-bold ... text-center lg:ml-11 text-xl text-sky-800 mb-2 ">Contact Us</h2>
   <h5 className="text-center lg:ml-11 text-l text-sky-700 mb-3">
    Based in Baghdad Iraq <br/>
    Civilizations@gmail.com
    </h5>
    </main> 
       




        <Footer/>
        </>
    )
}

export default AboutUs;