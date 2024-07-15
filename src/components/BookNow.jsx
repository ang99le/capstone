import Navbar from "./Navbar";
import Footer from "./Footer";
import { useTranslation } from "react-i18next";

function BookNow(){
  const {t} = useTranslation();
    return(
        <>
      <header>
          <nav>
          <Navbar/>
          </nav>
        </header>

    <main className="h-[100vh] p-6  bg-[url(https://img.freepik.com/premium-vector/mesopotamian-goddess-assyrian-culture-gilgamesh-legends_951778-25205.jpg)]">
    <div className="bg-amber-100 opacity-95 w-[600px] mt-20  p-12 rounded-md mx-auto">

  
    <h1 className='text-amber-600 font-bold text-center text-lg my-5'>{t("BOOK YOUR TICKET")}</h1>
        <h3 className="text-amber-500 font-medium mb-3 mt-5 text-center">{t("Booking through WhatsApp")}</h3>
        <img className=" mx-auto w-[60px] mb-3" src="https://th.bing.com/th/id/R.18ba0e411b1586feb65e97d7deb45b5d?rik=OCbvCEPQbXn47g&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fwhatsapp-png-whatsapp-logo-png-1000.png&ehk=7BIVvksu2ccZPkUkoiU9T8Gx7a6xEIJ61o%2fGGN12nNM%3d&risl=&pid=ImgRaw&r=0" alt="whats logo"></img>
        <h3 className="text-amber-500 font-medium text-center">{t("Booking directly")}</h3>
         
  <form className="mt-5 mb-4 grid justify-center ">

  <div>
        <label for="text" class="block text-sm font-medium leading-6 text-sky-800"></label>
        <div class="mt-2">
          <input id="text" name="text" type="text" placeholder="Please Enter Your Name" required class="w-[500px] pl-2 block rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-amber-600 focus:ring-2 focus:ring-inset focus:ring-sky-800 sm:text-sm sm:leading-6 bg-amber-50"/>
        </div>
      </div>


      <div>
        <label for="text" class="block text-sm font-medium leading-6 text-sky-800"></label>
        <div class="mt-2">
          <input id="text" name="text" type="text" placeholder="Please Enter your last Name" required class=" pl-2 block w-[500px] rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-amber-600 focus:ring-2 focus:ring-inset focus:ring-sky-800 sm:text-sm sm:leading-6 bg-amber-50"/>
        </div>
      </div>

      <div>
        <label for="text"></label>
        <div class="mt-2">
          <input id="text" name="text" type="text" placeholder="Please Enter your Ticket" required class=" pl-2 w-[500px] block rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-amber-600 focus:ring-2 focus:ring-inset focus:ring-sky-800 sm:text-sm sm:leading-6 bg-amber-50"/>
        </div>
      </div>

  
  </form>
<div className="flex justify-center">
        <button type="submit" class="w-[150px]  screen rounded-md bg-yellow-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-yellow-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600">{t("Submit")}</button>
  
</div>
</div>
</main>
<footer>
          <Footer/>
        </footer>
        </>
    )
}

export default BookNow;