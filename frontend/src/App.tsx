import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css'
import AuctionProvider from "./contexts/AuctionContext";
import AuctionListPage from './pages/AuctionListPage';
import HomePage from './pages/HomePage';

function App() {

  return (
    <div className="App">
      <AuctionProvider>
        <Router>
          <header className="App-header">
          </header>
          <main>
            {/* temporary path */}
            <Route exact path="/" component={HomePage} />
            <Route exact path="/auctions" component={AuctionListPage} />
          </main>
        </Router>
      </AuctionProvider>
    </div>
  )
}

export default App
