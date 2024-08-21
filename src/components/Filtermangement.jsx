// import React, { useState, useEffect } from "react";
// import EventCard from "./EventCard";
// import EventsFilter from "./EventsFilter";
// import { onSnapshot, collection } from "firebase/firestore";
// import { db } from "../firebase";

// const EventManagement = () => {
//   const [filteredEvents, setFilteredEvents] = useState([]);
//   const [searchCity, setSearchCity] = useState("");

//   useEffect(() => {
//     const unsubscribeEvents = onSnapshot(collection(db, "events"), (snapshot) => {
//       const updatedEvents = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
//       setFilteredEvents(updatedEvents);
//     });

//     return () => unsubscribeEvents();
//   }, []);

//   return (
//     <div>
//       <EventsFilter
//         searchCity={searchCity}
//         setSearchCity={setSearchCity}
//         events={events}
//         setFilteredEvents={setFilteredEvents}
//       />
//       <EventCard filteredEvents={filteredEvents} />
//     </div>
//   );
// };

// export default EventManagement;