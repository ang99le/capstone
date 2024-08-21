import { useState} from "react";
import Datepicker from "react-tailwindcss-datepicker";
// import { onSnapshot,collection } from "firebase/firestore";
// import { db } from "../firebase";
// import { useContext } from "react";
// import { eventContext } from "../Context/Context";

function EventsFilter(){
// const [filteredEvents,setFilteredEvents]=useState([]);
// const [searchCity, setSearchCity] = useState("");
// const { eventsData } = useContext(eventContext);

const [value,setValue]=useState({
    startDate:null,
    endDate:null
});


// useEffect(() => {
//   if (searchCity.trim()) {
//     const filtered = eventsData.filter(event => 
//       event.city?.toLowerCase().includes(searchCity.toLowerCase())
//     );
//     setFilteredEvents(filtered);
//   } else {
//     setFilteredEvents(eventsData);
//   }
// }, [searchCity, eventsData]);

return(
    <>
     <section>
      <form className="flex flex-col md:flex-row justify-center gap-2 m-4 mb-8 md:mt-4 md:mb-3">
      <div>
      <label htmlFor="text" className="block text-sm font-medium leading-6 text-yellow-600"></label>        
      <div class="relative">
      <div class="absolute inset-y-7 end-2 flex items-center ps-2 pointer-events-none">
      <img className="w-[25px]" src="https://img.icons8.com/?size=100&id=CxTiJN1kfPrR&format=png&color=FAB005" alt="location"></img>
     </div> </div>
      <div className="mt-2">
      <input id="text" name="text" type="text" placeholder="select your location" 
           className="w-full rounded-md border-0 py-2 text-yellow-600 shadow-sm ring-1 ring-inset ring-yellow-500 placeholder:text-yellow-600 focus:ring-2 focus:ring-inset focus:ring-yellow-600 sm:text-sm sm:leading-6 md:w-[350px] pl-2"></input>

  
    </div>
 </div>



 <div className="relative justify-center inline-block text-left mt-2 lg:ml-9">
  <div>

    <select className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white pl-2 pr-2 py-2.5 text-sm font-semibold text-yellow-600 shadow-sm ring-1 ring-inset ring-yellow-500 hover:bg-yellow-500" id="menu-button" aria-label="Choose your Catogery" aria-expanded="true">
    <option selected className="py-2 text-sm text-yellow-600 hover:bg-yellow-50">
       Choose your Catogery
      </option>
     
      <option value="entertainment" className="block w-[225px] py-2 text-sm text-yellow-600 hover:bg-yellow-50">
        Entertainment
      </option>
      <option value="muhanned" className="block w-[225px] py-2 text-sm text-yellow-600 hover:bg-yellow-50">
       Education
      </option>
      <option value="omer" className="block w-[225px] py-2 text-sm text-yellow-600 hover:bg-yellow-50">
        Technology
      </option>
      
    </select>
  </div>
</div>


<div className="datepicker lg:mt-2 lg:ml-7">
<Datepicker primaryColor={"yellow"} value={value} onChange={newValue => setValue(newValue)} />

</div>

      </form>
     </section>
    </>
)
}

 export default EventsFilter;