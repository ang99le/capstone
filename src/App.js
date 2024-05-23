import './App.css';
import Home from './pages/Home';
import Events from './pages/Events';
import Civilizations from './pages/Civilizations';
import Programmes from './pages/Programmes';
import Login from './pages/Login';
import Signup from './pages/Signup';
import AboutUs from './pages/Aboutus';
import {BrowserRouter,Routes, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route path='Home' element={<Home/>}></Route>
      <Route path='/Civilizations' element={<Civilizations/>}></Route>
      <Route path='/Events' element={<Events/>}></Route>
      <Route path='/Programmes' element={<Programmes/>}></Route>      
      <Route path='Login' element={<Login/>}></Route>
      <Route path='/Signup' element={<Signup/>}></Route>
      <Route path='/AboutUs' element={<AboutUs/>}></Route>
      </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
