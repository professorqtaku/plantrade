import { createContext, FC, useContext, useState } from "react";

type Props = {
  children?: JSX.Element;
};

const ModalContext = createContext<any>(null);

export const useModal = () => useContext(ModalContext);


const ModalContextProvider: FC<Props> = ({ children }: Props) => {
  console.log("---7. MODAL CONTEXT----");

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
