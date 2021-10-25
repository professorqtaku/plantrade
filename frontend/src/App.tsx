import { useState } from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Router>
        <header className="App-header">
        </header>
        <main>
        </main>
      </Router>
    </div>
  )
}

export default App
