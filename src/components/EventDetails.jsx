import { useTranslation } from "react-i18next";

function EventDetails ({setBooking}){
  const {t} = useTranslation();
return(
    <div className='w-screen h-screen bg-black bg-opacity-30 fixed top-0 right-0 flex justify-center items-center'>

      <div className='bg-white w-[400px] h-[570px] p-10 rounded-md shadow-md'>
    
      <div class="grid place-items-left">
      <button onClick={()=>setBooking(false)}><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF6eqIKPjVO3smnMpCieL6fiPOAbabJsgZgw&s" alt="exit" className="absloute  w-[20px]"></img></button>
      </div>

        <h1 className=' text-sky-900 font-bold text-center text-lg my-5'>{t("BOOK YOUR TICKET")}</h1>
        <p className="text-sky-800 flex gap-2 mb-2 justify-center">
          <img  className="w-[25px]" src="https://cdn-icons-png.freepik.com/512/821/821285.png" alt="Golden Ticket" ></img>
         {t("Golden Ticket")}</p>
          <p className="text-sky-800 flex gap-4 mb-2 justify-center">
          <img className="w-[25px] " src="https://cdn-icons-png.freepik.com/512/821/821285.png" alt="Silver Ticket"></img> {t("Silver Ticket")} </p>
          <p className="text-sky-800 flex gap-2 mb-2 justify-center">
          <img className="w-[25px]" src="https://cdn-icons-png.freepik.com/512/821/821285.png" alt="Bronze Ticket"></img>{t("Bronze Ticket")}</p>

        
        <h3 className="text-sky-700 font-medium mb-3 mt-5">{t("Booking through WhatsApp")}</h3>
        <img className="mx-auto w-[60px] mb-3" src="https://www.mobileworld.it/wp-content/uploads/2016/01/whatsapp-logo-final-1280x886.jpg" alt="whats logo"></img>
        <h3 className="text-sky-700 font-medium">{t("Booking directly")}</h3>
          {/* form responsivity */}
          {/* <div class="flex min-h-full flex-col justify-center items-center w-[100%] h-[81vh] lg:h-[79vh] px-4  lg:px-8"  ></div> */}
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

        <button type="submit" class="flex w-full justify-center screen rounded-md bg-sky-800 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-sky-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600">{t("Submit")}</button>
  
</div>

</div>




    )
}


export default EventDetails;