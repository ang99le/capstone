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

import {BrowserRouter,Routes, Route} from "react-router-dom";
import BookNow from './components/BookNow';


function App() {
  return (
    <div className="App">
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
      <Route path='/CustomizeProg' element={<CustomizeProg/>}></Route>
      <Route path='/BookNow' element={<BookNow/>}></Route>
      </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
