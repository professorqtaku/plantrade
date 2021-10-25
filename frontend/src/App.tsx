import { useState } from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css'
import AllRoutes from './Router/AllRoutes';

function App() {

  return (
    <div className="App">
 
      <AllRoutes>
        {/* Navbar goes here. */}
      </AllRoutes>
    </div>
  )
}

export default App
