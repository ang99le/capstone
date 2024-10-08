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
import Ashur from './components/Civilization/Ashur';

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
      <Route path='/Signup' element={<Signup/>}></Route>
      <Route path='/AboutUs' element={<AboutUs/>}></Route>
      <Route path='/BookNow' element={<BookNow/>}></Route>
      <Route path='/Akkad' element={<Akkad/>}></Route>
      <Route path="/programme/:programmeId" element={<Progdetails />} />
      <Route path='/AddingEvents' element={<AddingEvents/>}></Route>
      <Route path='/Loading' element={<Loading/>}></Route>
      <Route path='/Ashur' element={<Ashur/>}></Route>
      {/* <Route path='/CustomizeProg' element={<CustomizeProg/>}></Route>  */}
      {/* <Route path='/Guides' element={<Guides/>}></Route> 
   */}

      {/* ptotected routing */}
      <Route path='/AddingEvents' element={<ProtectedRoute ><AddingEvents/></ProtectedRoute> }></Route>
      <Route path='/Guides' element={<ProtectedRoute><Guides/></ProtectedRoute> }></Route>
      <Route path='/CustomizeProg' element={<ProtectedRoute><CustomizeProg/></ProtectedRoute>}></Route> 
     
      </Routes>
      </BrowserRouter>
      </UserProvider>
  

    </div>
  );
}

export default App;
