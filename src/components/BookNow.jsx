import Navbar from "./Navbar";
import Footer from "./Footer";
function BookNow(){
    return(
        <>
      <header>
          <nav>
          <Navbar/>
          </nav>
          
        <h1 className='text-sky-900 font-bold text-center text-lg my-5'>BOOK YOUR TICKET</h1>
        </header>

    <main className="h-[100vh]">
        <h3 className="text-sky-700 font-medium mb-3 mt-5">Booking through WhatsApp</h3>
        <img className=" mx-auto w-[60px] mb-3" src="https://www.mobileworld.it/wp-content/uploads/2016/01/whatsapp-logo-final-1280x886.jpg" alt="whats logo"></img>
        <h3 className="text-sky-700 font-medium">Booking directly</h3>
         
  <form className="mt-5 mb-4">

  <div>
        <label for="text" class="block text-sm font-medium leading-6 text-sky-800"></label>
        <div class="mt-2">
          <input id="text" name="text" type="text" placeholder="Please Enter Your Name" required class=" pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-800 sm:text-sm sm:leading-6"/>
        </div>
      </div>


      <div>
        <label for="text" class="block text-sm font-medium leading-6 text-sky-800"></label>
        <div class="mt-2">
          <input id="text" name="text" type="text" placeholder="Please Enter your last Name" required class=" pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-800 sm:text-sm sm:leading-6"/>
        </div>
      </div>

      <div>
        <label for="text"></label>
        <div class="mt-2">
          <input id="text" name="text" type="text" placeholder="Please Enter your Ticket" required class=" pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-800 sm:text-sm sm:leading-6"/>
        </div>
      </div>

  
  </form>
<div>
        <button type="submit" class="flex w-full justify-center screen rounded-md bg-sky-800 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-sky-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600">Submit</button>
  
</div>

</main>
<footer>
          <Footer/>
        </footer>
        </>
    )
}

export default BookNow;