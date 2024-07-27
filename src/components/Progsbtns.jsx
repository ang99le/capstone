
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function Progsbtns(){
    const {t} = useTranslation();
    return(
        <>
    <div className="grid justify-center sm:flex sm:justify-center gap-3 mt-3 mb-3">


<Link to={`/Programmes`}><button type="submit" class="mt-4 mb-2 flex justify-center rounded-md bg-sky-800 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-sky-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" >{t("Our Programmes")}</button></Link>
   
   <Link to={`/CustomizeProg`}><button type="submit" class="sm:mt-4 mb-2 flex justify-center rounded-md bg-sky-800 px-5 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-sky-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" >{t("Customize Your Programme")}</button></Link>

    <Link to={`/Guides`}><button type="submit" class="sm:mt-4 mb-2 flex justify-center rounded-md bg-sky-800 px-5 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-sky-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" >{t("Guides")}</button></Link>


   </div>

        </>
    )
}

export default Progsbtns;