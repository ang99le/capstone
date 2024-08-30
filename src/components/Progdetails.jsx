// import { Link } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";
import {Carousel} from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useTranslation } from "react-i18next";
import { useState ,useEffect} from "react";
import BookNow from "./BookNow";
import { db } from '../firebase'; // Make sure this path is correct
import { doc, getDoc } from 'firebase/firestore';
import { useParams } from 'react-router-dom';

// import { useLocation } from "react-router-dom"; 

function Progdetails({card}){
    const {t} = useTranslation();
    const [popUp, setPopUp] = useState(false);
  const { programmeId } = useParams();
  const [programmeDetails, setProgrammeDetails] = useState(null);

  useEffect(() => {
    const fetchProgrammeDetails = async () => {
      if (programmeId) {
        const programmeDoc = doc(db, 'programmes', programmeId);
        const programmeSnapshot = await getDoc(programmeDoc);

        if (programmeSnapshot.exists()) {
          setProgrammeDetails(programmeSnapshot.data());
        } else {
          console.log('No such document!');
        }
      }
    };

    fetchProgrammeDetails();
  }, [programmeId]);

  if (!programmeDetails) {
    return <div>Loading...</div>;
  }

    return(
    <div>
    <nav>
    <Navbar/>
    </nav>
    <main>
        <div className="lg:flex justify-center lg:gap-20">
            <section className="md:mt-20">
        <div className="w-full md:w-[600px] mx-auto">
          <Carousel autoPlay className="h-[300px] md:h-[600px]">
            <div className="w-full h-full">
              <img
                src={programmeDetails.details.img1}
                alt="ancient babylon"
                className="object-cover w-full h-full rounded-lg"
              />
            </div>
            <div className="w-full h-full">
              <img
                src={programmeDetails.details.img2}
                alt="Ishtar Gate"
                className="object-cover w-full h-full rounded-lg"
              />
            </div>
            <div className="w-full h-full">
              <img
                src={programmeDetails.details.img3}
                alt="ancients"
                className="object-cover w-full h-full rounded-lg"
              />
            </div>
          </Carousel>
        </div>
      </section>
      
      <div className="flex flex-col justify-center text-center mb-10 md:mb-24">
         <h1 className="mt-24 text-sky-800 font-medium text-lg md:text-4xl md:mt-10">
      {programmeDetails.title}
        </h1>
       <h1 className="mt-5 text-2xl font-medium text-yellow-500">Price:
        {programmeDetails.price}
        </h1>
    
            </div>
        </div>
    
<h3 className="text-center text-sky-800 font-medium text-2xl md:text-3xl">your trip timeline</h3>
<h1 className="text-yellow-500 font-medium text-center mr-60 text-xl md:mr-80 md:-ml-20 mt-5 -mb-3">Day1:-</h1>
    <div class=" p-6 lg:relative text-sky-800 antialiased text-sm font-semibold sm:flex justify-center">
          <div class="p-6 relative text-left ">
          <div class="flex items-center">
                 <div class="hidden md:block w-20">
                     <div class="font-bold italic text-yellow-500">Step-1</div>
                     <div class="md:flex mb-16 space-x-1 text-xs  text-yellow-500">
                         <div>9:00 AM</div>
                      
                     </div>                        
                 </div>
                 
                 <div class="ml-3 border-r-2 border-sky-800 absolute h-full left-1 md:left-20 top-2 -z-10">
                 </div>
                 <div class="-ml-7 w-10 h-6 absolute rounded-full bg-white border-white border-1 sm:ml-12 mb-16">
       <img src="https://www.clipartmax.com/png/full/30-305711_people-icon-blue-png.png" alt="car"></img>
       </div>
   
                 <div class="ml-10">
                     <div class="mb-4 mt-2 md:hidden">
                         <div class="font-bold text-yellow-500">step-1</div>
                         <div class="text-xs text-yellow-500">9:00 AM</div>
                     </div>
                
                     <div class="mb-3 md:mb-20">
                     <p className="text-sky-800">
                     {programmeDetails.details.step1}
                        </p></div></div>
                     </div>


             <div class="flex items-center">
                 <div class="hidden md:block w-20">
                     <div class="font-bold italic text-yellow-500">Step-2</div>
                     <div class="md:flex mb-16 space-x-1 text-xs text-yellow-500">
                         <div>10:30 AM</div>
                      
                     </div>                        
                 </div>
                 
                 <div class="ml-3 border-r-2 border-sky-800 absolute h-full left-1 md:left-20 top-2 -z-10">
                 </div>
                 <div class="-ml-5 w-6 h-6 absolute rounded-full bg-white border-white border-1 sm:ml-14 mb-16">
       <img src="https://springfourdirect.com/content/media/caticons/Transportation_Savings.png" alt="car"></img>
       </div>

                 <div class="ml-10">
                     <div class="mb-4 mt-2 md:hidden">
                         <div class="font-bold text-yellow-500">step-2</div>
                         <div class="text-xs text-yellow-500">10:30 AM</div>
                     </div>
                     <div class="mb-3 md:mb-20 ">
                     <p>{programmeDetails.details.step2}</p>                        
                     </div></div>
             </div>

           
             <div class="flex items-center">
                 <div class="hidden md:block w-20">
                     <div class="font-bold italic text-yellow-500">Step-3</div>
                     <div class="md:flex mb-16 space-x-1 text-xs text-yellow-500">
                         <div>10:35 AM</div>
                      
                     </div>                        
                 </div>
                 
                 <div class="ml-3 border-r-2 border-sky-800 absolute h-full left-1 md:left-20 top-2 -z-10">
                 </div>
                 <div class="-ml-5 w-8 h-6 absolute rounded-full bg-white border-white border-1 sm:ml-14 mb-20">
       <img src="https://cdn-icons-png.freepik.com/512/7334/7334617.png" alt="car"></img>
       </div>

                 <div class="ml-10">
                     <div class="mb-4 mt-2 md:hidden">
                         <div class="font-bold text-yellow-500">step-3</div>
                         <div class="text-xs text-yellow-500">10:35 AM</div>
                     </div>
                     <div class="mb-3 md:mb-20 md:w-[450px] break-words...">
                     <p>{programmeDetails.details.step3}</p>                        
                     </div>                    </div>
             </div>


             <div class="flex items-center">
                 <div class="hidden md:block w-20">
                     <div class="font-bold italic text-yellow-500">Step-4</div>
                     <div class="md:flex mb-16 space-x-1 text-xs text-yellow-500">
                         <div>1:00 PM</div>
                      
                     </div>                        
                 </div>
                 
                 <div class="ml-3 border-r-2 border-sky-800 absolute h-full left-1 md:left-20 top-2 -z-10">
                 </div>
                 <div class="-ml-5 w-9 h-6 absolute rounded-full bg-white border-white border-1 sm:ml-14 mb-20">
       <img src="https://cdn-icons-png.freepik.com/512/5457/5457335.png" alt="car"></img>
       </div>

                 <div class="ml-10">
                     <div class="mb-4 mt-2 md:hidden">
                         <div class="font-bold text-yellow-500">step-4</div>
                         <div class="text-xs text-yellow-500">1:00 PM</div>
                     </div>
                     <div class="mb-3 md:mb-20">
                     <p>{programmeDetails.details.step4}</p>                        
                     </div>                    </div>
             </div>


             <div class="flex items-center">
                 <div class="hidden md:block w-20">
                     <div class="font-bold italic text-yellow-500">Step-5</div>
                     <div class="md:flex mb-16 space-x-1 text-xs text-yellow-500">
                         <div>2:00 PM</div>
                      
                     </div>                        
                 </div>
                 
                 <div class="ml-3 border-r-2 border-sky-800 absolute h-full left-1 md:left-20 top-2 -z-10">
                 </div>
                 <div class="-ml-5 w-9 h-6 absolute rounded-full bg-white border-white border-1 sm:ml-14 mb-20">
       <img src="https://cdn-icons-png.flaticon.com/512/12481/12481643.png" alt="car"></img>
       </div>

                 <div class="ml-10">
                     <div class="mb-4 mt-2 md:hidden">
                         <div class="font-bold text-yellow-500">step-5</div>
                         <div class="text-xs text-yellow-500">2:00 PM</div>
                     </div>
                     <div class="mb-3 md:mb-20">
                     <p>{programmeDetails.details.step5}</p>                        
                     </div>                    </div>
             </div>



             <div class="flex items-center">
                 <div class="hidden md:block w-20">
                     <div class="font-bold italic text-yellow-500">Step-6</div>
                     <div class="md:flex mb-16 space-x-1 text-xs text-yellow-500">
                         <div>3:00 PM</div>
                      
                     </div>                        
                 </div>
                 
                 <div class="ml-3 border-r-2 border-sky-800 absolute h-full left-1 md:left-20 top-2 -z-10">
                 </div>
                 <div class="-ml-5 w-6 h-6 absolute rounded-full bg-white border-white border-1 sm:ml-14 mb-16">
       <img src="https://springfourdirect.com/content/media/caticons/Transportation_Savings.png"alt="car"></img>
       </div>

                 <div class="ml-10">
                     <div class="mb-4 mt-2 md:hidden">
                         <div class="font-bold text-yellow-500">step-6</div>
                         <div class="text-xs text-yellow-500">3:00 PM</div>
                     </div>
                     <div class="mb-3 md:mb-20">
                     <p>{programmeDetails.details.step6}</p>                        
                     </div> 
                    </div>
             </div>


         </div>
</div>







<h1 className="text-center text-yellow-500 font-medium text-lg mb-7 md:text-2xl">{t("your guide info")}</h1>
<div className="mx-auto flex gap-6 justify-center mb-10">
<img src="https://t3.ftcdn.net/jpg/05/64/69/92/360_F_564699261_sdGpc8qaH0kXwxuMnNYE3XGg3ov0HuYv.jpg"className="rounded-full w-[120px] h-[121px] border-2 border-sky-800" alt="hassan ali" ></img> 

<div className="flex mt-7">
<img src="https://logos-world.net/wp-content/uploads/2020/05/WhatsApp-Logo.png"  className="w-[60px] h-[35px]"  alt="whatsapp logo"></img>
<h1 className="font-medium text-sky-800 mt-1" >07730056734</h1>

</div>

</div>

<div className="flex justify-center">
          <button type="submit" onClick={() => setPopUp(true)} class="mb-2 flex w-[300px] justify-center rounded-md bg-sky-800 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-sky-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">{t("Book Now")}</button>
                {popUp && <BookNow setPopUp={setPopUp} />}
                
        </div>
        </main>

    <footer>
    <Footer/>
    </footer>

        </div>
    )
}


export default Progdetails;