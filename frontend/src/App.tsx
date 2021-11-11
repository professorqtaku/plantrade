import AllRoutes from "./Router/AllRoutes";
import Navigation from "./Components/Navigation/Navigation";
import LoginRegisterModal from "./Components/LoginRegisterModal/LoginRegisterModal";
import FloatingAddBtn from "./Components/FloatingAddBtn/FloatingAddBtn";
import { useAuth } from "./Contexts/AuthContext";
import Drawer from "./Components/DrawerCollapse/DrawerCollapse";

function App() {
  const { whoAmI } = useAuth();

  return (
      <div className="App">
        <AllRoutes>
          <>
            <Navigation />
            {whoAmI && <FloatingAddBtn />}
            <Drawer />
          </>
        </AllRoutes>
        <LoginRegisterModal />
      </div>
  );
}

export default App;
