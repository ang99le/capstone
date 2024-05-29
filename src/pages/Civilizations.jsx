import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import {progsdetails} from "../components/Progdetails"

function Civilization() {
const Navigate=useNavigate();
    return (
     
      <div className="App">
    
         <header>
          
          <nav>
          <Navbar/>
          </nav>
          </header>
          <main>
          <div className="px-5">
              <div className="relative">
            <img class="rounded-xl contrast-50 drop-shadow-sm py-2 scale-100 hover:scale-105 ease-in duration-300"
            src="https://th.bing.com/th/id/R.dee54552520847f50d0f0a57000382fe?rik=0PEFOO3hbbneuA&pid=ImgRaw&r=0" onClick={()=>{Navigate('/Progdetails')}}></img>
            <h4 className="absolute text-xl text-white top-2/4 left-1/4">Akkdian Civilization</h4>
            </div>  

            <div className="relative">
            <img class="rounded-xl contrast-50 drop-shadow-sm py-2 scale-100 hover:scale-105 ease-in duration-300"
            src="https://arkeonews.net/wp-content/uploads/2021/02/Ninive.jpg"></img>
            <h4 className="absolute text-xl text-white top-2/4 left-1/4">Assyrian civilization</h4>
            </div>

            <div className="relative">
            <img class="rounded-xl contrast-50 drop-shadow-sm py-2 scale-100 hover:scale-105 ease-in duration-300"
            src="https://www.iraqiembassy.us/sites/default/files/styles/medium/public/photos/history_timeline_photo_01_1.jpg?itok=TArrfpfN"></img>
            <h4 className="absolute text-xl text-white top-2/4 left-1/4">Sumerian civilization</h4>
            </div>
            <div className="relative">
            <img class="rounded-xl contrast-50 drop-shadow-sm py-2 scale-100 hover:scale-105 ease-in duration-300"
            src="https://th.bing.com/th/id/R.9a96c17fb9b75cd4645d94ea4027a6eb?rik=0WzQCLCivSZ6Rw&riu=http%3a%2f%2fphotonshouse.com%2fphoto%2f3b%2f3b4bad499d25327d763704fcefd078f1.jpg&ehk=x%2bUUa%2f3Y9CBZW2yLHBG3jKc7OxMcLMLbddisMIJ4aYM%3d&risl=&pid=ImgRaw&r=0"></img>
            <h4 className="absolute text-xl text-white top-2/4 left-1/4">Babylon civilization</h4>
            </div>

         </div>
          </main>
    
        <footer>
          <Footer/>
        </footer>
      </div>
    );
  }
  
  export default Civilization;
  