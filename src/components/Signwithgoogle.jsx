import {signInWithPopup } from "firebase/auth";
// import {auth,googleProvider} from "./config/auth";
// import {useAuthState} from "react-firebase-hooks/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { setDoc,doc } from "firebase/firestore";
import { auth,db } from "../firebase";


function Signwithgoogle(){
function googlelogin(){
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider).then(async (result) => {
      console.log(result);
      const user = result.user;
      if (result.user) {
        await setDoc(doc(db, "Users", user.uid), {
          email: user.email,
          firstName: user.displayName,
          photo: user.photoURL,
          lastName: "",
        });


        alert.success("User logged in Successfully", {
            position: "top-center",
          });
          window.location.href = "/profile";
        }
      });
    }



    return(
        <div>
         <div className="flex mt-7 border-sky-800 justify-center gap-3  rounded-md p-1">
            <h1 className="font-markazi font-medium text-sky-800">----</h1>
            <img src="https://cdn4.iconfinder.com/data/icons/logos-brands-7/512/google_logo-google_icongoogle-512.png" className="w-[25px]" alt='google logo' />
            <button onClick={googlelogin} className="text-sky-800 font-medium hover:text-sky-600 font-markazi">login with google </button>
           <h1 className="text-sky-800 font-markazi font-medium text-md"> ---- </h1>
         </div>
        </div>
    )

}
export default Signwithgoogle;

