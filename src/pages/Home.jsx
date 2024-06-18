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
         
        </header>

<main>
<section>
<div className=" p-6 -mt-14 ">
<div className="hidden lg:block text-5xl text-center pt-20">
  
<h1 className="bg-gradient-to-b from-sky-800 to-white inline-block text-transparent bg-clip-text mb-6 pb-12">WELCOME TO IRAQ</h1>
</div>
<h2 className="text-sky-700 text-lg text-center -mt-11">Where Exploration Never Ends</h2>
<div className="flex justify-center gap-60">
<div className="py-40 ">
<h2 className="text-yellow-500 font-medium text-3xl">Your Guide To See The Beauty Of Iraq</h2>
  <p className="text-sky-800 pt-2">We are here to tell you the story of the first civilization in history<br/>
  read our blogs to get know more about our history then you can  <br/>
  join our tours to see the Iraq from our prespective.
  
  </p>

  <button className="bg-yellow-500 rounded-lg text-white p-2 -ml-2 m-8 "> start the journey </button>
</div>
{/* <img src="https://cdn-icons-png.flaticon.com/512/3655/3655147.png" className=" mt-3" alt="mosque"/> */}
<img src="https://cdn.britannica.com/60/187660-131-8968114D/Mayan-Calendar.jpg" className="w-[400px] h-[400px] rounded-full mt-16" alt="mosque"/>
 
</div>

</div>
<div className="bg-sky-800 h-[13rem] w-[53rem] p-6 mx-auto drop-shadow-2xl -mb-24 z-20 rounded-md mt-40">
<h1 className="text-center font-medium text-2xl text-white mb-2">Learn About Us</h1>

<p className="text-center text-white mb-5">
We are an Iraqi web application who wants to show the world how beautiful Iraq<br/>
 is and to let them explore the the history of our country and give them the chance <br/>

to visit the first civilization of Mesopotamia.we are trusted source for adventure <br/>
& experiential travel inspiration, producing original, insightful and passionate <br/>
storytelling to challenge its readers to explore Iraq</p>
</div>
<div className="bg-yellow-500 p-[8rem] mb-20">

</div>

</section>
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
  <h1 className="text-center text-sky-800 font-medium text-3xl font-primary">Iraqi Landmarks</h1>
  <hr class="w-40 h-1 mx-auto bg-sky-800 rounded mt-2"/>

<div className="flex flex-wrap justify-center gap-24 mt-10 mb-14">
  <div>
  <div class=" h-[40rem] w-80 rotate-6 rounded-2xl bg-gray-200"></div>
    <div class="-mt-[40rem] h-[40rem] w-80 space-y-6 rounded-2xl bg-gray-50 p-6 transition duration-300 rotate-0">
        <div class="flex justify-end">
            <div class="h-4 w-4 rounded-full bg-yellow-500"></div>
        </div>

        <header class="text-center text-xl font-extrabold text-gray-600">
        <h1 className="text-yellow-500 text-xl font-medium pl-3">Ishtar Gate - Babel</h1>
        <hr class="w-46 h-1 bg-yellow-500 rounded mb-2"/>
        </header>

        <div>
        <img src="https://www.asor.org/wp-content/uploads/2023/04/Gries_Fig9.jpg"  alt="Ishtar Gate" className="rounded-lg "></img>   
            {/* <p class="text-center text-5xl font-extrabold text-gray-900">Online Test (Physics)</p>
            <p class="text-center text-4xl font-extrabold text-[#FE5401]">2 hours</p> */}
        </div>

        <footer class="mb-10 flex justify-center">
        <p className="text-sky-800 text-justify ">
    The Ishtar Gate was constructed by the Babylonian King NebuchadnezzarII
    (575 BCE). It was the eighth gate of the city of Babylon and was the main
    entrance into the city.The Ishtar Gate was part of Nebuchadnezzar's plan to beautify his empire's capital and during the first half of the 6th century BCE
    </p> 
        </footer>
    </div>
    </div>



