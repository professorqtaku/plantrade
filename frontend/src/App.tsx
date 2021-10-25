import './App.css'
import AllRoutes from './Router/AllRoutes';
// import Navigation from './Components/Navigation/Navigation';
import AllContextProviders from './Contexts/AllContextProviders';

function App() {

  return (
    <div className="App">
      <AllContextProviders>
        <AllRoutes>
          {/* <Navigation/> */}
        </AllRoutes>
      </AllContextProviders>
    </div>
  )
}

export default App
