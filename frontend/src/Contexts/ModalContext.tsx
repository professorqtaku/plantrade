import { createContext, FC, useContext, useState } from "react";

type Props = {
  children?: JSX.Element;
};

const ModalContext = createContext<any>(null);

export const useModal = () => useContext(ModalContext);

const ModalProvider: FC<Props> = ({ children }: Props) => {
  const [showLogin, setShowLogin] = useState<Boolean>(false);

  const toggleLogin = () => {setShowLogin(!showLogin)}

  const values = {
    showLogin,
    toggleLogin
  };

  return (
    <ModalContext.Provider value={values}>{children}</ModalContext.Provider>
  );
};

export default ModalProvider;
