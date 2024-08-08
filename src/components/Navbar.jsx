import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Translation from "./Translation";
import { auth } from "../firebase";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Navbar() {
  
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();
  const [user, setUser] = useState(null);
  const loggedout = () => toast("Logged out Successfully!");

  
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);



  const handleLogout = async () => {
    try {
      await auth.signOut();
      window.location.href = "/login";
      loggedout();

    } catch (error) {
      console.error("Logout error: ", error);
    }
  };

  return (
    <div className="font-markazi">
      <nav className="flex items-center justify-between flex-wrap">
        <div className="relative z-50 flex items-center flex-shrink-0 mr-6 lg:mr-72"></div>
        <div className="relative z-50 block lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center px-3 py-3 rounded text-sky-800"
          >
            <svg
              className={`fill-current h-7 w-7 ${isOpen ? "hidden" : "block"}`}
              viewBox="0 0 20 20"
            >
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v" />
            </svg>
            <svg
              className={`fill-current h-7 w-7 ${isOpen ? "block" : "hidden"}`}
              viewBox="0 0 20 20"
            >
              <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
            </svg>
          </button>
        </div>

        <div className={`shadow-xl w-full block flex-grow lg:flex ${isOpen ? "block" : "hidden"}`}>
          <div className="flex flex-col text-center font-medium md:flex-grow md:flex md:justify-start md:flex-row md:text-lg bg-sky-800 pb-3 pt-3">
            <Link to="/Home" className="block mt-4 lg:inline-block lg:mt-0 text-white border-b-blue-300 px-4 hover:bg-sky-700 rounded-lg p-2 ml-3">
              <h1>{t("homepage")}</h1>
            </Link>
            <Link to="/Civilizations" className="block mt-4 lg:inline-block lg:mt-0 text-white border-b-blue-300 px-4 hover:bg-sky-700 rounded-lg p-2">
              <h1>{t("Civilizationspage")}</h1>
            </Link>
            <Link to="/Events" className="block mt-4 lg:inline-block lg:mt-0 text-white border-b-blue-300 px-4 hover:bg-sky-700 rounded-lg p-2">
              {t("Eventspage")}
            </Link>
            <Link to="/Programmes" className="block mt-4 lg:inline-block lg:mt-0 text-white border-b-blue-300 px-4 hover:bg-sky-700 rounded-lg p-2">
              {t("Programmerspage")}
            </Link>
          </div>

          <div className="flex flex-col text-center font-medium md:flex md:flex-row md:justify-end md:text-lg bg-sky-800 pb-3 pt-3">
            <div className="language-selector flex p-2 gap-4">
              <Translation />
            </div>
            {user ? (
              <>
                <button className="text-white mt-4 lg:mt-0 px-4 hover:bg-sky-700 rounded-lg p-2" onClick={handleLogout}>Logout</button>
                <ToastContainer />
              </>
            ) : (
              <>
                <Link to="/Signup" className="block mt-4 lg:inline-block lg:mt-0 text-white border-b-blue-300 px-4 hover:text-sky-600 p-2">
                  {t("Signuppage")}
                </Link>
                <Link to="/Login" className="block mt-4 lg:inline-block lg:mt-0 text-white border-b-blue-300 px-4 hover:bg-sky-700 rounded-lg p-2">
                  {t("Loginpage")}
                </Link>
              </>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
