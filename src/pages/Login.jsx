import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link} from "react-router-dom";
import { useState } from 'react';
import { auth } from '../firebase';
import { signInWithEmailAndPassword } from "firebase/auth";
import { useTranslation } from "react-i18next";
import Signwithgoogle from "../components/Signwithgoogle";
import { useAuth } from "../Context/Context";
import { useNavigate,Navigate} from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Login() {
  const { t } = useTranslation();
  const navigate=useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { currentUser } = useAuth();
  const notify = () => toast("Logged in Successfully!")

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("User logged in Successfully");
      navigate("/home");

      

    } 
    catch (error) {
      console.log(error.message);
    }
  };

  if (currentUser) {
    return <Navigate to="/home" />;
  }

  return (
    <div className="App">
      <nav>
        <Navbar />
      </nav>
      <main >   
        <div className="flex min-h-full flex-col justify-center items-center w-[100%] h-[100vh] px-4 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-sky-800">
              {t("Log in to your account")}
            </h2>
          </div>
          <div className="flex gap-[4rem]">
            <img src="https://img.freepik.com/premium-vector/first-civilization-origin-ancient-sumerian-language-writing-clay-tablets-written-cuneiform_951778-26673.jpg" className="hidden md:block w-[580px] -ml-28" alt="sumerian people"/>
            <div className="mt-10 mb-24 md:mt-40 sm:mx-auto sm:w-full sm:max-w-sm">
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium leading-6 text-sky-800">
                    {t("Email address")}
                  </label>
                  <div className="mt-2">
                    <input id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} type="email" autoComplete="email" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 md:pl-48"/>
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between">
                    <label htmlFor="password" className="block text-sm font-medium leading-6 text-sky-800">
                      {t("Password")}
                    </label>
                  </div>
                  <div className="mt-2">
                    <input id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} type="password" autoComplete="current-password" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                  </div>
                </div>
                <div>
                  <button type="submit" onClick={notify} className="flex w-full justify-center rounded-md bg-sky-800 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-sky-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                    {t("Sign in")}
                  </button>
                  <ToastContainer/>

                </div>
                <Signwithgoogle/>
                <div className="text-sm">
                  <Link to="/SignUp">
                    <a href="/SignUp" className="font-semibold text-sky-800 hover:text-sky-600">
                      {t("Don't have an account")}
                    </a>
                  </Link>
                </div>
              </form>
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

export default Login;
