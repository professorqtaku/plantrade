import { createContext, FC, useContext, useState, useEffect } from "react";
import { useAuth } from "./AuthContext";

type Props = {
  children?: JSX.Element;
};

const ModalContext = createContext<any>(null);

export const useModal = () => useContext(ModalContext);


const ModalProvider: FC<Props> = ({ children }: Props) => {
  const [showLoginModal, setShowLoginModal] = useState<Boolean>(false);
  const { whoAmI } = useAuth();
  const toggleLoginModal = () => { setShowLoginModal(!showLoginModal); }
  
  // closing the login-modal if a user logs in
  useEffect(() => {
    setShowLoginModal(false);
  }, [whoAmI]);
  
  const values = {
    showLoginModal,
    toggleLoginModal,
  };

  return (
    <ModalContext.Provider value={values}>{children}</ModalContext.Provider>
  );
};

export default ModalProvider;
