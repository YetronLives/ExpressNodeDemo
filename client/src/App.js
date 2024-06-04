import React, {useEffect, useState} from 'react'
import './App.css'
function App() {
  const [backendData, setBackendData] = useState([{}])

  useEffect(() => {
    fetch("/api").then(
      response => response.json()).then(
        data => {
          setBackendData(data)
        }
      )
  }, []);

  return (
    <div>{(typeof backendData.users === 'undefined') ? (<p>Loading...</p>): 
    (
      backendData.users.map((user, i)=> (
        <p key={i}>{user}</p>
      ))
    )}
    <nav id="desktop-nav">
        <div class="logo">Constant Nortey Jr.</div>
        
        <div>
            <ul class="nav-links">
                <li><a href="#about">About</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </div>
    </nav>
    </div>

  )
}

export default App