import { useTranslation } from "react-i18next";
import WhatsAppbyFields from "./WhatsappbyFields";
import WhatsApp from "./Whatsapp";

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

        
        <h3 className="text-sky-700 font-medium mb-3">{t("Booking through WhatsApp")}</h3>
        <div className="flex justify-center">
        <WhatsApp/>
        </div>
        <h3 className="text-sky-700 font-medium">{t("Booking directly")}</h3>
         
         <WhatsAppbyFields/>
       
  
</div>

</div>




    )
}


export default EventDetails;