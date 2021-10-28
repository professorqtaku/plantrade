import AllContextProviders from './Contexts/AllContextProviders';
import AllRoutes from './Router/AllRoutes';
import Navigation from './Components/Navigation/Navigation';
import LoginRegisterModal from './Components/LoginRegisterModal/LoginRegisterModal';

function App() {

  return (
    <div className="App">
      <AllContextProviders>
        <AllRoutes>
          <>
            <Navigation />
            <LoginRegisterModal />
          </>
        </AllRoutes>
      </AllContextProviders>
    </div>
  );
}

export default App;
