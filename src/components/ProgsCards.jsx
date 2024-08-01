import { Link} from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useState,useContext,useEffect } from "react";
import BookNow from "./BookNow";
import { programmesContext } from "../Context/Context";
import Loading from "./Loading";

const ProgCards= ()=>{
  const {t} = useTranslation();
  const [popUp, setPopUp] = useState(false);
  const { programmesData } = useContext(programmesContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 3300);
  }, []);

  if (loading) {
    return (
      <div className="flex w-screen justify-center items-center">
        <Loading />
      </div>
    );
  }

  return (
    <>
    
    <div className="lg:grid grid-cols-2 gap-5 ml-6 mr-6">
    {programmesData.map((card, id) => (
   <div key={id} class="flex flex-col justify-center rounded-xl">
	<div class="relative flex flex-col mb-7 md:flex-row md:space-x-5 space-y-1 md:space-y-0 rounded-xl shadow-lg p-3 max-w-xs md:max-w-3xl mx-auto border border-white bg-white">
		<div class="w-full md:w-1/3 bg-white grid place-items-center">
			<img src={card.img} alt="main place" class="rounded-xl" />
    </div>

			<div class="w-full md:w-2/3 bg-white flex flex-col space-y-2 p-3">
				<div class="flex justify-between item-center">

					<p class="text-gray-500 font-medium hidden md:block">{t("Vacations")}</p>
					<div class="flex items-center">
						<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-yellow-500" viewBox="0 0 20 20"
							fill="currentColor">
							<path
								d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
						</svg>
						<p class="text-sky-800 font-bold text-md ml-1">
						{t("{Cards.Rate}")}
			
						</p>
					</div>
				
				</div>
        <h3 className="font-black text-sky-800 md:text-3xl text-xl">{t(card.title)}</h3>
				 <p class="md:text-md text-sky-600 text-base">{t(card.description)}</p>
				 <p class="text-xl font-black text-sky-800">
			    {t(card.price)}
					<span class="font-normal text-sky-600 text-base">{t("/day")}</span>
				</p> 

        <div className="flex gap-4 pt-3">
          <Link to={`/Progdetails`}><button  className="text-white  font-medium text-sm bg-sky-800 p-2 rounded-lg hover:bg-sky-600 " type="submit">{t("Show Details")}</button></Link>
          <button type="submit" onClick={() => setPopUp(true)} class="mb-2 flex justify-center rounded-md bg-sky-800 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-sky-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">{t("Book Now")}</button>
            {popUp && <BookNow setPopUp={setPopUp} />}
                
        </div>
      
			</div>
		</div>
	</div>
        ))}
    
    
   
    </div>
    
    
    
    </>
  )

}

export default ProgCards;