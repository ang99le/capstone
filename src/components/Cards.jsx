import { useState, useEffect, useContext } from "react";
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
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const updated = () => toast.info("Event updated successfully😎!");
  const deleted = () => toast.info("Event deleted successfully👀!");
  const { eventsData } = useContext(eventContext);
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('');
  

  useEffect(() => {
    const unsubscribeAuth = auth.onAuthStateChanged((user) => {
      setUser(user ? user : null);
    });

    return () => unsubscribeAuth();
  }, []);

  const filteredData = eventsData.filter((event) => {
    const matchesSearchTerm = searchTerm === '' || event.city.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = categoryFilter === '' || event.category.toLowerCase().includes(categoryFilter.toLowerCase());
    return matchesSearchTerm && matchesCategory;
  });

  useEffect(() => {
    setTimeout(() => setLoading(false), 3300);
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center">
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
    if (window.confirm("Are you sure you want to delete this event?")) {
      const eventDoc = doc(db, "events", event.id);
      await deleteDoc(eventDoc);
      deleted();
    }
  };

  return (
    <>
 
    <div className="mt-2">
        <input
          id="text"
          name="text"
          type="text"
          placeholder="select your location"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full rounded-md border-0 py-2 text-yellow-600 shadow-sm ring-1 ring-inset ring-yellow-500 placeholder:text-yellow-600 focus:ring-2 focus:ring-inset focus:ring-yellow-600 sm:text-sm sm:leading-6 md:w-[350px] pl-2"
        />
      </div>

      <select
        className="justify-center gap-x-1.5 rounded-md bg-white pl-2 pr-2 py-2.5 text-sm font-semibold text-yellow-600 shadow-sm ring-1 ring-inset ring-yellow-500 hover:bg-yellow-500"
        value={categoryFilter}
        onChange={(e) => setCategoryFilter(e.target.value)}
      >
        <option value="">Choose your Category</option>
        <option value="entertainment">Entertainment</option>
        <option value="education">Education</option>
        <option value="technology">Technology</option>
      </select>

      <div className="hidden lg:block"></div>
   


      {filteredData.map((event, id) => (
        <div
          key={id}
          className="flex flex-col cursor-pointer bg-white py-5 px-10 text-center items-center rounded-tl-[35px] rounded-br-[35px] shadow-2xl md:min-h-[340px] w-full card-item-div max-w-screen-md min-h-[260px]"
        >
          <div className="flex gap-20 mb-3 lg:gap-28">
            <div className="flex gap-2 Category">
            <svg width="32" height="32" className="border border-1 px-0.5 rounded-full border-sky-700 hover:bg-sky-200" viewBox="0 0 250 247" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="245.328" height="242.905" rx="121.453" transform="matrix(0.999858 0.0168304 -0.0167807 0.999859 4.07613 0)" fill="#10427D"/>
<rect x="45.4958" y="39.1683" width="75.0281" height="75.9385" rx="30" fill="white"/>
<rect x="129.304" y="39.1683" width="75.0281" height="75.9385" rx="30" fill="white"/>
<rect x="45.4958" y="123.1" width="75.0281" height="75.9385" rx="30" fill="white"/>
<rect x="129.304" y="123.1" width="75.0281" height="75.9385" rx="30" fill="white"/>
</svg>
{/* 
              <img className="w-[30px] h-[30px] border rounded-full p-0.5 border-sky-800 bg-sky-800 hover:bg-white" src="" alt="category"></img> */}
              <p className="text-sky-800 font-medium">
            {event.category}
            </p>
            </div>
       

          {user && (
            <div className="flex justify-end gap-1 ml-auto mb-3">
              <button
                type="button"
                onClick={() => handleDelete(event)}
                className="w-[32px] hover:bg-sky-200 rounded-full border-2 border-sky-700 hover:border-sky-200"
              >
                <img src="https://www.dockendale.com/wp-content/uploads/2018/11/icon13.png" alt="trash"/>
              </button>
              <button
                type="button"
                onClick={() => handleUpdate(event)}
                className="w-[32px] hover:bg-sky-200 rounded-full border-2 border-sky-700 hover:border-sky-200"
              >
                <img
                  src="https://www.wintrust.com/content/dam/wintrust/component-imagery/product-icons/adjustablemortgages.png"
                  alt="edit"
                />
              </button>
              <ToastContainer theme="colored" />
            </div>
          )}
</div>
          

          <img
            src={event.img}
            alt="img"
            className="w-[250px] md:w-[265px] lg:w-[293px] mb-4 flex flex-col cursor-pointer rounded-tl-[35px] rounded-br-[35px] shadow-2xl md:min-h-[340px] card-item-div max-w-screen-md min-h-[260px]"
          />
          <p className="text-xl text-sky-800 font-bold uppercase mb-5">
            {t(event.title)}
          </p>

         
          <p className="text-sm text-yellow-500 font-medium leading-2 w-full">
            {t(event.description)}
          </p>

          <p className="text-sm mt-3 text-sky-800 font-medium leading-2 w-full">{event.city}</p>

          <div className="flex mt-3 gap-3">
            <p className="text-yellow-500 text-[15px] font-medium leading-2">
              {t(event.time)}
            </p>
            <p className="text-yellow-500 text-[15px] font-medium leading-2">
              {t(event.date)}
            </p>
          </div>
          <div className="md:flex gap-3 mt-3">
            <button
              type="button"
              onClick={() => handleShowDetails(event)}
              className="px-12 py-2 mt-4 mb-2 flex justify-center rounded-md bg-sky-800 md:px-3 md:py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-sky-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              {t("Show Details")}
            </button>
            <button
              type="submit"
              onClick={() => setBooking(true)}
              className="px-14 py-2 mt-4 mb-2 flex justify-center rounded-md bg-sky-800 md:px-5 md:py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-sky-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Book Now
            </button>
          </div>
        </div>
      ))}
      {popUp && <ShowDetails event={selectedEvent} setPopUp={setPopUp} />}
      {booking && <EventDetails setBooking={setBooking} />}
    </>
  );
};

export default EventCard;
