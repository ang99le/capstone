import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useState } from "react";
import { eventsinformation } from "../Events";


const Events =({})=> {
  const [eventlist, setEventList] = useState(eventsinformation);

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

     
      
      </div>
    
    
    
    </main>














        <footer>
          <Footer/>
        </footer>
      </div>
    );
  }
  
  export default Events;
  