import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link, useNavigate } from "react-router-dom";
import { useState } from 'react';
import { auth, db } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { setDoc, doc, serverTimestamp } from "firebase/firestore"; // Correct Firebase imports
import { useTranslation } from "react-i18next";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import RevealOnScroll from "../components/RevealOnScroll";

function Signup() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const notify = () => toast.info("User Registered Successfully🥳!");
  const notifyError = () => toast.error("User Registered failed☹️");

  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [option, setOption] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Create user with email and password
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Save user information to Firestore
      await setDoc(doc(db, "users", user.uid), {
        uid: user.uid,
        email: user.email,
        firstName: fname,
        lastName: lname,
        role: option,
        createdAt: serverTimestamp(),
      });

      notify(); // Show success notification

      // Redirect based on selected role (Uncomment to enable)
      if (option === "tourist") {
        navigate("/customizeProg");
      } else if (option === "guide") {
        navigate("/guides");
      } else {
        navigate("/events");
      }

    } catch (error) {
      console.error("Error signing up:", error);
      notifyError(); // Show error notification
    }
  };
  return (
    <div>
      <header>
        <nav>
          <Navbar />
        </nav>
      </header>
      <RevealOnScroll>
      <main>
        <div>
          <div className="flex min-h-full flex-col justify-center items-center w-[100%] h-[100vh] lg:h-[90vh]  mt-10 mb-10 px-4 lg:px-8 lg:mb-20 lg:mt-14">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
              <h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-sky-800">
                {t("Create New Account")}
              </h2>
            </div>

            <div className="md:flex gap-[4rem] justify-center">
              <img src="https://img.freepik.com/premium-vector/first-civilization-origin-ancient-sumerian-language-writing-clay-tablets-written-cuneiform_951778-26606.jpg" className="hidden lg:block w-[580px] -ml-40" alt='sumerian people' />

              <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="fname" className="block text-sm font-medium leading-6 text-sky-800">{t("First Name")}</label>
                    <div className="mt-2">
                      <input id="fname" name="fname" type="text" value={fname} onChange={(e) => setFname(e.target.value)} required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-800 sm:text-sm sm:leading-6 md:w-[420px] lg:w-[300px] md:pl-2" />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="lname" className="block text-sm font-medium leading-6 text-sky-800">{t("Last Name")}</label>
                    <div className="mt-2">
                      <input id="lname" name="lname" type="text" value={lname} onChange={(e) => setLname(e.target.value)} required className=" md:pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-800 sm:text-sm sm:leading-6 md:w-[420px] lg:w-[300px]"/>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium leading-6 text-sky-800">{t("Email address")}</label>
                    <div className="mt-2">
                      <input id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} type="email" autoComplete="email" required className=" md:pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-800 sm:text-sm sm:leading-6 md:w-[420px] lg:w-[300px]" />
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between">
                      <label htmlFor="password" className="block text-sm font-medium leading-6 text-sky-800">{t("Password")}</label>
                    </div>
                    <div className="mt-2">
                      <input id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} type="password" autoComplete="current-password" required className=" md:pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-800 sm:text-sm sm:leading-6 md:w-[420px] lg:w-[300px]" />
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
                    <button type="submit" onClick={notify} className="flex w-full justify-center rounded-md bg-sky-800 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-sky-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600">{t("SignUp")}</button>
                    <ToastContainer />
                  </div>

                  <div className="text-sm">
                    <Link to="/Login">
                      <span className="font-semibold text-sky-800 hover:text-sky-600">{t("Already have an account")}</span>
                    </Link>
                  </div>
                </form>

              </div>
            </div>
          </div>
        </div>
      </main>
      </RevealOnScroll>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default Signup;
