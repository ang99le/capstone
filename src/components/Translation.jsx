import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

function Translation() {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setIsOpen(false); // Close the dropdown after selection
  };

  useEffect(() => {
    const direction = i18n.language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.dir = direction;
  }, [i18n.language]);

  return (
    <div className="mx-auto -mb-5 md:relative md:inline-block md:text-left">
      <div>
      <button type="button" className="inline-flex justify-center w-full shadow-sm rounded-full text-sm font-medium text-white hover:bg-sky-700 focus:outline-none" onClick={() => setIsOpen(!isOpen)}>
      <img src="https://th.bing.com/th/id/R.43d973ac334ab2d7976e14c11c796d27?rik=V6FStiBy7Db4xA&pid=ImgRaw&r=0" alt="globe" className=" w-[30px]"></img>
      </button>
      </div>

      {isOpen && (
        <div className="origin-top-right absolute right-40 md:right-3 md:-mt-2 md:w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            
            <button
              onClick={() => changeLanguage('en')}
              className="block px-4 py-2 text-sm text-sky-800 font-bold hover:bg-sky-50 w-full text-left"
              role="menuitem"
            >
              English
            </button>
            <button
              onClick={() => changeLanguage('ar')}
              className="block px-4 py-2 text-sm  text-sky-800 font-bold hover:bg-sky-50 w-full text-left"
              role="menuitem"
            >
              العربية
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Translation;