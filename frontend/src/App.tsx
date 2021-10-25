import AllRoutes from './Router/AllRoutes';
import Navigation from './Components/Navigation/Navigation';

function App() {

  return (
    <div className="App">
 
      <AllRoutes>
        <Navigation/>
      </AllRoutes>
    </div>
  );
}

export default App;
