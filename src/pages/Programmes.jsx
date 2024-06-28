import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProgCards from "../components/ProgsCards"
import { Link} from "react-router-dom";

function Programmes() {

    return (
      <div>
        <header>
          <nav>
          <Navbar/>
          </nav>
        </header>
       <main>
       <div className="flex justify-center mb-6">
  <h1 className="text-2xl font-medium text-sky-800 mt-9">Where To Go In </h1>
  <h1 className="text-5xl font-medium text-yellow-500 font-primary mt-9 ml-4 ">Iraq </h1>
  </div>
       <div className="grid justify-center sm:flex sm:justify-center gap-3 mt-3 mb-3">
        <Link to={`/Programmes`}><button type="submit" class="mt-4 mb-2 flex justify-center rounded-md bg-sky-800 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-sky-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" >Our Programmes</button></Link>
      <Link to={`/CustomizeProg`}><button type="submit" class="sm:mt-4 mb-2 flex justify-center rounded-md bg-sky-800 px-5 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-sky-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" >Customize Your Programme</button></Link>
        </div>
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