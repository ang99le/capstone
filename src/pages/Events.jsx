import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import EventCard from "../components/Cards";
import { useTranslation } from "react-i18next";
import { Link} from 'react-router-dom';
import { auth } from "../firebase";
import { useEffect,useState } from "react";

function Events (){
  const {t} = useTranslation();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

    return (
      <div className="App">
        <header>
          <nav>
          <Navbar/>
          </nav>
          <div className="flex justify-center mt-11">
          <h1 className="text-center font-medium text-xl text-sky-800 pb-12 md:text-4xl">{t("What's Going on In")}</h1>
          <h1 className="text-center font-medium text-5xl font-primary text-yellow-500 ml-3 md:text-6xl">{t("Iraq")}</h1>
          </div>
        
        </header>
     <main>
     <section>
      <form className="flex flex-col md:flex-row justify-center gap-2 m-4 mb-8 md:mt-4 md:mb-3">
      <div>
      <label htmlFor="text" className="block text-sm font-medium leading-6 text-sky-800"></label>        
      <div class="relative">
      <div class="absolute inset-y-7 end-2 flex items-center ps-2 pointer-events-none">
      <img className="w-[25px]" src="https://img.icons8.com/?size=100&id=CxTiJN1kfPrR&format=png&color=FAB005" alt="location"></img>
     </div> </div>
      <div className="mt-2">
      <input id="text" name="text" type="text" placeholder="select your location"  className="w-full rounded-md border-0 py-2 text-sky-800 shadow-sm ring-1 ring-inset ring-yellow-500 placeholder:text-yellow-600 focus:ring-2 focus:ring-inset focus:ring-sky-300 sm:text-sm sm:leading-6 md:w-[350px] pl-2"></input>
      </div> </div>


      <div class="relative justify-center inline-block text-left mt-2 lg:ml-9">
      <div>
      <button type="button" class="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-9 py-2.5 text-sm font-semibold text-yellow-600 shadow-sm ring-1 ring-inset ring-yellow-500 hover:bg-yellow-500" id="menu-button" aria-expanded="true" aria-haspopup="true">catogories
      <svg class="-mr-1 h-5 w-5 text-yellow-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" /></svg>
      </button>
      </div>


    {/* <div class="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-yellow-500 ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
    <div class="py-1" role="none">
   
      <a href="#" class="block px-4 py-2 text-sm text-yellow-600 hover:bg-yellow-50" role="menuitem" tabindex="-1" id="menu-item-0">Art</a>
      <a href="#" class="block px-4 py-2 text-sm text-yellow-600 hover:bg-yellow-50" role="menuitem" tabindex="-1" id="menu-item-1">Eduction</a>
      <a href="#" class="block px-4 py-2 text-sm text-yellow-600 hover:bg-yellow-50" role="menuitem" tabindex="-1" id="menu-item-2">History</a>
      <a href="#" class="block px-4 py-2 text-sm text-yellow-600 hover:bg-yellow-50" role="menuitem" tabindex="-1" id="menu-item-2">Technology</a>

      <form method="POST" action="#" role="none">
      </form>
    </div>
  </div> */}
</div>



 <div date-rangepicker datepicker-autoselect-today class="flex items-center mt-1 lg:ml-8">
 <div class="relative">
 <div class="pl-2 absolute inset-y-0 start-0 flex items-center ps-2 pointer-events-none">
      <img className="w-[25px]" src="https://img.icons8.com/?size=100&id=23&format=png&color=FAB005" alt="date logo"></img>
    </div>
    <input name="start" type="text" class=" border border-yellow-500 text-yellow-600 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-yellow-600 placeholder-yellow-600 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Start Date"/>
  </div>
  <span class="mx-4 font-medium text-yellow-600">To</span>
  <div class="relative">
    <div class="absolute inset-y-0 start-0 flex items-center ps-2 pointer-events-none">
      <img className="w-[25px]" src="https://img.icons8.com/?size=100&id=23&format=png&color=FAB005" alt="date"></img>
    </div>
    <input name="end" type="text" class=" border border-yellow-500 text-yellow-600 text-sm rounded-lg focus:ring-yellow-600 focus:border-yellow-600 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 placeholder-yellow-600 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="End Date"/>
</div>
</div>
      </form>
     </section>

     <h3 className="text-sky-800 pl-11 text-md font-medium md:pl-40">{t(" Upcoming Events")}</h3>
     <section className="container mx-auto flex flex-col justify-between gap-2 pb-[3rem]">
      <div className="w-full px-[2rem]">
        {/* about cards */}
        <div className="about-cards flex gap-6 flex-col lg:gap-10 md:grid md:grid-cols-2 lg:grid lg:grid-cols-3">
          <EventCard/>
        

          {user ? (
              <>
        <div>
            <Link to={`/AddingEvents`}>
            <button type="submit" className="text-sky-800 font-medium flex gap-2 justify-center ml-20 md:mt-72 rounded-xl p-2 bg-sky-100 md:ml-40 hover:bg-sky-200">
          <p>Adding Event</p>
          <img src="https://media3.giphy.com/media/JtGqXH8ATDQRwSeHCq/giphy.gif?cid=6c09b952aktbq3qkl3m9fq74ehet2v946fdckei6ag6poavc&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=s" alt="arrow" className="w-[50px] -mt-1"></img>
          </button>
            </Link>
          </div>
          
              </>
            ) : (
              <>
        
              </>
            )}

         
     
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
  