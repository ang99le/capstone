// import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { MapContainer, Marker, TileLayer,Popup} from "react-leaflet";

function ShowDetails ({event,setPopUp}){
  const {t} = useTranslation();
  const defaultLocation = [33.26580, 44.36342];
  const location = event.location ? [event.location.latitude, event.location.longitude] : defaultLocation;

    return(
      
    <div className='w-screen h-screen bg-black bg-opacity-30 fixed top-0 right-0 flex justify-center items-center'>
 
      <div className='bg-white p-10 rounded-md shadow-md h-[650px]'>

      <div class="grid place-items-left">
      <button onClick={()=>setPopUp(false)}><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF6eqIKPjVO3smnMpCieL6fiPOAbabJsgZgw&s" alt="exit" className="absloute  w-[20px]"></img></button>
      </div>

       <h1 className=' text-sky-900 font-bold text-center text-2xl my-4'>{t(event.title)}</h1>
    
       <img className="w-[160px] rounded-xl mx-auto mb-3" src={event.img} alt="pic"></img>
     
      
       <p className="text-sky-800 text-sm">{t("eventsL1")}</p>
       <p className="text-sky-800 text-sm">{t("eventsL2")}</p> 
       <p className="text-sky-800 text-sm">{t("eventsL3")}</p>
       <p className="text-sky-800 text-sm">{t("tickets now")}</p>
          
     
        <div className="flex mt-2 gap-3 md:mt-5 justify-center items-center h-18 text-sm">
        <p className=" text-sky-800 font-medium leading-2 ">
        {t(event.date)}
        </p>
        <p className=" text-sky-800 font-medium leading-2">
        {t(event.time)}
        </p>
        </div>
{/* <Link><button><iframe className="rounded-2xl md:ml-7 mt-3 w-[300px] h-[130px] md:mt-8" title="event location" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3336.0738277012306!2d44.359980675547384!3d33.264559473463756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1559d561d6f1a171%3A0x6875c0693d809fe4!2sPalms%20Of%20Baghdad!5e0!3m2!1sen!2siq!4v1717356317979!5m2!1sen!2siq" alt="location"></iframe></button></Link> */}

<div className="flex justify-center mt-3">

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
</div>
  
       </div>

        </div>
    )
}

export default ShowDetails;