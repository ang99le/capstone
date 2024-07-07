import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {auth} from "../firebase";
import {createUserWithEmailAndPassword} from "firebase/auth";



function Signup() {

  const navigate= useNavigate();
  
  const [fname,setFname]=useState('');
  const [lname,setLname]=useState(''); 
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault()
   
    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          navigate("/login")
          // ...
      })
      .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode, errorMessage);
          // ..
      });

 
  }
 
    return (
      <div>
        <header>
          <nav>
          <Navbar/>
          </nav>
        </header>
       <main>

   <div>

<div class="flex min-h-full flex-col justify-center items-center w-[100%] h-[100vh] lg:h-[90vh] px-4 lg:px-8 md:mb-20 md:mt-14"  >
  <div class="sm:mx-auto sm:w-full sm:max-w-sm ">
    <h2 class="text-center text-2xl font-bold leading-9 tracking-tight text-sky-800">Create New Account</h2>
  </div>


<div className="md:flex gap-[4rem] justify-center">
<img src="https://img.freepik.com/premium-vector/first-civilization-origin-ancient-sumerian-language-writing-clay-tablets-written-cuneiform_951778-26606.jpg" className="w-[580px] -ml-40" alt='sumerian people' />


  <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
    <form class="space-y-6" action="#" method="POST" onSubmit={handleSubmit} >
    <div>
        <label for="text" class="block text-sm font-medium leading-6 text-sky-800">First Name</label>
        <div class="mt-2">
          <input id="text" name="text" type="text" value={fname} onChange={(e)=>setFname(e.target.value)} required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-800 sm:text-sm sm:leading-6 md:pl-48"/>
        </div>
      </div>


      <div>
        <label for="text" class="block text-sm font-medium leading-6 text-sky-800">last Name</label>
        <div class="mt-2">
          <input id="text" name="text" type="text" value={lname} onChange={(e)=>setLname(e.target.value)} required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-800 sm:text-sm sm:leading-6"/>
        </div>
      </div>

      <div>
        <label for="email" class="block text-sm font-medium leading-6 text-sky-800">Email address</label>
        <div class="mt-2">
          <input id="email" name="email"   value={email} onChange={(e) => { setEmail(e.target.value) }} type="email" autocomplete="email" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset  focus:ring-sky-800 sm:text-sm sm:leading-6"/>
        </div>
      </div>

      <div>
        <div class="flex items-center justify-between">
          <label for="password" value={password} onChange={(e) => { setPassword(e.target.value) }} class="block text-sm font-medium leading-6 text-sky-800">Password</label>
         
        </div>
        <div class="mt-2">
        <input id="password" name="password"  type="password" autocomplete="current-password" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset  focus:ring-sky-800 sm:text-sm sm:leading-6" />
        </div>
      </div>
      <h6 className="text-sky-800 font-medium">Please Enter your type correctly:</h6>
      <div class="flex items-center mb-4">
      
    <input id="default-radio-1" type="radio" value="" name="default-radio" class="w-4 h-4 -mt-4 text-white bg-gray-100 border-gray-300 focus:ring-white dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
    <label for="default-radio-1" class="ms-2 text-sm font-medium text-sky-800 dark:text-gray-300 -mt-4">Guide</label>
</div>
<div class="flex items-center">
    <input checked id="default-radio-2" type="radio" value="" name="default-radio" class="w-4 h-4 -mt-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-white dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
    <label for="default-radio-2" class="ms-2 text-sm font-medium text-sky-800 dark:text-gray-300 -mt-4">Tourest</label>
</div>

      <div>
        <button type="submit" class="flex mb-2 w-full justify-center rounded-md bg-sky-800 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-sky-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600">  SignUp{' '}</button>
      </div>

      {/* <h6 className="text-center text-gray-400 text-xs">--- or continue with google ---</h6>  */}
      {/* <Signwithgoogle/> */}
       
      <div class="text-sm">
        <Link to={`/Login`}><a href="/Login" class="font-semibold text-sky-800 hover:text-sky-600 ">Already have an account</a></Link>
      
          </div>
    </form>
   
       
    </div>
  </div>
</div>

</div>  

</main>

        <footer>
          <Footer/>
        </footer>
      </div>
    );
  }
  
  export default Signup;
  