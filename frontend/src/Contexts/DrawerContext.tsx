import { createContext, FC, useContext, useState } from "react";

type Props = {
  children?: JSX.Element;
};

const DrawerContext = createContext<any>(null);

export const useDrawer = () => useContext(DrawerContext);

const DrawerContextProvider: FC<Props> = ({ children }: Props) => {
  const [showDrawer, setShowDrawer] = useState<boolean>(false);
  const [content, setContent] = useState(["Some content"]);
  const [showChatRoom, setShowChatRoom] = useState(false);
  const toggleDrawer = () => setShowDrawer(!showDrawer);

  const values = {
    showDrawer,
    setShowDrawer,
    toggleDrawer,
    content,
    showChatRoom,
    setShowChatRoom,
  };

  return (
    <DrawerContext.Provider value={values}>{children}</DrawerContext.Provider>
  );
};

export default DrawerContextProvider;
