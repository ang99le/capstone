import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link} from "react-router-dom";
import sarjon from "../assests/sarjon.png"
import gigamesh from "../assests/gigamesh.png"
import sanhareeb from "../assests/sanhareeb.png"
import NebuchadnezzarII from "../assests/NebuchadnezzarII.png"
import { Tooltip } from "react-tooltip";


function Civilization() {

    return (
     
      <div className="App">
    
         <header>
          
          <nav>
          <Navbar/>
          </nav>
          <div className="flex justify-center mt-12">
          <h1 className="text-center font-medium text-sky-800 text-2xl md:text-5xl font-markazi">Learn More About </h1>
          <h1 className="text-center font-medium text-yellow-500  text-5xl ml-3 font-primary md:text-6xl" >Iraq</h1>
          </div>
          </header>
          <main className="font-markazi">
            {/* mobile UI Design */}
          <section>
          <div className="px-5 sm:block  md:hidden l:hidden ">
          <div className="relative">
          <Link to={`/Progdetails'`}> <img class="rounded-xl contrast-50 drop-shadow-sm py-2 scale-100 hover:scale-105 ease-in duration-300"
            src="https://th.bing.com/th/id/R.dee54552520847f50d0f0a57000382fe?rik=0PEFOO3hbbneuA&pid=ImgRaw&r=0" alt="Akd"></img>
            <h4 className="absolute text-xl text-white top-2/4 left-1/4">Akkdian Civilization</h4></Link>
           
            </div>  

            <div className="relative">
            <img class="rounded-xl contrast-50 drop-shadow-sm py-2 scale-100 hover:scale-105 ease-in duration-300"
            src="https://arkeonews.net/wp-content/uploads/2021/02/Ninive.jpg" alt="Assur"></img>
            <h4 className="absolute text-xl text-white top-2/4 left-1/4">Assyrian civilization</h4>
            </div>

            <div className="relative">
            <img class="rounded-xl contrast-50 drop-shadow-sm py-2 scale-100 hover:scale-105 ease-in duration-300" alt="sumer"
            src="https://91b6be3bd2294a24b7b5-da4c182123f5956a3d22aa43eb816232.ssl.cf1.rackcdn.com/contentItem-7940303-68282916-6i00onnwmp6mx-or.jpg"></img>
            <h4 className="absolute text-xl text-white top-2/4 left-1/4">Sumerian civilization</h4>
            </div>
            <div className="relative">
            <img class="rounded-xl contrast-50 drop-shadow-sm py-2 scale-100 hover:scale-105 ease-in duration-300" alt="Babel"
            src="https://th.bing.com/th/id/R.3fafd03467d6a4ece126320ce9fd094c?rik=hJfw11jblft8tQ&pid=ImgRaw&r=0"></img>
            <h4 className="absolute text-xl text-white top-2/4 left-1/4">Babylon civilization</h4>
            </div>
           </div>
           </section>
        
        {/* larg screen UI Design */}
           <section>
         
          <div class="hidden md:block l:block lg:block min-h-screen py-6  flex-col justify-center">
          <div class="lg:py-3 w-full px-2 ">
          <div class="lg:relative text-sky-800 antialiased text-sm font-semibold">
          
        {/* <!-- Vertical bar running through middle --> */}
          <div class=" w-1 bg-sky-800 absolute h-full left-1/2 transform -translate-x-1/2"></div>
      
          
      {/* <!-- Left section, set by justify-start and sm:pr-8 --> */}
      <div class="mt-6  lg:mb-20">
        <div class="flex flex-col sm:flex-row items-center">
          <div class="flex justify-start w-full mx-auto items-center">
           
            <div class="w-full sm:w-1/2 sm:pr-10 pl-7">
            <Link to={`/Akkad`}><img src="https://th.bing.com/th/id/R.dee54552520847f50d0f0a57000382fe?rik=0PEFOO3hbbneuA&pid=ImgRaw&r=0" id="my-tooltip" alt="Akd" className="rounded-md"></img></Link>
               
              <div class="p-4 bg-white rounded text-justifiy">
               <p>Akkad was the seat of the Akkadian Empire (2334-2218 BCE), the first multi-national political entity in the world, founded by Sargon the Great (2334-2279 BCE) who unified Mesopotamia under his rule and set the model for later Mesopotamian kings to follow or attempt to surpass. The Akkadian Empire set a number of "firsts' which would later become standard.</p>
           
              </div>
            </div>
          </div>


<a id="sargon">
<img alt="Sargon" className="lg:rounded-full border-white border-5 w-40 h-24 absolute left-1/2 -translate-y-4 sm:-translate-y-16 transform -translate-x-1/2 flex items-center justify-center" src={sarjon}></img>
</a>
   <Tooltip anchorSelect="#sargon">
    Sargon The Greatest
  </Tooltip> 
         
        </div>
        <div className="text-center ml-60 -translate-y-72">
        <h4 > The Akaddian civilization</h4>
         <h6>(2334 -2047 BCE)</h6>
         </div>
      </div>
           {/* <!-- Right section, set by justify-end and sm:pl-8 --> */}
      <div class="mt-6 sm:mt-0 sm:mb-12">
        <div class="flex flex-col sm:flex-row items-center">
          <div class="flex justify-end w-full mx-auto items-center">
            <div class="w-full sm:w-1/2 sm:pl-10 pr-8">
            <img src="https://arkeonews.net/wp-content/uploads/2021/02/Ninive.jpg" alt="Ashur" className="rounded-md"></img>
              <div class="p-4 bg-white rounded text-center">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, amet!</p>
              </div>
            </div>
          </div>
  
          <div class="rounded-full bg-sky-200 border-sky-800 border-2 w-10 h-10 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
          <img src={sanhareeb} alt="sanhareeb"></img>
          </div>
        
        
        </div>
        <div className="text-center mr-60 -translate-y-56">
        <h4 > The Assyrian civilization</h4>
         <h6>(1900 BCE - 650 CE)</h6>
         </div>

      </div>
          
           {/* <!-- Left section, set by justify-start and sm:pr-8 --> */}
      <div class="mt-6 lg:mt-0 lg:mb-12">
        <div class="flex flex-col sm:flex-row items-center">
          <div class="flex justify-start w-full mx-auto items-center">
            <div class="w-full sm:w-1/2 sm:pr-10 pl-7">
              <img alt="sumer" src="https://91b6be3bd2294a24b7b5-da4c182123f5956a3d22aa43eb816232.ssl.cf1.rackcdn.com/contentItem-7940303-68282916-6i00onnwmp6mx-or.jpg" className="rounded-md"></img>
              <div class="p-4 bg-white rounded text-center">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, amet!</p>
              </div>
            </div>
          </div>
          <div class="rounded-full bg-sky-200 border-sky-800 border-2 w-10 h-10 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
          <img src={gigamesh} alt="Gilgamesh"></img>
          </div>
        </div>
        <div className="text-center ml-60 -translate-y-52">
        <h4 > The Sumerian civilization</h4>
         <h6>(6500 - 1940 BCE)</h6>
         </div>
        
      </div>

      {/* <!-- Right section, set by justify-end and sm:pl-8 --> */}
      <div class="mt-6 sm:mt-0 sm:mb-12">
        <div class="flex flex-col sm:flex-row items-center">
          <div class="flex justify-end w-full mx-auto items-center">
            <div class="w-full sm:w-1/2 sm:pl-10 pr-8">
            <img src="https://th.bing.com/th/id/R.3fafd03467d6a4ece126320ce9fd094c?rik=hJfw11jblft8tQ&pid=ImgRaw&r=0" alt="babel" className="rounded-md"></img>
              <div class="p-4 bg-white rounded text-center">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, amet!</p>
              </div>
            </div>
          </div>
          <div class="rounded-full bg-sky-200 border-sky-800 border-2 w-10 h-10 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
          <img src={NebuchadnezzarII} alt="NebuchadnezzarII"></img>
         </div>
        </div>

        <div className="text-center mr-60 -translate-y-60">
        <h4 > The Babylonian civilization</h4>
         <h6>(1894 - 539 BCE)</h6>
         </div>
        
   
      </div>

          </div>
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
  
  export default Civilization;
  