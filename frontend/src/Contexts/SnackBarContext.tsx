import { createContext, FC, useContext, useState } from "react";
import { SnackbarProvider, useSnackbar } from 'notistack'
import SnackBar from '../Components/SnackBar/SnackBar'

type Props = {
  children?: JSX.Element;
};

const SnackBarContext = createContext<any>(null);

export const useSnackBar = () => useContext(SnackBarContext);

// wrap the contextprovider so we can use useSnackbar from notistack
// in the context
const SnackBarContextProvider = ({ children }: Props) => {
  return (
    <SnackbarProvider
      // preventDuplicate
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      content={(key, message) => <SnackBar id={key} message={message} />}
    >
      <SnackBarStackProvider>
        {children}
      </SnackBarStackProvider>
    </SnackbarProvider>
  );
};

const SnackBarStackProvider: FC<Props> = ({ children }: Props) => {
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
