import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import EventCard from "../components/Cards";
import { useState } from "react";


function Events (){
  
    return (
      <div className="App">
        <header>
          <nav>
          <Navbar/>
          </nav>
          <h1 className="text-center font-medium text-xl text-sky-800">What's Going on <br/>
          In Iraq</h1>
        </header>
     <main>
     <section className=" container mx-auto flex flex-col justify-between gap-2 pb-[3rem]">
      <div className="w-full  px-[2.5rem]">
        {/* about cards */}
        <div className="about-cards flex gap-10 flex-col md:flex-row">
          <EventCard/>
        </div>
      </div>
    </section>
    </main>














        <footer>
          <Footer/>
        </footer>
      </div>
    );
  }
  
  export default Events;
  