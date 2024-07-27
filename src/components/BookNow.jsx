import { useTranslation } from "react-i18next";
import WhatsApp from '../components/Whatsapp';
import WhatsAppbyFields from "./WhatsappbyFields";

function BookNow({setPopUp}){
  const {t} = useTranslation();
    return(
        <>
  
    <main className='w-screen h-screen z-60 bg-black bg-opacity-70 fixed top-0 right-0 flex justify-center items-center'>
    <div className='bg-white w-[400px] h-[570px] p-10 rounded-md shadow-md' >
    <div class="grid place-items-left">
      <button onClick={()=>setPopUp(false)}><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF6eqIKPjVO3smnMpCieL6fiPOAbabJsgZgw&s" alt="exit" className="absloute  w-[20px]"></img></button>
      </div>
  <h1 className="text-center font-medium text-sky-800 mt-7 text-xl">Booking Your Trip</h1>
    <h3 className="text-sky-700 font-medium mb-3 mt-12 text-center">{t("Booking through WhatsApp")}</h3>
        <div className="flex justify-center">
        <WhatsApp/>
        </div>
        <h3 className="text-sky-700 font-medium text-center">{t("Booking directly")}</h3>
    
         <WhatsAppbyFields/>
</div>
</main>

        </>
    )
}

export default BookNow;