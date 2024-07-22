import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { auth } from "../firebase";
import {Tooltip} from "react-tooltip";
import { useTranslation } from "react-i18next";
import ScrollUpButton from "../components/Scrollup";
import { Link } from "react-router-dom";

function Home() {
  const {t} = useTranslation();
// const top= () => {
// window.scrollTo(0,0)
// }
  
  
  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/firebase.User
          const uid = user.uid;
          // ...
          console.log("uid", uid)
        } else {
          // User is signed out
          // ...
          console.log("user is logged out")
        }
      });
     
}, [])

    return (
      <div>
        <header>
          <nav>
          <Navbar/>
          </nav>
          {/* <div className="sm:block md:hidden  text-2xl text-center mb-3">
           <h1 className="bg-gradient-to-b from-sky-800 to-sky-200 inline-block text-transparent bg-clip-text">WELCOME TO IRAQ</h1>
          </div> */}
         
        </header>

<main className="font-markazi">
  <section className="section1">
{/* <section className="bg-[url(https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/291220131/original/1232c3f5b04bab295463f0cc1a5d39afa30ab53b/convert-the-text-you-want-to-sumerian-cuneiform-in-a-printable-pdf.png)]"> */}
{/* <div class="w-full h-full flex flex-col justify-center items-center backdrop-blur-sm"> */}
<div className=" p-6 -mt-14 ">
<div className="pt-16 text-3xl md:text-5xl text-center md:pt-20">
  {/* <img className="absolute ml-80  blur-sm w-[500px] -z-20" src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/291220131/original/1232c3f5b04bab295463f0cc1a5d39afa30ab53b/convert-the-text-you-want-to-sumerian-cuneiform-in-a-printable-pdf.png" alt="sumeria" /> */}

<h1 className="bg-gradient-to-b from-sky-800 to-white inline-block text-transparent bg-clip-text mb-6 pb-12 font-markazi">{t('Welcome')}</h1>
</div>
<h2 className="text-sky-700 -mt-16 md:text-lg text-center md:-mt-11 font-markazi">{t('slogen')}</h2>
<div className="md:flex justify-center md:gap-48">
<div className="flex flex-col md:py-40">
<img src="https://cdn.britannica.com/60/187660-131-8968114D/Mayan-Calendar.jpg" className="mb-9 mx-auto w-[300px] h-[300px] md:hidden rounded-full mt-9 shadow-full" alt="Sumerian calender"/>

<h2 className="text-center text-lg text-yellow-500 font-medium md:text-4xl md:text-left "> {t("Your Guide To See The Beauty Of Iraq")}</h2>
  <p className="text-sky-800 pt-2 text-center md:text-left">{t("homepar")}</p>
  <p className="text-sky-800 pt-2 text-center md:text-left">{t("homepar1")}</p>
<Link to={`/Programmes`}><a href="/Programmes" className=""><button className=" bg-yellow-500 hover:bg-yellow-400 rounded-lg text-white p-2 md:-ml-2 md:m-8"> {t("start the journey")} </button></a>
</Link>
 
</div>

<div>

<button id="notclickable">
<img src="https://cdn.britannica.com/60/187660-131-8968114D/Mayan-Calendar.jpg" className=" hidden md:block md:w-[460px] md:h-[460px] rounded-full mt-3 drop-shadow-2xl z-50" alt="sumerian calender"/>
{/* <img src="https://cdn.britannica.com/60/187660-131-8968114D/Mayan-Calendar.jpg" className=" hidden md:block md:w-[430px] md:h-[430px] rounded-full   ml-5 w-1/5 absolute top-1/3 right 1/4 place-items-center drop-shadow-2xl" alt="sumerian calender"/> */}
  </button>
<Tooltip anchorSelect="#notclickable">
 The First Calender In History
</Tooltip>
</div>

{/* <img src="https://cdn-icons-png.flaticon.com/512/3655/3655147.png" className=" mt-3" alt="mosque"/> */}
</div>

</div>
</section>
<section className="section2">
<div className="bg-sky-800 mt-6 md:h-[13rem] md:w-[53rem] p-6 mx-auto drop-shadow-2xl -mb-24 z-20 rounded-md md:mt-40">
<h1 className="text-center font-medium text-2xl text-white mb-2">{t("Learn About Us")}</h1>

<p className="text-center text-white">{t("homeL1")}</p>
  <p className="text-center text-white">{t("homeL2")}</p>
  <p className="text-center text-white">{t("homeL3")}</p>
<p className="text-center text-white">{t("homeL4")}</p>
<p className="text-center text-white">{t("homeL5")}</p>
</div>
<div className="bg-yellow-500 mb-40 md:p-[7rem] md:mb-16">
</div>



<ScrollUpButton/>
</section>

{/* home page in pc screen */}
<section>
<div className=" block">
  <h1 className="text-center text-sky-800 font-medium text-3xl">Iraqi Landmarks</h1>
  <hr class="w-40 h-1 mx-auto bg-sky-800 rounded mt-2"/>

<div className="flex flex-col gap-24 mt-10 mb-14 md:flex-row md:flex-wrap md:justify-center">
  <div>
  <div class="mx-auto w-72 h-[40rem] md:w-80 rotate-6 rounded-2xl bg-gray-200"></div>
    <div class="mx-auto w-72 -mt-[40rem] h-[40rem] md:w-80 space-y-6 rounded-2xl bg-gray-50 p-6 transition duration-300 rotate-0">
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
    entrance into the city.The Ishtar Gate was part of Nebuchadnezzar's plan 
    to beautify his empire's capital and during the first half of the 6th century BCE
    </p> 
        </footer>
    </div>
    </div>



<div>
    <div class="w-72 mx-auto h-[40rem] md:w-80 rotate-6 rounded-2xl bg-gray-200"></div>
    <div class="mx-auto w-72 -mt-[40rem] h-[40rem] md:w-80 space-y-6 rounded-2xl bg-gray-50 p-6 transition duration-300 rotate-0">
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
    <div class="mx-auto w-72 h-[40rem] md:w-80 rotate-6 rounded-2xl bg-gray-200"></div>
    <div class="mx-auto w-72 -mt-[40rem] h-[40rem] md:w-80 space-y-6 rounded-2xl bg-gray-50 p-6 transition duration-300 rotate-0"> <div class="flex justify-end">
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
    <div class="mx-auto w-72 h-[40rem] md:w-80 rotate-6 rounded-2xl bg-gray-200"></div>
    <div class="mx-auto w-72 -mt-[40rem] h-[40rem] md:w-80 space-y-6 rounded-2xl bg-gray-50 p-6 transition duration-300 rotate-0"><div class="flex justify-end">
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
    <div class="mx-auto w-72 h-[40rem] md:w-80 rotate-6 rounded-2xl bg-gray-200"></div>
    <div class="mx-auto w-72 -mt-[40rem] h-[40rem] md:w-80 space-y-6 rounded-2xl bg-gray-50 p-6 transition duration-300 rotate-0"> <div class="flex justify-end">
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
  </section>
</main>
<footer>
<Footer/>
</footer>
</div>
    );
  }
  
  export default Home;
  