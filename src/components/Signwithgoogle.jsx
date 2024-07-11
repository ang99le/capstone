import {signInWithPopup } from "firebase/auth";
import {auth,googleProvider} from "./config/auth";
import {useAuthState} from "react-firebase-hooks/auth";


function Signwithgoogle(){
const [user]=useAuthState(auth);
const signInWithGoogle=async()=>{

    try{
        await signInWithPopup (auth,googleProvider);      
    } catch (error){
        console.error("Error signing in with Gooogle:",error)
    }
}


    
    return(
        <div>
         <div className="flex justify-center gap-3 border-2 border-sky-800 rounded-md hover:bg-sky-600  hover:border-sky-600 p-1">
            <img src="https://cdn4.iconfinder.com/data/icons/logos-brands-7/512/google_logo-google_icongoogle-512.png" className="w-[30px]" alt='google logo' />
            <button onClick={googlelogin} className="text-sky-800 font-medium hover:text-white"> Sign in with google </button>

         </div>
        </div>
    )

}
export default Signwithgoogle;

