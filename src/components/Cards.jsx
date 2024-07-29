import { useContext, useState } from "react";
import ShowDetails from "./ShowDetails";
import EventDetails from "./EventDetails";
import { useTranslation } from "react-i18next";
import { eventContext } from "../Context/Context";

const EventCard = () => {
  const { t } = useTranslation();
  const [popUp, setPopUp] = useState(false);
  const [booking, setBooking] = useState(false);
  const { eventsData } = useContext(eventContext);

  return (
    <>
      {eventsData.map((card, id) => (
        <div
          key={id}
          className="flex flex-col cursor-pointer bg-white py-5 px-10 text-center items-center mt-6 rounded-tl-[35px] rounded-br-[35px] shadow-2xl md:min-h-[340px] w-full card-item-div max-w-screen-md min-h-[260px]">
          <img src={card.img} alt="img" className="w-[250px] md:w-[200px] lg:w-[293px] mb-4 flex flex-col cursor-pointer rounded-tl-[35px] rounded-br-[35px] shadow-2xl md:min-h-[340px] card-item-div max-w-screen-md min-h-[260px]" />
          <p className="text-[24px] text-sky-800 font-bold uppercase mb-7">
            {t(card.title)}
          </p>
          <p className="text-[15px] text-sky-600 font-medium leading-2 w-full">
            {t('card.description')}
          </p>
          <div className="flex mt-5 gap-3">
            <p className="text-sky-800 text-[15px] font-medium leading-2">
              {t('card.time')}
            </p>
            <p className="text-sky-800 text-[15px] font-medium leading-2">
              {t('card.date')}
            </p>
          </div>

          <div className="md:flex gap-3 mt-3">
            <button
              type="submit"
              onClick={() => setPopUp(true)}
              className="mt-4 mb-2 flex justify-center rounded-md bg-sky-800 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-sky-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              {t("Show Details")}
            </button>
            {popUp && <ShowDetails setPopUp={setPopUp} />}

            <button
              type="submit"
              onClick={() => setBooking(true)}
              className="mt-4 mb-2 flex justify-center rounded-md bg-sky-800 px-5 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-sky-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              {t("Book Now")}
            </button>
            {booking && <EventDetails setBooking={setBooking} />}
          </div>
        </div>
      ))}
    </>
  );
};

export default EventCard;
