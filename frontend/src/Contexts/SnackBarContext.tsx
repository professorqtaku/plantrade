import { createContext, FC, useContext, useState } from "react";
import { SnackbarProvider, useSnackbar, VariantType } from 'notistack'
import SnackBar from '../Components/SnackBar/SnackBar'
import { Notification } from "../Interfaces/Interfaces";

type Props = {
  children?: JSX.Element;
};

const SnackBarContext = createContext<any>(null);

export const useSnackBar = () => useContext(SnackBarContext);

// wrap the contextprovider so we can use useSnackbar from notistack
// in the context
const SnackBarContextProvider = ({ children }: Props) => {
  const styles = {
    success: { backgroundColor: 'purple' },
    error: { backgroundColor: 'blue' },
    warning: { backgroundColor: 'green' },
    info: { backgroundColor: 'yellow' },
  };
  
  return (
    <SnackbarProvider
      // preventDuplicate
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      content={(key, message) => <SnackBar id={key} message={message} />}
    >
      <SnackBarStackProvider>{children}</SnackBarStackProvider>
    </SnackbarProvider>
  );
};

const SnackBarStackProvider: FC<Props> = ({ children }: Props) => {

  const { enqueueSnackbar } = useSnackbar();

  const addSnackbar = (content: string | Notification) => {  
    enqueueSnackbar(content);
  };

  const values = {
    addSnackbar,
  };

  return (
    <SnackBarContext.Provider value={values}>
      {children}
    </SnackBarContext.Provider>
  );
};

export default SnackBarContextProvider;
