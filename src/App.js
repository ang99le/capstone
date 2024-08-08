import './App.css';
import Home from './pages/Home';
import Events from './pages/Events';
import Civilizations from './pages/Civilizations';
import Programmes from './pages/Programmes';
import { Login } from './pages/Login';
import Signup from './pages/Signup';
import AboutUs from './pages/Aboutus';
import Progdetails from './components/Progdetails';
import EventsDetails from './components/EventDetails';
import CustomizeProg from './components/CustomizeProg';
import BookNow from './components/BookNow';
import {BrowserRouter,Routes, Route} from "react-router-dom";
import Akkad from './components/Civilization/Akkad';
import Guides from './components/Guides';
import { AddingEvents } from './components/AddingEvents';
import { UserProvider } from './Context/Context';
import ProtectedRoute from './components/Protected';
import Loading from './components/Loading';



function App() {

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
      <Route path='/Login' element={<Login/>}></Route>
      {/* <Route path='/Login'element={<Login/>}></Route> */}
      <Route path='/Signup' element={<Signup/>}></Route>
      <Route path='/AboutUs' element={<AboutUs/>}></Route>
      <Route path='/Progdetails' element={<Progdetails/>}></Route>
      <Route path='/BookNow' element={<BookNow/>}></Route>
      <Route path='/Akkad' element={<Akkad/>}></Route>
      <Route path="/programme/:programmeId" element={<Progdetails />} />
      {/* <Route path='/AddingEvents' element={<AddingEvents/>}></Route> */}
      <Route path='/Loading' element={<Loading/>}></Route>
      
      {/* ptotected routing */}
      <Route
          path="/customizeProg"
          element={<ProtectedRoute component={CustomizeProg} allowedRoles={['tourist']} />}
        />
        <Route
          path="/guides"
          element={<ProtectedRoute component={Guides} allowedRoles={['guide']} />}
        />
        <Route
          path="/Addingevents"
          element={<ProtectedRoute component={AddingEvents} allowedRoles={['admin']} />}
        />
    
      </Routes>
      </BrowserRouter>
      </UserProvider>
  

    </div>
  );
}

export default App;
