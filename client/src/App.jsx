import { useState } from 'react'
import './App.css'
import Router from './Router/Router'


function App() {

  
  const [darkMode, setDarkMode] = useState(false);


  if (darkMode) {
    document.body.style = 'background-color: black; color: white;'
  }

  const toggleDarkMode = () => {

    setDarkMode(true);
  }
  

  return (
    <div>


      <Router />
    </div>
  )
}

export default App
