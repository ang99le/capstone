
import { useTranslation } from "react-i18next"
import { useEffect} from "react";


function Translation(){
    
    const {i18n } = useTranslation();
    const changeLanguage = (lng) => {
      i18n.changeLanguage(lng);
    };


    useEffect(() => {
        const direction = i18n.language === 'ar' ? 'rtl' : 'ltr';
        document.documentElement.dir = direction;
      }, [i18n.language]);
    
    return(

        <div>
            <button  className="text-white hover:text-gray-400" onClick={() => changeLanguage('en')}>English</button>
            <button  className="text-white hover:text-gray-400" onClick={() => changeLanguage('ar')}>العربية</button>

        </div>    


    )
}


export default Translation;