import { useContext, useState } from "react";
import { doc, updateDoc, deleteDoc } from "firebase/firestore";
import { db } from "../firebase";
import ShowDetails from "./ShowDetails";
import EventDetails from "./EventDetails";
import { useTranslation } from "react-i18next";
import { eventContext } from "../Context/Context";

const EventCard = () => {
  const { t } = useTranslation();
  const [popUp, setPopUp] = useState(false);
  const [booking, setBooking] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const { eventsData } = useContext(eventContext);

  const handleShowDetails = (event) => {
    setSelectedEvent(event);
    setPopUp(true);
  };

  const handleUpdate = async (event) => {
    const updatedTitle = prompt("Enter new title:", event.title);
    if (updatedTitle) {
      const eventDoc = doc(db, "events", event.id);
      await updateDoc(eventDoc, { title: updatedTitle });
      alert("Event updated successfully!");
    }
  };

  const handleDelete = async (event) => {
    if (window.confirm("Are you sure you want to delete this event?")) {
      const eventDoc = doc(db, "events", event.id);
      await deleteDoc(eventDoc);
      alert("Event deleted successfully!");
    }
  };

  return (
    <>
      {eventsData.map((event, id) => (
        <div
          key={id}
          className="flex flex-col cursor-pointer bg-white py-5 px-10 text-center items-center mt-6 rounded-tl-[35px] rounded-br-[35px] shadow-2xl md:min-h-[340px] w-full card-item-div max-w-screen-md min-h-[260px]">
  
          <div className="flex justify-start gap-3 mr-auto mb-3">
          <button type="button" onClick={() => handleDelete(event)} className="w-[35px]"><img src="https://www.dockendale.com/wp-content/uploads/2018/11/icon13.png" alt="trash can"></img></button>
          <button type="button" onClick={() => handleUpdate(event)} className="w-[35px]"><img src="https://image.pngaaa.com/725/6775725-middle.png" alt="edit"></img></button>
          </div>
          
          
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
