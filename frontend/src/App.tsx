import AllContextProviders from "./Contexts/AllContextProviders";
import AllRoutes from "./Router/AllRoutes";
import Navigation from "./Components/Navigation/Navigation";
import LoginRegisterModal from "./Components/LoginRegisterModal/LoginRegisterModal";
import FloatingAddBtn from "./Components/FloatingAddBtn/FloatingAddBtn";
import { useState } from "react";

function App() {

  return (
    <div className="App">
      <AllContextProviders>
        <>
          <AllRoutes>
            <Navigation />
            <FloatingAddBtn />
          </AllRoutes>
          <LoginRegisterModal />
        </>
      </AllContextProviders>
    </div>
  );
}

export default App;
