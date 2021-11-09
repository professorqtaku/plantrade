import { createContext, FC, useContext, useState } from "react";

type Props = {
  children?: JSX.Element;
};

const DrawerContext = createContext<any>(null);

export const useDrawer = () => useContext(DrawerContext);

const DrawerProvider: FC<Props> = ({ children }: Props) => {
  const [showDrawer, setShowDrawer] = useState<boolean>(false);
  const [content, setContent] = useState("some content");
  const toggleDrawer = () => setShowDrawer(!showDrawer);

  const values = {
    showDrawer,
    setShowDrawer,
    toggleDrawer,
    content
  };

  return (
    <DrawerContext.Provider value={values}>
      {children}
    </DrawerContext.Provider>
  );
};

export default DrawerProvider;
