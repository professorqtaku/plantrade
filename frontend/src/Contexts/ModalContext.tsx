import { createContext, FC, useContext, useState, useEffect } from "react";
import { useAuth } from "./AuthContext";

type Props = {
  children?: JSX.Element;
};

const ModalContext = createContext<any>(null);

export const useModal = () => useContext(ModalContext);


const ModalContextProvider: FC<Props> = ({ children }: Props) => {
  const [showLoginModal, setShowLoginModal] = useState<Boolean>(false);
  const toggleLoginModal = () => {
    setShowLoginModal(!showLoginModal);
  };

  const values = {
    showLoginModal,
    toggleLoginModal,
  };

  return (
    <ModalContext.Provider value={values}>{children}</ModalContext.Provider>
  );
};

export default ModalContextProvider;
