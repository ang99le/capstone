import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
// import aboutus from "../assests/aboutus.jpg";
import { MapContainer, Marker, Popup, TileLayer} from "react-leaflet";

function AboutUs(){
    const location = [33.26580, 44.36342]
    return(
        <>
        <header>
        <nav>
        <Navbar/>
        </nav>
        {/* <h1 className="font-bold ...  -mb-2  text-center sm:text-left  sm:ml-11 sm:mb-3 text-xl text-sky-800">About Us</h1> */}
        </header>
       <main className="flex justify-center">

       <MapContainer center={location} zoom={13} scrollWheelZoom={false}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={location}>
      <Popup>
      the event locattion
      </Popup>
    </Marker>
  </MapContainer>
  

       {/* <p className="text-justify ...  p-5 -mb-2 sm:text-left sm:ml-11 text-sky-700 sm:mb-4">
        We are an Iraqi web application  who wants to show the
        world how beautiful Iraq is and to let them explore the
        the history of our country and give them the chance to 
        visit the first civilization of Mesopotamia.we are trusted 
        source for adventure & experiential travel inspiration,
        producing original, insightful and passionate storytelling 
        to challenge its readers to explore Iraq
        </p>  
   <div className="grid justify-items-center... sm:grid sm:ustify-items-start... ml-7">
   <img src={aboutus} className="rounded-xl mt-5 w-80 h-80 mb-11" alt="iraq"></img>
   </div>
   
   <h2 className="font-bold ... -mt-4  text-center sm:text-left sm:ml-11 text-xl text-sky-800 mb-2 ">Contact Us</h2>
   <h5 className="text-center  sm:text-left sm:ml-11 text-l text-sky-700 mb-4 ">
    Based in Baghdad Iraq <br/>
    Civilizations@gmail.com
    </h5> */}
    </main> 
       




        <Footer/>
        </>
    )
}

export default AboutUs;