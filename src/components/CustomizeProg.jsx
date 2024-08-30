import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Progsbtns from "./Progsbtns";
import Datepicker from "react-tailwindcss-datepicker";
import { useState } from "react";
import RevealOnScroll from "../components/RevealOnScroll"; 
 

function CustomizeProg (){
  const mobileNumber='7730063081';
    const [value, setValue] = useState({
    startDate: null,
    endDate: null,
  });

 
  const initiateWhatsApp = () => {
  const url = `https://wa.me/964${mobileNumber}`;
  window.open(url, '_blank').focus();
  };

    return(

<div>
<header>
          <nav>
          <Navbar/>
          </nav>
        </header>

<RevealOnScroll>
<main>
  <div className="flex justify-center mb-6">
  <h1 className="text-2xl font-medium text-sky-800 mt-9 md:text-5xl">Where To Go In </h1>
  <h1 className="text-5xl font-medium text-yellow-500 font-primary mt-9 ml-4 md:text-6xl">Iraq </h1>
  </div>

<Progsbtns/>
<div className="flex justify-center gap-11">
<img  className="sm:flex flex-col justify-center hidden lg:block lg:w-auto -ml-6" alt="Sumerian man" src="https://img.freepik.com/premium-vector/first-civilization-origin-ancient-sumerian-language-writing-clay-tablets-written-cuneiform_951778-26648.jpg"/> 

<div class="grid justify-center  md:pr-40">
<div class="p-8 mt-1 sm:mx-auto sm:w-full sm:max-w-sm">
  <form class="space-y-2" action="#" method="POST">

  <div>
      <label for="text" class="block text-sm font-medium leading-6 text-sky-800">First Name</label>
      <div class="mt-2">
        <input id="text" name="text" type="text"  required class="lg:w-[400px] w-full pl-2 block rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-800 sm:text-sm sm:leading-6"/>
      </div>
    </div>


    <div>
      <label for="text" class="pl-2 block text-sm font-medium leading-6 text-sky-800">last Name</label>
      <div class="mt-2">
        <input id="text" name="text" type="text"  required class="pl-2 block lg:w-[400px] w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-800 sm:text-sm sm:leading-6"/>
      </div>
    </div>

    <div>
      <label for="number" class="block text-sm font-medium leading-6 text-sky-800">How many People are you?</label>
      <div class="mt-2">
        <input id="number" name="number" type="number"  required class="pl-2 lg:w-[400px] block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-800 sm:text-sm sm:leading-6"/>
      </div>
    </div>

    <div>
      <label for="guides" class="block text-sm font-medium leading-6 text-sky-800 pt-3">Choose your Guide</label>
      <select className="text" name="text" type="text" autocomplete="text" required class=" pl-2 lg:w-[400px] lg:h-[40px] block w-full rounded-md border-0 py-1.5 text-gray-800 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset  focus:ring-sky-800 sm:text-sm sm:leading-6">
      <option selected>Choose your guide </option>
       <option value="al">Ali Hassan</option>
       <option value="mu">Muhanned Ahmed</option>
       <option value="om">Omer Mohammed</option>
       <option value="om">Zain Taher</option>
     </select>
      </div>

      <div>
      <label for="number" class="block text-sm font-medium leading-6 text-sky-800">Please Enter your Budget</label>
      <div class="mt-2">
        <input id="number" name="number" type="number" placeholder="100$" required class="pl-2 lg:w-[400px] block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-800 sm:text-sm sm:leading-6"/>
      </div>
    </div>
   <h5 className="font-medium text-sm text-sky-800 pt-3">Please Enter the date of your trip</h5>
      <div className="datepicker lg:w-[400px]" >
        <Datepicker
          primaryColor={"blue"}
          value={value}
          onChange={newValue => setValue(newValue)}
        />
      </div> 


    <div>
      <button type="submit" onClick={initiateWhatsApp} class="lg:w-[400px] mb-3 lg:mt-5 flex w-full justify-center rounded-md bg-sky-800 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-sky-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600">Submit
      </button>
    </div>
  
  </form>
</div>
</div>
</div>

</main>
</RevealOnScroll>

<footer>
<Footer/>
</footer>
</div> 



    )


}
  export default CustomizeProg;















