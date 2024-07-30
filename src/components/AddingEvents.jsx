import { useState } from "react";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";
import Navbar from "./Navbar";
import Footer from "./Footer";
import horses from "../assests/horses.png";

export function AddingEvents() {
  const [file, setFile] = useState();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  function handleChange(e) {
    setFile(URL.createObjectURL(e.target.files[0]));
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const docRef = await addDoc(collection(db, "events"), {
        title,
        description,
        date,
        time,
        img: file, // Assuming you handle the image upload and get the URL
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }

    // Reset form
    setTitle("");
    setDescription("");
    setDate("");
    setTime("");
    setFile(null);
  }

  return (
    <div>
      <nav>
        <Navbar />
      </nav>
      <main>
        <div className="h-[100vh]">
          <h1 className="text-sky-800 font-medium text-center text-2xl mt-10">Add Your Event</h1>
          <div className="w-full h-full flex flex-col justify-center items-center backdrop-blur-sm">
            <div className="-mt-20 mb-20 md:flex justify-center md:mt-14 md:gap-10">
              <img className="hidden md:block w-[600px] rounded-2xl mb-40" src={horses} alt="sumerian woman" />
              <div className="p-8 sm:w-full sm:max-w-sm z-50 mt-10">
                <form className="space-y-2" onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="text" className="w-[250px] block text-sm font-medium leading-6 text-sky-800">Event Title</label>
                    <div className="mt-2">
                      <input id="text" name="text" type="text" required value={title} onChange={(e) => setTitle(e.target.value)} className="pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-800 sm:text-sm sm:leading-6" />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="text" className="pl-2 block text-sm font-medium leading-6 text-sky-800">Description</label>
                    <div className="mt-2">
                      <input id="text" name="text" type="text" required value={description} onChange={(e) => setDescription(e.target.value)} className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-800 sm:text-sm sm:leading-6" />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="text" className="block text-sm font-medium leading-6 text-sky-800">Date Of the event</label>
                    <div className="mt-2">
                      <input id="text" name="number" type="text" required value={date} onChange={(e) => setDate(e.target.value)} className="pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-800 sm:text-sm sm:leading-6" />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="number" className="block text-sm font-medium leading-6 text-sky-800">Time Of the Event </label>
                    <div className="mt-2">
                      <input id="number" name="number" type="text" required value={time} onChange={(e) => setTime(e.target.value)} className="pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-800 sm:text-sm sm:leading-6" />
                    </div>
                  </div>

                  <h2 className="text-sky-800 text-sm font-medium">please add an image:</h2>
                  <input type="file" onChange={handleChange} className="bg-white text-sky-800 text-sm" />
                  {file && <img src={file} alt="place" className="rounded-xl w-[300px]" />}

                  <div>
                    <button type="submit" className="mb-3 flex w-full justify-center rounded-md bg-sky-800 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-sky-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600">Add Event</button>
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
