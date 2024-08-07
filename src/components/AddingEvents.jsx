import { useState } from "react";
import { db, storage } from "../firebase";
import { collection, addDoc } from "firebase/firestore";
import Navbar from "./Navbar";
import Footer from "./Footer";
import horses from "../assests/horses.png";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";

export function AddingEvents() {
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [uploading, setUploading] = useState(false);

  const added = () => toast.success("Event added successfully!");
  const handleChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setUploading(true);

    if (file) {
      const storageRef = ref(storage, `events/${file.name}`);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        (snapshot) => { },
        (error) => {
          console.error("Error uploading file:", error);
          setUploading(false);
     
        },
        async () => {
          try {
            const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
            await saveEvent(downloadURL);
          } catch (error) {
            console.error("Error getting download URL:", error);
            setUploading(false);
        
          }
        }
      );
    } else {
      await saveEvent(null);
    }
  };

  const saveEvent = async (imageUrl) => {
    try {
      const docRef = await addDoc(collection(db, "events"), {
        title,
        description,
        date,
        
        time,
        img: imageUrl,
      });

     
      console.log("Document written with ID: ", docRef.id);
      added();
      // Reset form
      setTitle("");
      setDescription("");
      setDate("");
      setTime("");
      setFile(null);
    } catch (e) {
      console.error("Error adding document: ", e);
      // toast.error("Error adding document!");
    }

    setUploading(false);
  };

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
                    <label htmlFor="title" className="w-[250px] block text-sm font-medium leading-6 text-sky-800">Event Title</label>
                    <div className="mt-2">
                      <input id="title" name="title" type="text" required value={title} onChange={(e) => setTitle(e.target.value)} className="pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-800 sm:text-sm sm:leading-6" />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="description" className="pl-2 block text-sm font-medium leading-6 text-sky-800">Description</label>
                    <div className="mt-2">
                      <input id="description" name="description" type="text" required value={description} onChange={(e) => setDescription(e.target.value)} className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-800 sm:text-sm sm:leading-6" />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="date" className="block text-sm font-medium leading-6 text-sky-800">Date Of the event</label>
                    <div className="mt-2">
                      <input id="date" name="date" type="text" required value={date} onChange={(e) => setDate(e.target.value)} className="pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-800 sm:text-sm sm:leading-6" />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="time" className="block text-sm font-medium leading-6 text-sky-800">Time Of the Event</label>
                    <div className="mt-2">
                      <input id="time" name="time" type="text" required value={time} onChange={(e) => setTime(e.target.value)} className="pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-800 sm:text-sm sm:leading-6" />
                    </div>
                  </div>

                  <h2 className="text-sky-800 text-sm font-medium">Please add an image:</h2>
                  <input type="file" onChange={handleChange} className="bg-white text-sky-800 text-sm" />
                  {file && <img src={URL.createObjectURL(file)} alt="place" className="rounded-xl w-[300px]" />}

                  <div>
                    <button type="submit" className="mb-3 flex w-full justify-center rounded-md bg-sky-800 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-sky-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600" disabled={uploading}>
                      {uploading?
                      <div class="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-primary motion-reduce:animate-[spin_1.5s_linear_infinite]"
                      role="status">
                      <span class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                      loading ...</span></div> : "Add Event"}
                    </button>
                    <ToastContainer containerId="containerA"/>
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
