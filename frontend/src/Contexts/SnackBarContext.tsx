import { createContext, FC, useContext, useState } from "react";

type Props = {
  children?: JSX.Element;
};

const SnackBarContext = createContext<any>(null);

export const useSnackBar = () => useContext(SnackBarContext);

const SnackBarProvider: FC<Props> = ({ children }: Props) => {
  const [showSnackBar, setShowOpenSnackBar] = useState(false);

  const values = {
    showSnackBar,
    setShowOpenSnackBar,
  };

  return (
    <SnackBarContext.Provider value={values}>{children}</SnackBarContext.Provider>
  );
};

export default SnackBarProvider;
