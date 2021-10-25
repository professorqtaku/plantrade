import { useState } from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css'
import Navigation from './Components/Navigation/Navigation';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Router>
        <header className="App-header">
        </header>
        <main>
        </main>
        <Navigation/>
      </Router>
    </div>
  )
}

export default App
