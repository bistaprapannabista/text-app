import './App.css';
import Button from './components/Button.js';
import Navbar from './components/Navbar.js';
import { useState } from "react";

function App() {
    const [input, setInput] = useState('');
    const[darkMode,setDarkMode] = useState(false);

    const changeToDarkMode = () => {}
    return (
    <div className="App">
      <Navbar name='Text App'/>
      <div className="container">
        <div className="m-3">
          <textarea value={input} onChange={(e)=>setInput(e.target.value)} className="form-control" id="exampleFormControlTextarea1" rows="10"></textarea>
        </div>
        <h1>{input}</h1>
      </div>
    </div>
    );
}

export default App;