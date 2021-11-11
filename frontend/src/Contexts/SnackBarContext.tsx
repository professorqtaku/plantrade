import { createContext, FC, useContext, useState } from "react";

type Props = {
  children?: JSX.Element;
};

const SnackBarContext = createContext<any>(null);

export const useSnackBar = () => useContext(SnackBarContext);

const SnackBarContextProvider: FC<Props> = ({ children }: Props) => {
  const [showSnackBar, setShowOpenSnackBar] = useState(false);
  const [text, setText] = useState("");

  const addSnackbar = (text: string) => {
    console.log("snackbar trigger ", text);
  };

  const values = {
    showSnackBar,
    setShowOpenSnackBar,
    text,
    setText,
    addSnackbar,
  };

  return (
    <SnackBarContext.Provider value={values}>
      {children}
    </SnackBarContext.Provider>
  );
};

export default SnackBarContextProvider;
