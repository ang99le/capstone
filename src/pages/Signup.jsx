import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { useState } from 'react';
import { auth, db } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { setDoc, doc } from "firebase/firestore";
import { useTranslation } from "react-i18next";
import { useNavigate } from 'react-router-dom';

function Signup() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [option, setOption] = useState('tourist');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      await setDoc(doc(db, 'Users', user.uid), {
        email: user.email,
        firstName: fname,
        lastName: lname,
        photo: "",
      });

      alert("User Registered Successfully!");

      if (option === "tourist") {
        navigate("/customizeProg");
      } else if (option === "guide") {
        navigate("/guides");
      } else {
        navigate("/events");
      }

    } catch (error) {
      console.error("Error signing up:", error);
    }
  };

  return (
    <div>
      <header>
        <nav>
          <Navbar />
        </nav>
      </header>
      <main>
        <div>
          <div className="flex min-h-full flex-col justify-center items-center w-[100%] h-[100vh] lg:h-[90vh] px-4 lg:px-8 md:mb-20 md:mt-14">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
              <h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-sky-800">
                {t("Create New Account")}
              </h2>
            </div>

            <div className="md:flex gap-[4rem] justify-center">
              <img src="https://img.freepik.com/premium-vector/first-civilization-origin-ancient-sumerian-language-writing-clay-tablets-written-cuneiform_951778-26606.jpg" className="hidden md:block w-[580px] -ml-40" alt='sumerian people' />

              <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="fname" className="block text-sm font-medium leading-6 text-sky-800">{t("First Name")}</label>
                    <div className="mt-2">
                      <input id="fname" name="fname" type="text" value={fname} onChange={(e) => setFname(e.target.value)} required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-800 sm:text-sm sm:leading-6 md:w-[300px] md:pl-2" />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="lname" className="block text-sm font-medium leading-6 text-sky-800">{t("Last Name")}</label>
                    <div className="mt-2">
                      <input id="lname" name="lname" type="text" value={lname} onChange={(e) => setLname(e.target.value)} required className=" md:pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-800 sm:text-sm sm:leading-6" />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium leading-6 text-sky-800">{t("Email address")}</label>
                    <div className="mt-2">
                      <input id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} type="email" autoComplete="email" required className=" md:pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-800 sm:text-sm sm:leading-6" />
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between">
                      <label htmlFor="password" className="block text-sm font-medium leading-6 text-sky-800">{t("Password")}</label>
                    </div>
                    <div className="mt-2">
                      <input id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} type="password" autoComplete="current-password" required className=" md:pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-800 sm:text-sm sm:leading-6" />
                    </div>
                  </div>
                  <h6 className="text-sky-800 font-medium">{t("Please Enter your type correctly")}</h6>

                  <div className="flex items-center">
                    <input id="admin" type="radio" value="admin" checked={option === "admin"} onChange={(e) => setOption(e.target.value)} name="userType" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-white dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                    <label htmlFor="admin" className="ml-2 text-sm font-medium text-sky-800 dark:text-gray-300">{t("Admin")}</label>
                  </div>

                  <div className="flex items-center">
                    <input id="guide" type="radio" value="guide" checked={option === "guide"} onChange={(e) => setOption(e.target.value)} name="userType" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-white dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                    <label htmlFor="guide" className="ml-2 text-sm font-medium text-sky-800 dark:text-gray-300">{t("Guide")}</label>
                  </div>

                  <div className="flex items-center">
                    <input id="tourist" type="radio" value="tourist" checked={option === "tourist"} onChange={(e) => setOption(e.target.value)} name="userType" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-white dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                    <label htmlFor="tourist" className="ml-2 text-sm font-medium text-sky-800 dark:text-gray-300">{t("Tourist")}</label>
                  </div>

                  <div>
                    <button type="submit" className="flex w-full justify-center rounded-md bg-sky-800 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-sky-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600">{t("SignUp")}</button>
                  </div>

                  <div className="text-sm">
                    <Link to={`/Login`}>
                      <span className="font-semibold text-sky-800 hover:text-sky-600">{t("Already have an account")}</span>
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default Signup;
