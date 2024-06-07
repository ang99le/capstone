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
           <h1 className="bg-gradient-to-b from-sky-800 to-sky-200 inline-block text-transparent bg-clip-text mb-6">WELCOME TO IRAQ</h1>
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
<div className="hidden sm:block">
<div className="flex justify-center gap-9 mb-20 mt-7">    
    <div className="flex flex-col py-28">
     <h1 className="text-yellow-500 text-xl font-medium pl-3">Ishtar Gate - Babel</h1>
     <hr class="w-46 h-1 bg-yellow-500 rounded mb-2"/>
      
    <p className="text-sky-800 text-justify pl-3 ">
    The Ishtar Gate was constructed by the Babylonian King NebuchadnezzarII<br/>
    (575 BCE). It was the eighth gate of the city of Babylon and was the main <br/>
    entrance into the city.The Ishtar Gate was part of Nebuchadnezzar's plan to<br/> beautify his empire's capital and during the first half of the 6th century BCE
    </p> 

    </div>
    <img src="https://www.asor.org/wp-content/uploads/2023/04/Gries_Fig9.jpg"  alt="Ishtar Gate" className="w-[600px] ml-16 rounded-lg "></img>

  </div>

  <div className="flex justify-center gap-20">
   
    <img src="https://cdn.britannica.com/24/234324-050-06F7B0E3/Dhi-Qar-Iraq-2022-Ziggurat-of-Ur-Sumerian-period.jpg" className="w-[600px] rounded-lg -ml-6" alt="Ziggurat Ur"></img>
    <div className="flex flex-col -ml-9 py-28">
   
    <h1 className="text-yellow-500 text-xl font-medium"> Ziggurat Ur - Al-Nassiryah</h1>
    <hr class="w-46 h-1 bg-yellow-500 rounded mb-2" />

   <p className="text-sky-800 text-justify ">
   A Ziggurat is a form of monumental architecture originating in ancient  <br/>
    Mesopotamia.The ziggurat was an artificial mountain raised for the worship <br/> 
    of the gods to elevate the priests toward heaven.Ziggurat of Ur begun under<br/>
    the reign of Ur-Nammu (2047-2030 BCE) and completed under the reign of his<br/>
    son and successor Shulgi of Ur  (2029-1982 BCE). <br/>
   
    </p> 
    </div>
  </div>
 
 
  <div className="flex justify-center mt-20 gap-20">
<div className="flex-col flex py-28">
<h1 className="text-yellow-500 text-xl font-medium  pl-3"> Al-Hadir - Al-Mousel City</h1>
<hr class="w-49 h-1 bg-yellow-500 border-0 rounded mb-2"/>
<p className="text-sky-800 text-justify pl-3">
A large fortified city under the influence of the Parthian Empire and capital <br/>
 of the first Arab Kingdom, Hatra withstood invasions by the Romans in A.D.                      <br/>
 thanks to its high, thick walls reinforced by towers.116 and 198 The remains <br/>
of the city, especially the temples  where Hellenistic and Roman architecture  <br/>
blend with Eastern decorative features,attest to the greatness of its civilization. <br/>
  </p>
  </div>
  <img src="https://cdn.britannica.com/96/182896-050-87DFB24C/Temple-Hatra-Iraq.jpg" className="w-[600px] rounded-lg ml-11" alt="Al-Hadir"></img>

  
  </div>
  
  <div className="flex justify-center gap-9 mt-20 mb-7">
    <img src="https://imhussain.com/upload/orginal/603109aa386b7.jpg" className="rounded-lg w-[600px]" alt="Al-Malwiyah"></img>
    <div className=" flex flex-col py-28">
      <h1 className="text-yellow-500 text-xl font-medium pl-9">Al-Malwiyah- - Samaraa city</h1>
      <hr class="w-49 h-1 bg-yellow-500 mb-2 rounded"/>
    <p className=" text-sky-800 text-justify pl-3">
      Located on the Tigris River, it is the site of a prehistoric settlement of the 5th millennium<br/>
       BCE.The town was founded between the 3rd and 7th centuries CE. In 836,when the Abbasid<br/>
      caliph Al-Mutasim was pressured to leave Baghdad, he made Samaraa his new capital.<br/>
       He built a palace and gardens, and under his successors the town grew  until it stretched<br/>
      along the Tigris for 20 miles (32 km).In 892 the caliph Al-Mutamid transferred  the capital<br/>
      back to Baghdad,causing the subsequent decline of samaraa. By 1300 most of the town was <br/>
      in ruins it has since revived
    </p>
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
  
  export default Home;
  