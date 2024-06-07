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
            description:"join Rahma Riad concert on Baghdad palm ",
            location:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3336.0738277012306!2d44.359980675547384!3d33.264559473463756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1559d561d6f1a171%3A0x6875c0693d809fe4!2sPalms%20Of%20Baghdad!5e0!3m2!1sen!2siq!4v1717356317979!5m2!1sen!2siq",
            Time:"On Friday",
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
            
         <div className="md:flex gap-3 mt-3">
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