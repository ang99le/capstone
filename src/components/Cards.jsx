import { useContext, useState,useEffect} from "react";
import { doc, updateDoc, deleteDoc } from "firebase/firestore";
import { db } from "../firebase";
import ShowDetails from "./ShowDetails";
import EventDetails from "./EventDetails";
import { useTranslation } from "react-i18next";
import { eventContext } from "../Context/Context";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loading from "./Loading";
import { auth } from "../firebase";

const EventCard = () => {
  const { t } = useTranslation();
  const [popUp, setPopUp] = useState(false);
  const [booking, setBooking] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const { eventsData } = useContext(eventContext);
  const updated = () => toast("Event updated successfully!")
  const deleted = () => toast("Event deleted successfully!")
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);


  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);


  useEffect(() => {
    setTimeout(() => 
    setLoading(false), 2000);
    
  }, []);

  if (loading) {
    return (
      <div className="flex w-screen -ml-24 justify-center items-center">
        <Loading />
      </div>
    );
  }

  
  const handleShowDetails = (event) => {
    setSelectedEvent(event);
    setPopUp(true);
  };

  const handleUpdate = async (event) => {
    const updatedTitle = prompt("Enter new title:", event.title);
    if (updatedTitle) {
      const eventDoc = doc(db, "events", event.id);
      await updateDoc(eventDoc, { title: updatedTitle });
      updated();
      
    }
    
  };

  const handleDelete = async (event) => {
    if (window.confirm) {
      const eventDoc = doc(db, "events", event.id);
      await deleteDoc(eventDoc);
      deleted();
    }
  };


  return (
    <>
      {eventsData.map((event, id) => (
        <div
          key={id}
          className="flex flex-col cursor-pointer bg-white py-5 px-10 text-center items-center mt-6 rounded-tl-[35px] rounded-br-[35px] shadow-2xl md:min-h-[340px] w-full card-item-div max-w-screen-md min-h-[260px]">
  

           {user ? (
              <>
          <div className="flex justify-end gap-1 ml-auto mb-3">
          <button type="button" onClick={() => handleDelete(event)} className="w-[32px] hover:bg-sky-200 rounded-full border-2 border-sky-700 hover:border-sky-200"><img src="https://www.dockendale.com/wp-content/uploads/2018/11/icon13.png" alt="trash can"></img></button>
          <button type="button" onClick={() => handleUpdate(event)} className="w-[32px] hover:bg-sky-200 rounded-full border-2 border-sky-700 hover:border-sky-200"><img src="https://www.wintrust.com/content/dam/wintrust/component-imagery/product-icons/adjustablemortgages.png" alt="edit"></img></button>
          <ToastContainer />
          </div>
              </>
            ) : (
              <>
        
              </>
            )}

          
          <img src={event.img} alt="img" className="w-[250px] md:w-[200px] lg:w-[293px] mb-4 flex flex-col cursor-pointer rounded-tl-[35px] rounded-br-[35px] shadow-2xl md:min-h-[340px] card-item-div max-w-screen-md min-h-[260px]"/>
          <p className="text-xl text-sky-800 font-bold uppercase mb-5">
            {t(event.title)}
          </p>
          <p className="text-sm text-yellow-500 font-medium leading-2 w-full">
            {t(event.description)}
          </p>
          <div className="flex mt-5 gap-3">
            <p className="text-sky-800 text-[15px] font-medium leading-2">
              {t(event.time)}
            </p>
            <p className="text-sky-800 text-[15px] font-medium leading-2">
              {t(event.date)}
            </p>
          </div>
          <div className="md:flex gap-3 mt-3">
            <button type="button" onClick={() => handleShowDetails(event)} className="mt-4 mb-2 flex justify-center rounded-md bg-sky-800 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-sky-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" >{t("Show Details")} </button>
            <button type="submit" onClick={() => setBooking(true)} className="mt-4 mb-2 flex justify-center rounded-md bg-sky-800 px-5 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-sky-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Book Now</button>
          </div>
        </div>
      ))}
      {popUp && <ShowDetails event={selectedEvent} setPopUp={setPopUp} />}
      {booking && <EventDetails setBooking={setBooking} />}


      
    </>
  );
};

export default EventCard;
