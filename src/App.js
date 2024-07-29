import './App.css';
import Home from './pages/Home';
import Events from './pages/Events';
import Civilizations from './pages/Civilizations';
import Programmes from './pages/Programmes';
import Login from './pages/Login';
import Signup from './pages/Signup';
import AboutUs from './pages/Aboutus';
import Progdetails from './components/Progdetails';
import EventsDetails from './components/EventDetails';
import CustomizeProg from './components/CustomizeProg';
import BookNow from './components/BookNow';
import {BrowserRouter,Routes, Route} from "react-router-dom";
import Akkad from './components/Civilization/Akkad';
import Guides from './components/Guides';
import { AddEvents } from './components/AddingEvents';
import { UserProvider } from './Context/Context';
import ProtectedRoute from './components/Protected';

function App() {
 
  // const isLoggedIn = window.localStorage.getItem("loggedIn"); // Check if logged in
  // const userType = window.localStorage.getItem("userType");

  return (
    <div className="App">
    <UserProvider>
      <BrowserRouter>
      <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='Home' element={<Home />}></Route>
      <Route path='/Civilizations' element={<Civilizations />}></Route>
      <Route path='/Events' element={<Events />}></Route>
      <Route path='/EventDetails/:id' element={<EventsDetails />}></Route>
      <Route path='/Programmes' element={<Programmes/>}></Route>      
      <Route path='Login' element={<Login/>}></Route>
      <Route path='/Signup' element={<Signup/>}></Route>
      <Route path='/AboutUs' element={<AboutUs/>}></Route>
      <Route path='/Progdetails' element={<Progdetails/>}></Route>
      <Route path='/BookNow' element={<BookNow/>}></Route>
      <Route path='/Akkad' element={<Akkad/>}></Route>
      <Route path='/AddEvents' element={<AddEvents/>}></Route>
      {/* ptotected routing */}

      <Route path='/CustomizeProg' element={<ProtectedRoute><CustomizeProg/></ProtectedRoute>}></Route>
      <Route path='/Guides' element={<ProtectedRoute><Guides/></ProtectedRoute>}></Route>
      {/* <Route path="/home" element={<ProtectedRoute><Home /></ProtectedRoute>} /> */}

      </Routes>
      </BrowserRouter>
      </UserProvider>
  

    </div>
  );
}

export default App;
