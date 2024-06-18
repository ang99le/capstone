import { Link } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";
import {Carousel} from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Progdetails(){
    return(
    <div>
    <nav>
    <Navbar/>
    </nav>

    <main>
    <h1 className="text-center text-sky-800 font-medium text-lg ">Babylon City Tour</h1>
<section className="w-[660px] mx-auto mt-8">
       <Carousel autoPlay>
                <div>
                    <img src="https://th.bing.com/th/id/OIP.YDMCSFNxPkdcdHMMfcg4XgHaE7?rs=1&pid=ImgDetMain" alt="ancient babylon" className="rounded-lg"/>
                 
                </div>
                <div>
                    <img src="https://th.bing.com/th/id/OIP.-mJ4JbhowA5g7gM4byHihAHaFb?w=500&h=367&rs=1&pid=ImgDetMain" alt="Ishtar Gate"className="rounded-lg " />
                  
                </div>
                <div>
                    <img src="https://i2.wp.com/etc.ancient.eu/wp-content/uploads/2014/11/Figure-4.jpg" alt="ancints" className="rounded-lg"/>
              
                </div>
            </Carousel>
</section>




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
                 <div class="-ml-5 w-6 h-6 absolute rounded-full bg-white border-white border-1 sm:ml-14 mb-16">
       <img src="https://springfourdirect.com/content/media/caticons/Transportation_Savings.png" alt="car"></img>
       </div>

                 <div class="ml-10">
                     <div class="mb-4 mt-2 md:hidden">
                         <div class="font-bold text-yellow-500">step-1</div>
                         <div class="text-xs text-yellow-500">9:00 AM</div>
                     </div>
                     <div class="mb-3 md:mb-20">
                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, amet!</p>                        
                     </div>                    </div>
             </div>


             <div class="flex items-center">
                 <div class="hidden md:block w-20">
                     <div class="font-bold italic text-yellow-500">Step-2</div>
                     <div class="md:flex mb-16 space-x-1 text-xs text-yellow-500">
                         <div>9:00 AM</div>
                      
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
                         <div class="text-xs text-yellow-500">9:00 AM</div>
                     </div>
                     <div class="mb-3 md:mb-20 ">
                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, amet!</p>                        
                     </div>                    </div>
             </div>

           
             <div class="flex items-center">
                 <div class="hidden md:block w-20">
                     <div class="font-bold italic text-yellow-500">Step-3</div>
                     <div class="md:flex mb-16 space-x-1 text-xs text-yellow-500">
                         <div>9:00 AM</div>
                      
                     </div>                        
                 </div>
                 
                 <div class="ml-3 border-r-2 border-sky-800 absolute h-full left-1 md:left-20 top-2 -z-10">
                 </div>
                 <div class="-ml-5 w-6 h-6 absolute rounded-full bg-white border-white border-1 sm:ml-14 mb-16">
       <img src="https://springfourdirect.com/content/media/caticons/Transportation_Savings.png" alt="car"></img>
       </div>

                 <div class="ml-10">
                     <div class="mb-4 mt-2 md:hidden">
                         <div class="font-bold text-yellow-500">step-3</div>
                         <div class="text-xs text-yellow-500">9:00 AM</div>
                     </div>
                     <div class="mb-3 md:mb-20">
                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, amet!</p>                        
                     </div>                    </div>
             </div>


             <div class="flex items-center">
                 <div class="hidden md:block w-20">
                     <div class="font-bold italic text-yellow-500">Step-4</div>
                     <div class="md:flex mb-16 space-x-1 text-xs text-yellow-500">
                         <div>9:00 AM</div>
                      
                     </div>                        
                 </div>
                 
                 <div class="ml-3 border-r-2 border-sky-800 absolute h-full left-1 md:left-20 top-2 -z-10">
                 </div>
                 <div class="-ml-5 w-6 h-6 absolute rounded-full bg-white border-white border-1 sm:ml-14 mb-16">
       <img src="https://springfourdirect.com/content/media/caticons/Transportation_Savings.png" alt="car"></img>
       </div>

                 <div class="ml-10">
                     <div class="mb-4 mt-2 md:hidden">
                         <div class="font-bold text-yellow-500">step-4</div>
                         <div class="text-xs text-yellow-500">9:00 AM</div>
                     </div>
                     <div class="mb-3 md:mb-20">
                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, amet!</p>                        
                     </div>                    </div>
             </div>


             <div class="flex items-center">
                 <div class="hidden md:block w-20">
                     <div class="font-bold italic text-yellow-500">Step-5</div>
                     <div class="md:flex mb-16 space-x-1 text-xs text-yellow-500">
                         <div>9:00 AM</div>
                      
                     </div>                        
                 </div>
                 
                 <div class="ml-3 border-r-2 border-sky-800 absolute h-full left-1 md:left-20 top-2 -z-10">
                 </div>
                 <div class="-ml-5 w-6 h-6 absolute rounded-full bg-white border-white border-1 sm:ml-14 mb-16">
       <img src="https://springfourdirect.com/content/media/caticons/Transportation_Savings.png" alt="car"></img>
       </div>

                 <div class="ml-10">
                     <div class="mb-4 mt-2 md:hidden">
                         <div class="font-bold text-yellow-500">step-5</div>
                         <div class="text-xs text-yellow-500">9:00 AM</div>
                     </div>
                     <div class="mb-3 md:mb-20">
                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, amet!</p>                        
                     </div>                    </div>
             </div>



             <div class="flex items-center">
                 <div class="hidden md:block w-20">
                     <div class="font-bold italic text-yellow-500">Step-6</div>
                     <div class="md:flex mb-16 space-x-1 text-xs text-yellow-500">
                         <div>9:00 AM</div>
                      
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
                         <div class="text-xs text-yellow-500">9:00 AM</div>
                     </div>
                     <div class="mb-3 md:mb-20">
                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, amet!</p>                        
                     </div> 
                    </div>
             </div>


         </div>
</div>

        <div class="grid place-items-center">
        <Link to={`/BookNow`}><button className="text-white mb-6 p-3 font-medium text-sm bg-sky-800 rounded-xl px-5 hover:bg-sky-600 " type="submit">Book Now</button></Link>        </div>

        </main>

    <footer>
    <Footer/>
    </footer>

        </div>
    )
}


export default Progdetails;