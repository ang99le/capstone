// import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
// import { auth,db } from "../firebase";
// import { setDoc,doc } from "firebase/firestore";

// function Signwithgoogle(){
//     function googlelogin(){
//         const provider=new GoogleAuthProvider();
//         signInWithPopup (auth,provider).then(async(result)=>{
      
//         const user=result.user;
//         if (result.user){
//             await setDoc (doc(db,"Users",user.uid),{
//                 email: user.email,
//                 firstName: user.displayName,
//                 photo: user.photoURL,
//                 lastName: "",

//             })
//             window.location.href="/Home";
//         }
     

//         });
//     }
//     return(
//         <div>
//          <div className="flex justify-center gap-3 border-2 border-sky-800 rounded-md hover:bg-sky-600  hover:border-sky-600 p-1">
//             <img src="https://cdn4.iconfinder.com/data/icons/logos-brands-7/512/google_logo-google_icongoogle-512.png" className="w-[30px]" alt='google logo' />
//             <button onClick={googlelogin} className="text-sky-800 font-medium hover:text-white"> Sign in with google </button>

//          </div>
//         </div>
//     )

// }
// export default Signwithgoogle;

