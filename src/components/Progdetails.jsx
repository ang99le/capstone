import Footer from "./Footer";
import Navbar from "./Navbar";

function Progdetails(){
    return(
        <div>
    <nav>
    <Navbar/>
    </nav>
    <h1 className="text-center text-sky-800 font-medium text-lg -mb-40">Babylon City Tour</h1>

    <div class="min-h-screen relative -mb-40">
         <div class="w-100 mx-auto">
            {/* <!-- first --> */}
            <div class="">
               <input class="sr-only peer" type="radio" name="carousel" id="carousel-1" checked />
               {/* <!-- content #1 --> */}
               <div
                  class="w-[600px] absolute top-1/4 left-1/2 transform -translate-x-1/2 bg-white rounded-lg shadow-lg transition-all duration-300 opacity-0 peer-checked:opacity-100 peer-checked:z-10 z-0">
                  <img class="rounded-t-lg w-[600px] h-65" src="https://listverse.com/wp-content/uploads/2012/11/Gate-of-Ishtar.jpg" alt="" />
                 
                  {/* <!-- controls --> */}
                  <div class="absolute top-1/2 w-full flex justify-between z-20">
                     <label for="carousel-3" class="inline-block text-sky-800 cursor-pointer -translate-x-5 bg-white rounded-full shadow-md active:translate-y-0.5">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" viewBox="0 0 20 20" fill="currentColor">
                           <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z" clip-rule="evenodd" />
                        </svg>
                     </label>
                     <label for="carousel-2" class="inline-block text-sky-800 cursor-pointer translate-x-5 bg-white rounded-full shadow-md active:translate-y-0.5">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" viewBox="0 0 20 20" fill="currentColor">
                           <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clip-rule="evenodd" />
                        </svg>
                     </label>
                  </div>
               </div>
            </div>
            {/* <!-- second --> */}
            <div class="">
               <input class="sr-only peer" type="radio" name="carousel" id="carousel-2" />
               {/* <!-- content #2 --> */}
               <div
                  class="w-96 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg shadow-lg transition-all duration-300 opacity-0 peer-checked:opacity-100 peer-checked:z-10 z-0">
                  <img class="rounded-t-lg w-[600px] h-64" src="https://th.bing.com/th/id/R.98e9ca179b5c1c02780844b01e7e7185?rik=VV1tbLHspGUuiQ&pid=ImgRaw&r=0" alt="" />
                
                  {/* <!-- controls --> */}
                  <div class="absolute top-1/2 w-full flex justify-between z-20">
                     <label for="carousel-1" class="inline-block text-blue-800 cursor-pointer -translate-x-5 bg-white rounded-full shadow-md active:translate-y-0.5">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" viewBox="0 0 20 20" fill="currentColor">
                           <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z" clip-rule="evenodd" />
                        </svg>
                     </label>
                     <label for="carousel-3" class="inline-block text-blue-800 cursor-pointer translate-x-5 bg-white rounded-full shadow-md active:translate-y-0.5">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" viewBox="0 0 20 20" fill="currentColor">
                           <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clip-rule="evenodd" />
                        </svg>
                     </label>
                  </div>
               </div>
            </div>
            {/* <!-- three --> */}
            <div class="">
               <input class="sr-only peer" type="radio" name="carousel" id="carousel-3" />
               {/* <!-- content #3 --> */}
               <div
                  class="w-96 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg shadow-lg transition-all duration-300 opacity-0 peer-checked:opacity-100 peer-checked:z-10 z-0">
                  <img class="rounded-t-lg w-[600px] h-64" src="https://www.wmf.org/sites/default/files/styles/slideshow_s/public/slideshow/shutterstock_248468644_-_copy.jpg?itok=IrOecuee" alt="" />
                 
                  {/* <!-- controls --> */}
                  <div class="absolute top-1/2 w-full flex justify-between z-20">
                     <label for="carousel-2" class="inline-block text-sky-800 cursor-pointer -translate-x-5 bg-white rounded-full shadow-md active:translate-y-0.5">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" viewBox="0 0 20 20" fill="currentColor">
                           <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z" clip-rule="evenodd" />
                        </svg>
                     </label>
                     <label for="carousel-1" class="inline-block text-sky-800 cursor-pointer translate-x-5 bg-white rounded-full shadow-md active:translate-y-0.5">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" viewBox="0 0 20 20" fill="currentColor">
                           <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clip-rule="evenodd" />
                        </svg>
                     </label>
                  </div>
               </div>
            </div>
         </div>
      </div>


    <div class="p-6 lg:relative text-sky-800 antialiased text-sm font-semibold sm:flex justify-center">
          
          <div class="p-6 relative mt-6 text-left ">
             
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
       <img src="https://springfourdirect.com/content/media/caticons/Transportation_Savings.png"></img>
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
       <img src="https://springfourdirect.com/content/media/caticons/Transportation_Savings.png"></img>
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
       <img src="https://springfourdirect.com/content/media/caticons/Transportation_Savings.png"></img>
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
       <img src="https://springfourdirect.com/content/media/caticons/Transportation_Savings.png"></img>
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
       <img src="https://springfourdirect.com/content/media/caticons/Transportation_Savings.png"></img>
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
       <img src="https://springfourdirect.com/content/media/caticons/Transportation_Savings.png"></img>
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
        <button type="submit" class="grid justify-items-center ... mb-5 rounded-md bg-sky-800 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-sky-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Book Now</button>
        </div>

    <footer>
    <Footer/>
    </footer>

        </div>
    )
}


export default Progdetails;