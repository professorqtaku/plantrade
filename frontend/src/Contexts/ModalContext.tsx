import { createContext, FC, useContext, useState } from "react";
import { AuthContext } from "./AuthContextProvider";

type Props = {
  children?: JSX.Element;
};

const ModalContext = createContext<any>(null);

export const useModal = () => useContext(ModalContext);

const ModalProvider: FC<Props> = ({ children }: Props) => {
  const [showLogin, setShowLogin] = useState<Boolean>(false);
  const { whoAmI } = useContext(AuthContext);
  const toggleLogin = () => {
    if (!whoAmI) setShowLogin(!showLogin)
    else {
      setShowLogin(false)
    }
  }

  const values = {
    showLogin,
    setShowLogin,
    toggleLogin
  };

  return (
    <ModalContext.Provider value={values}>{children}</ModalContext.Provider>
  );
};

export default ModalProvider;
