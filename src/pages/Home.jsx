import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
function Home() {
    return (
      <div>
        <header>
          <nav>
          <Navbar/>
          </nav>
          <div className="sm:block Lg:hidden xl:hidden 2xl:hidden text-2xl text-center mb-3">
           <h1 className="bg-gradient-to-b from-sky-800 to-sky-200 inline-block text-transparent bg-clip-text">WELCOME TO IRAQ</h1>
          </div>
          <div className="hidden lg:block text-5xl text-center">
           <h1 className="bg-gradient-to-b from-sky-800 to-sky-200 inline-block text-transparent bg-clip-text">WELCOME TO IRAQ</h1>
          </div>
        </header>

<main>
{/* home page in mobile and tablet screen  */}
<div  className="sm:block lg:hidden">
  <div> 
    <img src="https://www.asor.org/wp-content/uploads/2023/04/Gries_Fig9.jpg" alt="Ishtar Gate"></img>
    <p className="text-white text-left text-sm absolute bottom-50 -translate-y-12 left-0 right-0 px-4 py-1 bg-sky-800 opacity-55">
      Ishtar Gate - Babylon city <br/>
       Built about 575 BC
    </p>
  </div>
  <div>
    <img src="https://cdn.britannica.com/24/234324-050-06F7B0E3/Dhi-Qar-Iraq-2022-Ziggurat-of-Ur-Sumerian-period.jpg" alt=" Ziggurat Ur"></img>
    <p className="text-white text-left text-sm absolute bottom-50 -translate-y-12  left-0 right-0 px-4 py-1 bg-sky-800 opacity-55">
      Ziggurat Ur - Nasiriyah city <br/>
       Built about 575 BC
    </p>
  </div>
  <div>
   
   <img src="  https://upload.wikimedia.org/wikipedia/commons/3/3f/%D8%AD%D8%B5%D9%86_%D8%A7%D9%84%D8%A3%D8%AE%D9%8A%D8%B6%D8%B1.jpg" alt=" Al-ukhaidir Fortress "></img>
   <p className="text-white text-left text-sm absolute bottom-50 -translate-y-12  left-0 right-0 px-4 py-1 bg-sky-800 opacity-55">
      Al-ukhaidir Fortress - Karbalaa city <br/>
       Built about 575 BC
    </p>
  </div>
 
  <div>
    <img src="https://cdn.britannica.com/96/182896-050-87DFB24C/Temple-Hatra-Iraq.jpg" alt=" Al-Hadir"></img>
    <p className="text-white text-left text-sm absolute bottom-50 -translate-y-12  left-0 right-0 px-4 py-1 bg-sky-800 opacity-55">
      Al-Hadir - Mousel city <br/>
       Built about 575 BC
    </p>
  </div>
  
  <div>
    <img src="  https://imhussain.com/upload/orginal/603109aa386b7.jpg"alt=" Al-Malwiyah" ></img>
    <p className="text-white text-left text-sm absolute bottom-50 -translate-y-12  left-0 right-0 px-4 py-1 bg-sky-800 opacity-55">
      Al-Malwiyah - Samaraa city <br/>
       Built about 575 BC
    </p>
  </div>
</div>

{/* home page in pc screen */}
<div className="sm:hidden lg:block">
  
<div>
    <img src="https://www.asor.org/wp-content/uploads/2023/04/Gries_Fig9.jpg" alt="Ishtar Gate"></img>
    <p className="text-white text-left text-sm absolute bottom-50 -translate-y-12 left-0 right-0 px-4 py-1 bg-sky-800 opacity-55">
      Ishtar Gate - Babylon city <br/>
       Built about 575 BC
    </p>
  </div>
  <div>
    <img src="https://cdn.britannica.com/24/234324-050-06F7B0E3/Dhi-Qar-Iraq-2022-Ziggurat-of-Ur-Sumerian-period.jpg" alt="Ziggurat Ur"></img>
    <p className="text-white text-left text-sm absolute bottom-50 -translate-y-12  left-0 right-0 px-4 py-1 bg-sky-800 opacity-55">
      Ziggurat Ur - Nasiriyah city <br/>
       Built about 575 BC
    </p>
  </div>
 
 
  <div>
    <img src="https://cdn.britannica.com/96/182896-050-87DFB24C/Temple-Hatra-Iraq.jpg" alt="Al-Hadir"></img>
    <p className="text-white text-left text-sm absolute bottom-50 -translate-y-12  left-0 right-0 px-4 py-1 bg-sky-800 opacity-55">
      Al-Hadir - Mousel city <br/>
       Built about 575 BC
    </p>
  </div>
  
  <div>
    <img src="  https://imhussain.com/upload/orginal/603109aa386b7.jpg" alt="Al-Malwiyah"></img>
    <p className="text-white text-left text-sm absolute bottom-50 -translate-y-12  left-0 right-0 px-4 py-1 bg-sky-800 opacity-55">
      Al-Malwiyah - Samaraa city <br/>
       Built about 575 BC
    </p>
  </div>
  </div>
</main>
<footer>
<Footer/>
</footer>
</div>
    );
  }
  
  export default Home;
  