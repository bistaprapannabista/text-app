import './App.css';
import Navbar from './components/Navbar.js';
import Alert from './components/Alert.js';
import Textform from './components/Textform.js';
import About from './components/About.js';
import { useState } from "react";
import {BrowserRouter as Router, 
        Routes,
        Route,
      } from "react-router-dom";
function App() {
    const[darkMode,setDarkMode] = useState(false);
    const[alertMessage,setalertMessage] = useState(null);

    if(darkMode){
      document.body.style.backgroundColor="#353935"; 
      document.body.style.color="white";
    }

    else{
      document.body.style.backgroundColor="white"; 
      document.body.style.color="black";
    }

    return (
    <Router>
    <div className="App">
      <Navbar name='Text App' darkMode={darkMode} onClick={()=>{!darkMode?setDarkMode(true):setDarkMode(false)}}/>
      <Alert data={alertMessage}/>
      <div className="container">

      <Routes>

        <Route path="/about" element={<About darkMode={darkMode} />} />

        <Route path="/" element={<Textform setalertMessage={setalertMessage} /> }/>

      </Routes>

      </div>
    </div>
    </Router>
    );
}

export default App;



