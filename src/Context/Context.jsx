import { createContext, useState, useEffect } from "react";
import { collection, onSnapshot } from 'firebase/firestore';
import { db } from "../firebase";
import {onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";
import React, { useContext} from "react";


export const eventContext = createContext();
export const programmesContext = createContext();
const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function UserProvider({ children }) {
    //events state
  const [eventsData, setEventsData] = useState([]);
  
  //programmes State
  const [programmesData, setProgrammesData] = useState([]);

  //protected routing Sate
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

// fetching the events array
  useEffect(() => {
   const fetchEvents = onSnapshot(collection(db, "events"),
    (snapshot) => {const events = snapshot.docs.map((doc) =>
     ({ id: doc.id, ...doc.data() }));
        setEventsData(events);
      },
      (error) => {
        console.error("Error fetching events: ", error);
       
      }
    );
return() => fetchEvents();
  }, []);



  //fetching programmes array
  useEffect(() => {
    const fetchEvents = onSnapshot(collection(db, "programmes"),
     (snapshot) => {const programmes = snapshot.docs.map((doc) =>
      ({ id: doc.id, ...doc.data() }));
      setProgrammesData(programmes);
       },
       (error) => {
         console.error("Error fetching events: ", error);
        
       }
     );
 return() => fetchEvents();
   }, []);
 




  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const value = {
    currentUser
  };

  return (
    <eventContext.Provider value={{ eventsData }}>
    <programmesContext.Provider value={{ programmesData }}>
    <AuthContext.Provider value={value}>
        {!loading && children}
        </AuthContext.Provider>
      </programmesContext.Provider>
    </eventContext.Provider>
  );
}
