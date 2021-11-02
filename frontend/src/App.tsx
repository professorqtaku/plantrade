import AllContextProviders from "./Contexts/AllContextProviders";
import AllRoutes from "./Router/AllRoutes";
import Navigation from "./Components/Navigation/Navigation";
import LoginRegisterModal from "./Components/LoginRegisterModal/LoginRegisterModal";
import FloatingAddBtn from "./Components/FloatingAddBtn/FloatingAddBtn";
import SnackBar from "./Components/SnackBar/SnackBar";
import { useSnackBar } from "./Contexts/SnackBarContext";

function App() {

  const { showSnackBar, setShowOpenSnackBar, text } = useSnackBar();

  return (
    <div className="App">
      <AllRoutes>
        <>
          <Navigation />
          <FloatingAddBtn />
        </>
      </AllRoutes>
      <SnackBar isOpen={showSnackBar} setIsOpen={setShowOpenSnackBar} text={text} />
      <LoginRegisterModal />
    </div>
  );
}

export default App;
