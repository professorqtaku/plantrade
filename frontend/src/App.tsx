import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css'
import AuctionProvider from "./Contexts/AuctionContext";
import AllRoutes from './Router/AllRoutes';

function App() {

  return (
    <div className="App">
      <AuctionProvider>
        <AllRoutes>
        {/* nav */}
        </AllRoutes>
      </AuctionProvider>
    </div>
  )
}

export default App
