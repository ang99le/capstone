import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import EventCard from "../components/Cards";
import { useState } from "react";
import { eventsinformation } from "../Events";


function Events ({}){
const [event,setEvent]=useState('');
const [eventlist, setEventList] = useState([]);


    return (
      <div className="App">
        <header>
     EVENTS
          <nav>
          <Navbar/>
          </nav>
        </header>
     <main>
     
      <div className="shadow">
    
      <ul>
        {eventlist.map(m => (
          <li key={m.id}>{m.event}</li>
        ))}
      </ul>
   

      </div>
    
    
    
    </main>














        <footer>
          <Footer/>
        </footer>
      </div>
    );
  }
  
  export default Events;
  