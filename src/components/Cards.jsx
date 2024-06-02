import { useState } from "react";
import ShowDetails from "./ShowDetails";

import EventDetails from "./EventDetails";

const EventCard = ()=>{
    const [popUp, setPopUp] = useState(false);
    const [booking,setBooking] = useState(false);

    const cardList = [
        {
            img: "https://blog.dubaicityguide.com/site/wp-content/uploads/2022/12/Rahma-Riad.jpg",
            title: "Rahma Riad Concert",
            description:
              "join Rahma Riad concert on Baghdad palm ",
            Time:"7:00pm",
            Date: "16th june",
          },
        
            {
                img: "https://blog.dubaicityguide.com/site/wp-content/uploads/2022/12/Rahma-Riad.jpg",
                title: "Rahma Riad Concert",
                description:
                  "join Rahma Riad concert on Baghdad palm ",
                Time:"12:00pm",
                Date: "On Fridy",
              },

          {
            img: "https://blog.dubaicityguide.com/site/wp-content/uploads/2022/12/Rahma-Riad.jpg",
            title: "Rahma Riad Concert",
            description:
              "join Rahma Riad concert on Baghdad palm ",
            Time:"12:00pm",
            Date: "On Fridy",
          },

            {
            img: "https://blog.dubaicityguide.com/site/wp-content/uploads/2022/12/Rahma-Riad.jpg",
            title: "Rahma Riad Concert",
            description:
              "join Rahma Riad concert on Baghdad palm ",
            Time:"12:00pm",
            Date: "On Fridy",
          }
      ];
        return (
          <>
             {cardList.map((card, id) => (
              <div
                key={id}
                className=" flex flex-col cursor-pointer bg-white py-5 px-10 text-center items-center mt-6 rounded-tl-[35px] rounded-br-[35px] shadow-2xl md:min-h-[340px] w-full card-item-div max-w-screen-md min-h-[260px]"
              >
                <img src={card.img} alt="box_img" className=" w-[293px] mb-4 flex flex-col cursor-pointer rounded-tl-[35px] rounded-br-[35px] shadow-2xl md:min-h-[340px]  card-item-div max-w-screen-md min-h-[260px] " />
                <p className="text-[24px] text-sky-800 font-bold uppercase mb-7">{card.title}</p>
                <p className="text-[15px]  text-sky-600 font-medium leading-2 w-full">
                  {card.description}
                </p>
                <div className="flex mt-5 gap-3">
                <p className=" text-sky-800 text-[15px] font-medium leading-2">
                  {card.Date}
                </p>
                <p className=" text-sky-800 text-[15px] font-medium leading-2">
                  {card.Time}
                </p>
                </div>
            
         <div className="md:flex gap-5 mt-3">
         <button type="submit" onClick={() => setPopUp(true)} class=" mt-4 mb-2 flex justify-center rounded-md bg-sky-800 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-sky-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" >Show Details</button>
                {popUp && <ShowDetails setPopUp={setPopUp} />}
                
                <button type="submit" onClick={() =>setBooking(true)} class=" mt-4 mb-2 flex justify-center rounded-md bg-sky-800 px-5 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-sky-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" >Book Now</button>
                {booking && <EventDetails setBooking={setBooking} />}
         </div>
            
                
                </div>
        
            ))}
          </>
        );
      }

export default EventCard;