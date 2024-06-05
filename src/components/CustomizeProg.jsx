import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import sarjon from "../assests/sarjon.png";
import { Link} from "react-router-dom";

function CustomizeProg (){
  
    return(

<div className="">
<header>
          <nav>
          <Navbar/>
          </nav>
        </header>


<main>
<h1 className=" flex justify-center text-2xl pb-3 font-medium text-sky-800">Where To Go In Iraq </h1>
<div className="grid justify-center sm:flex sm:justify-center gap-3 mt-3;">
  <Link to={`/Programmes`}><button type="submit" class=" mt-4 mb-2 flex justify-center rounded-md bg-sky-800 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-sky-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" >Our Programmes </button></Link>
  <Link to={`/CustomizeProg`}><button type="submit" class="sm:mt-4 mb-2 flex justify-center rounded-md bg-sky-800 px-5 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-sky-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" >Customize your Programme</button>
</Link>  
        </div>
<div className="flex justify-center">
<img  className="sm:flex flex-col justify-center hidden md:block" alt="Sarjon" src={sarjon}></img> 

 <div class="grid justify-center md:pt-12 md:pr-40">
<div class="p-8 mt-1 sm:mx-auto sm:w-full sm:max-w-sm">
  <form class="space-y-2" action="#" method="POST">

  <div>
      <label for="text" class="block text-sm font-medium leading-6 text-sky-800">First Name</label>
      <div class="mt-2">
        <input id="text" name="text" type="text"  required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-800 sm:text-sm sm:leading-6"/>
      </div>
    </div>


    <div>
      <label for="text" class="block text-sm font-medium leading-6 text-sky-800">last Name</label>
      <div class="mt-2">
        <input id="text" name="text" type="text"  required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-800 sm:text-sm sm:leading-6"/>
      </div>
    </div>

    <div>
      <label for="guides" class="block text-sm font-medium leading-6 text-sky-800 pt-3">Choose your Guide</label>
     
      <select className="email" name="email" type="email" autocomplete="email" required class="block w-full rounded-md border-0 py-1.5 text-gray-800 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset  focus:ring-sky-800 sm:text-sm sm:leading-6">
      <option selected>Choose your guide </option>
       <option value="al">Ali Hassan</option>
       <option value="mu">Muhanned Ahmed</option>
       <option value="om">Omer Mohammed</option>
       <option value="om">Zain Taher</option>
     </select>
      
      </div>
   <h5 className="font-medium text-sm text-sky-800 pt-3">Please Enter the date of your trip</h5>
  <div date-rangepicker datepicker-autoselect-today class="flex items-center pb-3">
  <div class="relative">
 <div class="absolute inset-y-0 start-0 flex items-center ps-2 pointer-events-none">
      <img className="w-[30px]" src="https://anatomisebiostats.com/wp-content/uploads/2020/09/statistical-retainer-for-clinical-trials-300x300.png" alt="date logo"></img>
    </div>
    
    <input name="start" type="text" class=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Select date start"/>
  </div>
  <span class="mx-4 font-medium text-sky-800">to</span>
  <div class="relative">
    <div class="absolute inset-y-0 start-0 flex items-center ps-2 pointer-events-none">
      <img className="w-[30px]" src="https://anatomisebiostats.com/wp-content/uploads/2020/09/statistical-retainer-for-clinical-trials-300x300.png" alt="date"></img>
    </div>
    <input name="end" type="text" class=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Select date end"/>
</div>
</div>
   
    <div>
      <button type="submit" class="mb-3 flex w-full justify-center rounded-md bg-sky-800 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-sky-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600">Submit</button>
    </div>
  
  </form>
</div>
</div>
</div>

</main>

<footer>
          <Footer/>
        </footer>
</div> 



    )


}
  export default CustomizeProg;















