import { createContext, FC, useContext, useState, useEffect } from "react";
import { AuthContext } from "./AuthContextProvider";

type Props = {
  children?: JSX.Element;
};

const ModalContext = createContext<any>(null);

export const useModal = () => useContext(ModalContext);


const ModalProvider: FC<Props> = ({ children }: Props) => {
  const [showLogin, setShowLogin] = useState<Boolean>(false);
  const { whoAmI } = useContext(AuthContext);
  const toggleLoginModal = () => { setShowLogin(!showLogin) }
  
  // closing the login-modal if a user logs in
  useEffect(() => {
    setShowLogin(false)
  }, [whoAmI]);
  
  const values = {
    showLogin,
    setShowLogin,
    toggleLoginModal
  };

  return (
    <ModalContext.Provider value={values}>{children}</ModalContext.Provider>
  );
};

export default ModalProvider;