<div>
    <div class=" h-[40rem] w-80 rotate-6 rounded-2xl bg-gray-200"></div>
    <div class="-mt-[40rem] h-[40rem] w-80 space-y-6 rounded-2xl bg-gray-50 p-6 transition duration-300 rotate-0">
        <div class="flex justify-end">
            <div class="h-4 w-4 rounded-full bg-yellow-500"></div>
        </div>

        <header class="text-center text-xl font-extrabold text-gray-600">
        <h1 className="text-yellow-500 text-xl font-medium"> Ziggurat Ur - Al-Nassiryah</h1>
        <hr class="w-46 h-1 bg-yellow-500 rounded mb-2" />
        </header>

        <div>
        <img src="https://cdn.britannica.com/24/234324-050-06F7B0E3/Dhi-Qar-Iraq-2022-Ziggurat-of-Ur-Sumerian-period.jpg" className="rounded-lg" alt="Ziggurat Ur"></img>
        </div>

        <footer class="mb-10 flex justify-center">
        <p className="text-sky-800 text-justify ">
   A Ziggurat is a form of monumental architecture originating in ancient
    Mesopotamia.The ziggurat was an artificial mountain raised for the worship 
    of the gods to elevate the priests toward heaven.Ziggurat of Ur begun under
    the reign of Ur-Nammu (2047-2030 BCE) and completed under the reign of his
    son and successor Shulgi of Ur  (2029-1982 BCE).
   
    </p> 
        </footer>
    </div>
    </div>



    <div>
    <div class=" h-[40rem] w-80 rotate-6 rounded-2xl bg-gray-200"></div>
    <div class="-mt-[40rem] h-[40rem] w-80 space-y-6 rounded-2xl bg-gray-50 p-6 transition duration-300 rotate-0">
        <div class="flex justify-end">
            <div class="h-4 w-4 rounded-full bg-yellow-500"></div>
        </div>

        <header class="text-center text-xl font-extrabold text-gray-600">
        <h1 className="text-yellow-500 text-xl font-medium  pl-3"> Al-Hadir - Al-Mousel City</h1>
        <hr class="w-49 h-1 bg-yellow-500 border-0 rounded mb-2"/>
        </header>

        <div>
        <img src="https://cdn.britannica.com/96/182896-050-87DFB24C/Temple-Hatra-Iraq.jpg" className="rounded-lg" alt="Al-Hadir"></img>
        </div>

        <footer class="mb-10 flex justify-center">
        <p className="text-sky-800 text-justify ">
A large fortified city under the influence of the Parthian Empire and capita
 thanks to its high, thick walls reinforced by towers.116 and 198 The remains
of the city, especially the temples  where Hellenistic and Roman architecture
blend with Eastern decorative features,attest to the greatness of its civilization.
  </p>
        </footer>
    </div>
    </div>


    <div>
    <div class=" h-[40rem] w-80 rotate-6 rounded-2xl bg-gray-200"></div>
    <div class="-mt-[40rem] h-[40rem] w-80 space-y-6 rounded-2xl bg-gray-50 p-6 transition duration-300 rotate-0">
        <div class="flex justify-end">
            <div class="h-4 w-4 rounded-full bg-yellow-500"></div>
        </div>

        <header class="text-center text-xl font-extrabold text-gray-600">
        <h1 className="text-yellow-500 text-xl font-medium ">Al-ukhaidir Fortress - Karbalaa city</h1>
        <hr class="w-49 h-1 bg-yellow-500 mb-2 rounded"/>
        </header>

        <div>
        <img src="  https://upload.wikimedia.org/wikipedia/commons/3/3f/%D8%AD%D8%B5%D9%86_%D8%A7%D9%84%D8%A3%D8%AE%D9%8A%D8%B6%D8%B1.jpg" className="rounded-lg" alt=" Al-ukhaidir Fortress "></img>
        </div>

        <footer class="mb-10 flex justify-center">
          <p className="text-sky-800 text-justify">
        Based on architectural evidence, researchers put the date of the construction of the palace
    at between 720 and 800 CE.This 80 year period provokes a serious historical problem, since within
    this period the Umayyad dynasty gave way to the Abbasids who gained power in year 750 CE.
    These events raise questions as to whether the Palace is Umayyad or Abbasid built before 750 CE.
    </p>
        </footer>
    </div>
    </div>

    <div>
    <div class=" h-[40rem] w-80 rotate-6 rounded-2xl bg-gray-200"></div>
    <div class="-mt-[40rem] h-[40rem] w-80 space-y-6 rounded-2xl bg-gray-50 p-6 transition duration-300 rotate-0">
        <div class="flex justify-end">
            <div class="h-4 w-4 rounded-full bg-yellow-500"></div>
        </div>

        <header class="text-center text-xl font-extrabold text-gray-600">
        <h1 className="text-yellow-500 text-xl font-medium">Al-Malwiyah- - Samaraa city</h1>
        <hr class="w-49 h-1 bg-yellow-500 mb-2 rounded"/>
        </header>

        <div>
        <img src="https://imhussain.com/upload/orginal/603109aa386b7.jpg" className="rounded-lg w-[600px]" alt="Al-Malwiyah"></img>
        </div>

        <footer class="mb-10 flex justify-center">
        <p className=" text-sky-800 text-justify">
      Located on the Tigris River, it is the site of a prehistoric settlement of the 5th millennium
       BCE.The town was founded between the 3rd and 7th centuries CE. In 836,when the Abbasid
      caliph Al-Mutasim was pressured to leave Baghdad, he made Samaraa his new capital.
       He built a palace and gardens, and under his successors the town grew  until it stretched
      along the Tigris for 20 miles (32 km).
    </p>
        </footer>
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
  
  export default Home;
  