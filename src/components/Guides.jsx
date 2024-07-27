import Navbar from "./Navbar";
import Footer from "./Footer";
import Progsbtns from "./Progsbtns";
import { useState } from "react";

function Guides(){
  const [file, setFile] = useState();
  function handleChange(e) {
      console.log(e.target.files);
      setFile(URL.createObjectURL(e.target.files[0]));
  }


    return(
        <div>
<nav> 
    <Navbar/>
</nav>
<main>
<div className="flex justify-center mb-6">
  <h1 className="text-2xl font-medium text-sky-800 mt-9 md:text-5xl">Where To Go In </h1>
  <h1 className="text-5xl font-medium text-yellow-500 font-primary mt-9 ml-4 md:text-6xl">Iraq </h1>
  </div>

<Progsbtns/>
<div className="flex justify-center gap-8">
<img  className="sm:flex flex-col justify-center hidden md:block md:w-[500px] -ml-6" alt="Sarjon" src="https://img.freepik.com/premium-vector/first-civilization-origin-ancient-sumerian-language-writing-clay-tablets-written-cuneiform_951778-26648.jpg"/> 

<div class="grid justify-center md:pr-40">
<div class="p-8 mt-1 sm:mx-auto sm:w-full sm:max-w-sm md:mt-9">
  <form class="space-y-2" action="#" method="POST">

  <div>
      <label for="text" class="w-[250px] block text-sm font-medium leading-6 text-sky-800">First Name</label>
      <div class="mt-2">
        <input id="text" name="text" type="text"  required class="pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-800 sm:text-sm sm:leading-6"/>
      </div>
    </div>


    <div>
      <label for="text" class="pl-2 block text-sm font-medium leading-6 text-sky-800">last Name</label>
      <div class="mt-2">
        <input id="text" name="text" type="text"  required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-800 sm:text-sm sm:leading-6"/>
      </div>
    </div>

    <div>
      <label for="text" class="block text-sm font-medium leading-6 text-sky-800">The Name of The Tour</label>
      <div class="mt-2">
        <input id="text" name="number" type="number"  required class="pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-800 sm:text-sm sm:leading-6"/>
      </div>
    </div>

    <div>
      <label for="number" class="block text-sm font-medium leading-6 text-sky-800">please add the price </label>
      <div class="mt-2">
        <input id="number" name="number" type="number"  required class="pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-800 sm:text-sm sm:leading-6"/>
      </div>
    </div>

    <h2 className="text-sky-800 text-sm font-medium">please add an image:</h2>
            <input type="file" onChange={handleChange} className="bg-white text-sky-800 text-sm" />
            <img src={file} alt="place" className="rounded-xl w-[300px]"/>

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

export default Guides;