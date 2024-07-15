
import { useTranslation } from "react-i18next"
// import { useEffect} from "react";
// import cookies from "js-cookie"

function Translation(){
    // const languages={dir:"rlt"}
    const {i18n } = useTranslation();

    const changeLanguage = (lng) => {
      i18n.changeLanguage(lng);
    };
        
    // const currentLanguageCode = cookies.get('i18next') || 'en'
    // const currentLanguage = languages.find((l) => l.code === currentLanguageCode);


    // useEffect(() => {
    //     console.log('Setting page stuff')
    //     document.body.dir = currentLanguage.dir || 'ltr'
      
    //   }, [currentLanguage])

    return(

        <div>
            <button  className="text-white hover:text-gray-400" onClick={() => changeLanguage('en')}>English</button>
            <button  className="text-white hover:text-gray-400" onClick={() => changeLanguage('ar')}>العربية</button>

        </div>    


    )
}


export default Translation;