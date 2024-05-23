import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
function Signup() {
    return (
      <div className="App">
        <header>
          <nav>
          <Navbar/>
          </nav>
        </header>
       <main>
       <main>
<div class="flex min-h-full flex-col justify-center items-center w-[100%] h-[81vh] lg:h-[79vh] px-4  lg:px-8"  >

  <div class="sm:mx-auto sm:w-full sm:max-w-sm ">
    <h2 class="text-center text-2xl font-bold leading-9 tracking-tight text-sky-800">Create New Account</h2>
  </div>

  <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
    <form class="space-y-6" action="#" method="POST">

    <div>
        <label for="email" class="block text-sm font-medium leading-6 text-sky-800">First Name</label>
        <div class="mt-2">
          <input id="text" name="text" type="text"  required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-800 sm:text-sm sm:leading-6"/>
        </div>
      </div>


      <div>
        <label for="email" class="block text-sm font-medium leading-6 text-sky-800">last Name</label>
        <div class="mt-2">
          <input id="text" name="text" type="text"  required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-800 sm:text-sm sm:leading-6"/>
        </div>
      </div>




      <div>
        <label for="email" class="block text-sm font-medium leading-6 text-sky-800">Email address</label>
        <div class="mt-2">
          <input id="email" name="email" type="email" autocomplete="email" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset  focus:ring-sky-800 sm:text-sm sm:leading-6"/>
        </div>
      </div>

      <div>
        <div class="flex items-center justify-between">
          <label for="password" class="block text-sm font-medium leading-6 text-sky-800">Password</label>
         
        </div>
        <div class="mt-2">
        <input id="password" name="password" type="password" autocomplete="current-password" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset  focus:ring-sky-800 sm:text-sm sm:leading-6" />
        </div>
      </div>

      <div>
        <button type="submit" class="flex w-full justify-center rounded-md bg-sky-800 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-sky-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600">Sign in</button>
      </div>
      <div class="text-sm">
            <a href="/Login" class="font-semibold text-sky-800 hover:text-sky-600">Already have an account</a>
          </div>
    </form>
  </div>
</div>
</main>

       </main>




        <footer>
          <Footer/>
        </footer>
      </div>
    );
  }
  
  export default Signup;
  