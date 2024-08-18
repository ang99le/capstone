import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link} from "react-router-dom";
import sarjon from "../assests/sarjon.png"
import gigamesh from "../assests/gigamesh.png"
import sanhareeb from "../assests/sanhareeb.png"
import NebuchadnezzarII from "../assests/NebuchadnezzarII.png"
import { Tooltip } from "react-tooltip";
import ScrollUpButton from "../components/Scrollup";
import { useState,useRef } from "react";
import sarjonvoice from "../assests/sarjonvoice.mp3";
import { useEffect } from "react";
// import Gilgamesh from "../assests/Gilgamesh.mp3";


function Civilization() {
  
  const [issarjonTalking, setIssarjonTalking] = useState(false);
  // const [isgilTalking, setgilTalking] = useState(false);
  const [isexpand,setIsexpand]=useState(false)
  const audioRef = useRef(null);
  const handleButtonClick = () => {
    setIssarjonTalking(!issarjonTalking);
    //  setgilTalking(!isgilTalking)
    setIsexpand(!isexpand);
    if (audioRef.current) {
      audioRef.current.play();
    }
  };


  const handleDocumentClick = (e) => {
    // Check if the click is outside the button
    if (isexpand && !e.target.closest('#sargon')) {
      setIssarjonTalking(false);
      // setgilTalking(false)
      setIsexpand(false);
    }
  };

  useEffect(() => {
    if (isexpand) {
      document.addEventListener('click', handleDocumentClick);
    } else {
      document.removeEventListener('click', handleDocumentClick);
    }

    // Clean up the event listener on component unmount
    return () => {
      document.removeEventListener('click',handleDocumentClick);
    };
  }, );

  




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
             {/* <div className="bg-[url(https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/291220131/original/1232c3f5b04bab295463f0cc1a5d39afa30ab53b/convert-the-text-you-want-to-sumerian-cuneiform-in-a-printable-pdf.png)]">
             <div class="w-full h-full flex flex-col justify-center items-center backdrop-blur-sm"> */}
          <div class="hidden md:block l:block lg:block min-h-screen py-6  flex-col justify-center">
          <div class="lg:py-3 w-full px-2 ">
          <div class="lg:relative text-sky-800 antialiased text-sm font-semibold">
          
        {/* <!-- Vertical bar running through middle --> */}
          <div class=" w-1 bg-sky-800 absolute h-full left-1/2 transform -translate-x-1/2"></div>
      
          
      {/* <!-- Left section, set by justify-start and sm:pr-8 --> */}
      <div class="mt-6 lg:mb-20">

        <div class="flex flex-col sm:flex-row items-center">
          <div class="flex justify-start w-full mx-auto items-center">
           
            <div class="sm:w-[710px] sm:pr-10 pl-7 md:hover:w-[730px]">
            <Link to={`/Akkad`}><img src="https://th.bing.com/th/id/R.dee54552520847f50d0f0a57000382fe?rik=0PEFOO3hbbneuA&pid=ImgRaw&r=0" id="my-tooltip" alt="Akd" className="rounded-md "></img></Link>
               
              <div class="p-4 bg-white rounded text-justifiy">
               <p>Akkad was the seat of the Akkadian Empire (2334-2218 BCE), the first multi-national political entity in the world, founded by Sargon the Great (2334-2279 BCE) who unified Mesopotamia under his rule and set the model for later Mesopotamian kings to follow or attempt to surpass. The Akkadian Empire set a number of "firsts' which would later become standard.</p>
           
              </div>
            </div>
          </div>

<div>
<button onClick={handleButtonClick}>
<img alt="Sargon" id="sargon" className={`${isexpand?'h-[500px] z-50 bg-white bg-opacity-70 rounded-full fixed top-48 right-80 left-66 flex justify-center items-center':'lg:rounded-full border-white border-5 transform -translate-x-1/2 flex items-center justify-center absolute left-1/2 w-40 h-25 -translate-y-4 sm:-translate-y-28'}`} src={sarjon}></img>
   <Tooltip anchorSelect="#sargon">
    Sargon The Greatest
  </Tooltip> 
  </button> 
  <audio ref={audioRef} src={sarjonvoice} />
  </div>
        </div>
        {/* <div className="bg-[url(https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/291220131/original/1232c3f5b04bab295463f0cc1a5d39afa30ab53b/convert-the-text-you-want-to-sumerian-cuneiform-in-a-printable-pdf.png)]">
          <div class=" h-full w-full flex flex-col justify-center items-center backdrop-blur-sm"> */}
     
      
       <div className="text-center ml-60 -translate-y-80">
        <h4 > The Akaddian civilization</h4>
         <h6>(2334 -2047 BCE)</h6>
         </div>
      </div>


      <ScrollUpButton/>
      
           {/* <!-- Right section, set by justify-end and sm:pl-8 --> */}
      <div class="mt-6 sm:mt-0 sm:mb-12">
        <div class="flex flex-col sm:flex-row items-center">
          <div class="flex justify-end w-full mx-auto items-center">
            <div class="w-[710px] sm:w-1/2 sm:pl-10 pr-8 md:hover:w-[730px]">
            <img src="https://arkeonews.net/wp-content/uploads/2021/02/Ninive.jpg" alt="Ashur" className="rounded-md"></img>
              <div class="p-4 bg-white rounded text-center">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, amet!</p>
              </div>
            </div>
          </div>
  
          <div class="rounded-full bg-sky-200 border-sky-800 border-2 w-16 h-16 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
          <img id="sanhareeb" src={sanhareeb} className="scale-x-[-1]" alt="sanhareeb"></img>
          <Tooltip anchorSelect="#sanhareeb">
          Sanhareeb
          </Tooltip>  
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
            <div class="w-[710px] md:hover:w-[730px] sm:w-1/2 sm:pr-10 pl-7">
              <img alt="sumer" src="https://91b6be3bd2294a24b7b5-da4c182123f5956a3d22aa43eb816232.ssl.cf1.rackcdn.com/contentItem-7940303-68282916-6i00onnwmp6mx-or.jpg" className="rounded-md"></img>
              <div class="p-4 bg-white rounded text-center">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, amet!</p>
              </div>
            </div>
          </div>

          <div class="rounded-full bg-sky-200 border-sky-800 border-2 w-16 h-16 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
          {/* <button onClick={handleButtonClick}> */}
          <img id="gilgamesh" src={gigamesh} alt="Gilgamesh"></img>
          <Tooltip anchorSelect="#gilgamesh">
          Gilgamish
        </Tooltip> 
          {/* <audio ref={audioRef} src={Gilgamesh} /> */}
        {/* </button> */}
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
            <div class="w-[710px] md:hover:w-[730px] sm:w-1/2 sm:pl-10 pr-8">
            <img src="https://th.bing.com/th/id/R.3fafd03467d6a4ece126320ce9fd094c?rik=hJfw11jblft8tQ&pid=ImgRaw&r=0" alt="babel" className="rounded-md"></img>
              <div class="p-4 bg-white rounded text-center">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, amet!</p>
              </div>
            </div>
          </div>
          <div class="rounded-full bg-sky-200 border-sky-800 border-2 w-16 h-16 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
          <img id="NebuchadnezzarI" src={NebuchadnezzarII} alt="NebuchadnezzarII"></img>
          <Tooltip anchorSelect="#NebuchadnezzarI">
          NebuchadnezzarII
        </Tooltip> 
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
  