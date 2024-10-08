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

     <h3 className="text-sky-800 pl-11 mb-5 text-md font-medium md:pl-40">{t(" Upcoming Events")}</h3>

     <section className="container mx-auto flex flex-col justify-between gap-2 pb-[3rem]">
      <div className="w-full px-[2rem]">
        {/* about cards */}
        <div className="about-cards flex gap-6 flex-col lg:gap-10 md:grid md:grid-cols-2 lg:grid lg:grid-cols-3">
          <EventCard />

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
  