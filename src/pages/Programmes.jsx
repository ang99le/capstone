import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProgCards from "../components/ProgsCards"

function Programmes() {

    return (
      <div>
        <header>
          <nav>
          <Navbar/>
          </nav>
        </header>
       <main>
        <h1 className="text-center text-2xl mb-6 text-sky-800 font-medium">Where To Go In Iraq</h1>
       <div className=" about-cards flex flex-col ">
       <ProgCards/>
        </div>
        <div class="grid place-items-center">
        <button type="submit" class="grid justify-items-center ... mb-5 rounded-md bg-sky-800 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-sky-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Customize your Tour</button>
        </div>
       </main>

        <footer>
          <Footer/>
        </footer>
      </div>
    );
  }
  
  export default Programmes;