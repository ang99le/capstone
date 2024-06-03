import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import EventCard from "../components/Cards";

function Events (){
    return (
      <div className="App">
        <header>
          <nav>
          <Navbar/>
          </nav>
          <h1 className="text-center font-medium text-xl text-sky-800 pb-12">What's Going on
          In Iraq</h1>
        </header>
     <main>
     <h3 className="text-sky-800 pl-11 text-md font-medium md:pl-40"> Upcoming Events</h3>
     <section className="container mx-auto flex flex-col justify-between gap-2 pb-[3rem]">
      <div className="w-full px-[2rem]">
        {/* about cards */}
        <div className=" about-cards flex gap-10 flex-col md:grid grid-cols-2; lg:grid grid-cols-3">
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
  