import AllContextProviders from './Contexts/AllContextProviders';
import AllRoutes from './Router/AllRoutes';
import Navigation from './Components/Navigation/Navigation';

function App() {

  return (
    <div className="App">
        <AllContextProviders>
          <AllRoutes>
            <Navigation />
          </AllRoutes>
        </AllContextProviders>
    </div>
  );
}

export default App;
