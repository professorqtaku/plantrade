import { createContext, FC, useContext, useState } from "react";
import { useSnackbar } from 'notistack'

type Props = {
  children?: JSX.Element;
};

const SnackBarContext = createContext<any>(null);

export const useSnackBar = () => useContext(SnackBarContext);

const SnackBarContextProvider: FC<Props> = ({ children }: Props) => {
  const [showSnackBar, setShowOpenSnackBar] = useState(false);
  const [text, setText] = useState("");

  const { enqueueSnackbar } = useSnackbar();

  const addSnackbar = (text: string) => {
    enqueueSnackbar(text);
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
