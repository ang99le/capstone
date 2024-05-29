import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
function Programmes() {
  const Navigate=useNavigate();
    return (
      <div className="App">
        PROGRAMMES
        <header>
          <nav>
          <Navbar/>
          </nav>
        </header>
       
        <button type="submit" onClick={()=> {Navigate("/Progdetails")}}>Show Details</button>
        <footer>
          <Footer/>
        </footer>
      </div>
    );
  }
  
  export default Programmes;