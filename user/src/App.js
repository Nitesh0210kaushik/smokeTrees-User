
import './App.css';

import Login from './components/Login';
import Signup from './components/Signup';
import Navbar from './components/Navbar'
import PrivateComponent from './components/PrivateComponent';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Homepage from './components/Homepage';


function App() {
  return (
    <div className="App">  
    <BrowserRouter >
      <Navbar />
     <Routes>
      <Route element = {<PrivateComponent />} >
     <Route path="/" element={<Homepage />} />
      </Route>
       <Route path="/signup" element={<Signup />} />
       <Route path="/login" element={<Login />} />

     </Routes>
     </BrowserRouter>
      
    </div>
  );
}

export default App;
