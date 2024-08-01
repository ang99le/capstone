import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProgCards from "../components/ProgsCards"
// import { Link} from "react-router-dom";
import { useTranslation } from "react-i18next";
import Progsbtns from "../components/Progsbtns";

function Programmes() {
  const {t} = useTranslation();
    return (
      <div>
        <header>
          <nav>
          <Navbar/>
          </nav>
        </header>
       <main className="">

       <div className="flex justify-center mb-6">
  <h1 className="text-2xl font-medium text-sky-800 mt-9 md:text-5xl">{t("Where To Go In")} </h1>
  <h1 className="text-5xl font-medium text-yellow-500 font-primary mt-9 ml-4 md:text-6xl ">{t("Iraq")} </h1>
  </div>
       
        <Progsbtns/>

     
      
    <div className="about-cards flex flex-col ">
    <ProgCards/>
   </div>

       </main>

        <footer>
          <Footer/>
        </footer>
      </div>
    );
  }
  
  export default Programmes;