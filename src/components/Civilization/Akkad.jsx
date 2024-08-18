import Navbar from "../Navbar";
import Footer from "../Footer";
import ScrollUpButton from "../Scrollup";

const Akkad = () => {
  return (
    <div>
      <header>
        <nav>
          <Navbar />
        </nav>
      </header>
      <main className="w-full flex flex-col justify-center">
        <ScrollUpButton />
        <div className="flex flex-col md:flex-row gap-10 justify-center bg-sky-800 pb-48">
          <p className="font-medium text-white text-3xl md:text-5xl mt-20 text-center">
            Welcome To The <br /> Akkadian Civilization
          </p>
        </div>

        {/* The kings of Akkad */}
        <section>
          <div className="flex gap-3 -mt-40 z-50 ml-5 sm:ml-12 lg:ml-28">
            <h1 className="font-primary text-5xl opacity-1 text-yellow-500 font-medium">01</h1>
            <hr className="w-16 md:w-20 my-6 border-yellow-500 border-1 -ml-16 md:-ml-20" />
            <h1 className="text-center text-xl font-medium text-yellow-500 mb-5 mt-2 md:mt-2">The kings of Akkad</h1>
          </div>

          <div className="flex flex-col gap-4 md:flex-row justify-center m-3 md:gap-9 z-50">
            <div className="overflow-hidden cursor-pointer relative group w-full md:w-[400px] md:h-[360px] rounded-2xl">
              <div className="rounded-xl z-50 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute from-black/80 to-transparent bg-gradient-to-t inset-x-0 -bottom-2 pt-40 text-white flex">
                <div>
                  <div className="p-4 space-y-3 text-xl group-hover:opacity-100 group-hover:translate-y-0 pb-10 transform transition duration-300 ease-in-out">
                    <div className="font-bold">Sargon The Greatest</div>
                    <div className="opacity-60 text-sm text-justify">
                      Lorem ipsum dolor sit amet, consectetur adipisicing<br />
                      elit. Distinctio dolores error iure, perferendis<br />
                      sequi totam. Ad aliquam aperiam atque deleniti dolor<br />
                      dolorem enim esse et in, inventore itaque, pariatur<br />
                      reprehenderit.
                    </div>
                  </div>
                </div>
              </div>
              <img
                alt="Sargon The Greatest"
                className="w-full md:w-[400px] md:h-[360px] rounded-2xl aspect-square group-hover:scale-110 transition duration-300 ease-in-out"
                src="https://i.natgeofe.com/n/dbd06730-0ee5-4d92-8d68-255bb58beead/sargon-akkad.jpg"
              />
            </div>

            <div className="overflow-hidden cursor-pointer relative group w-full md:w-[400px] md:h-[360px] rounded-2xl">
              <div className="rounded-xl z-50 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute from-black/80 to-transparent bg-gradient-to-t inset-x-0 -bottom-2 pt-40 text-white flex">
                <div>
                  <div className="p-4 space-y-3 text-xl group-hover:opacity-100 group-hover:translate-y-0 pb-10 transform transition duration-300 ease-in-out">
                    <div className="font-bold">Rimush</div>
                    <div className="opacity-60 text-sm text-justify">
                      Lorem ipsum dolor sit amet, consectetur adipisicing<br />
                      elit. Distinctio dolores error iure, perferendis<br />
                      sequi totam. Ad aliquam aperiam atque deleniti dolor<br />
                      dolorem enim esse et in, inventore itaque, pariatur<br />
                      reprehenderit.
                    </div>
                  </div>
                </div>
              </div>
              <img
                alt="Rimush"
                className="w-full md:w-[400px] md:h-[360px] rounded-2xl aspect-square group-hover:scale-110 transition duration-300 ease-in-out"
                src="https://upload.wikimedia.org/wikipedia/commons/2/29/Head_of_a_ruler_ca_2300_2000_BC_Iran_or_Mesopotamia_Metropolitan_Museum_of_Art_%28dark_background%29.jpg"
              />
            </div>

            <div className="overflow-hidden cursor-pointer relative group w-full md:w-[400px] md:h-[360px] rounded-2xl">
              <div className="rounded-xl z-50 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute from-black/80 to-transparent bg-gradient-to-t inset-x-0 -bottom-2 pt-40 text-white flex">
                <div>
                  <div className="p-4 space-y-3 text-xl group-hover:opacity-100 group-hover:translate-y-0 pb-10 transform transition duration-300 ease-in-out">
                    <div className="font-bold">Naram-Sin</div>
                    <div className="opacity-60 text-sm text-justify">
                      Lorem ipsum dolor sit amet, consectetur adipisicing<br />
                      elit. Distinctio dolores error iure, perferendis<br />
                      sequi totam. Ad aliquam aperiam atque deleniti dolor<br />
                      dolorem enim esse et in, inventore itaque, pariatur<br />
                      reprehenderit.
                    </div>
                  </div>
                </div>
              </div>
              <img
                alt="Naram-Sin"
                className="w-full md:w-[400px] md:h-[360px] rounded-2xl aspect-square group-hover:scale-110 transition duration-300 ease-in-out"
                src="https://media.craiyon.com/2023-08-01/7c7b212503654d08b85d9ebe3bf32117.webp"
              />
            </div>
          </div>
        </section>

        {/* Sneak peak to the Akkad */}
        <section>
          <div className="flex gap-3 mt-10 md:mt-24 ml-10 lg:ml-28">
            <h1 className="font-primary text-4xl md:text-5xl opacity-1 text-yellow-500 font-medium">02</h1>
            <hr className="w-16 md:w-20 my-6 border-yellow-500 border-1 -ml-16 md:-ml-20" />
            <h1 className="text-xl md:text-2xl mt-2  text-yellow-500 font-medium">Intro To Akkad Empire</h1>
          </div>
          <p className="text-justify px-4 md:px-8 text-sky-800 lg:ml-24">
            Akkad was the northern (or northwestern) division of ancient Babylonia. The region was located roughly in the area where the Tigris and Euphrates rivers (see Tigris-Euphrates river system) are closest to each other, and its northern limit extended beyond the line of the modern cities of Al-Fallūjah and Baghdad. The early inhabitants of this region were predominantly Semitic, and their speech is called Akkadian. To the south of the region of Akkad lay Sumer, the southern (or southeastern) division of ancient Babylonia, which was inhabited by a non-Semitic people known as Sumerians. The name Akkad was taken from the city of Agade, which was founded by the Semitic conqueror Sargon about 2300 BCE. Sargon united the various city-states in the region and extended his rule to encompass much of Mesopotamia. After the fall of Sargon’s dynasty about 2150 BCE, the central Iraq region was ruled by a state jointly composed of Sumerians and Akkadians.
          </p>
        </section>

        {/* The Akkadian ancients */}
        <section>
          <div className="flex gap-3 mt-10 lg:mt-20 ml-10 lg:ml-28">
            <h1 className="font-primary text-4xl md:text-5xl opacity-1 text-yellow-500 font-medium">03</h1>
            <hr className="w-16 my-5 md:w-20 md:my-6 border-yellow-500 border-1 -ml-16 md:-ml-20" /> 
            <h1 className="text-xl font-medium text-yellow-500 mb-5 mt-1 md:mt-2">The Akkadian Ancients</h1>
          </div>

          <div className="flex flex-col lg:flex-row gap-9 justify-center mx-auto w-full lg:w-[1000px] mb-20 mt-5 px-4">
            <img
              src="https://i.pinimg.com/736x/5d/1c/e0/5d1ce0b958d373544ee3a885fbb669f9.jpg"
              alt="naram-sin-victory"
              className="w-full lg:w-[600px] md:h-[450px] rounded-2xl"
            />
            <div className="lg:pt-40">
              <h1 className="text-sky-800 font-medium text-xl">Stele of Naram-Sin</h1>
              <hr className="w-full lg:w-[31rem] my-2 border-sky-800 border-2" />
              <p className="text-justify text-sky-800 break-words">
                This stele commemorates Naram-Sin’s victory against the Lullubi from Zagros in 2260 BCE. Naram-Sin is depicted to be wearing a horned helmet, a symbol of divinity, and is also portrayed in a larger scale in comparison to others to emphasize his superiority.
              </p>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-9 justify-center mx-auto w-full lg:w-[1000px] mt-4 mb-20 px-4">
          <img
              src="https://www.cb-gallery.com/wp-content/uploads/2022/10/Old-Akkadian-cuneiform-tablet-1024x1024.jpg"
              alt="Akkadian Cuneiform Tablet"
              className="w-full lg:w-[600px] lg:hidden md:h-[450px] rounded-2xl"
            />
            <div className="lg:pt-40">
              <h1 className="text-sky-800 font-medium text-xl">Akkadian Cuneiform Tablet</h1>
              <hr className="w-full lg:w-[31rem] my-2 border-sky-800 border-2" />
              <p className="text-justify text-sky-800 break-words">
                Old Akkadian clay tablet with an extraordinarily finely drawn cuneiform in seven lines on the front and one line at the back. It is about a contract dealing with the payout of bitumen or barley, what is not explicitly mentioned. The translation reads: “12 gur, U-ma; 1 gur, Sukkal-ra; (the goddess) Ur-Inanna; it is Ur-su. The scribe gave it to him.
              </p>
            </div>
            <img
              src="https://www.cb-gallery.com/wp-content/uploads/2022/10/Old-Akkadian-cuneiform-tablet-1024x1024.jpg"
              alt="Akkadian Cuneiform Tablet"
              className=" hidden w-full lg:w-[600px] lg:block md:h-[450px] rounded-2xl"
            />
          </div>

          <div className="flex flex-col lg:flex-row gap-9 justify-center mx-auto w-full lg:w-[1000px] mb-5 mt-5 px-4">
            <img
              src="https://collectionapi.metmuseum.org/api/collection/v1/iiif/323994/710167/main-image"
              alt="Cylinder seal"
              className="w-full lg:w-[500px] md:h-[450px] rounded-2xl"
            />
            <div className="lg:pt-40">
              <h1 className="text-sky-800 font-medium text-xl">Cylinder seal</h1>
              <hr className="w-full lg:w-[31rem] my-2 border-sky-800 border-2" />
              <p className="text-justify text-sky-800 break-words">
                This seal shows two groups of battling gods, all wearing horned headdresses (visible as horizontal lines with vertical projections at the ends). One group consists of two deities flanking a third, holding his arms down with palms up. Both attacking gods grasp the central deity's headdress, while the god to the right smites him with a mace. In the second group, two deities grasp the same mace and the top of each other's headdress.
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Akkad;
