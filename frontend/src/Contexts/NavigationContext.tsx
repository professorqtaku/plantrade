import { createContext, FC, useContext, useState } from "react";

type Props = {
  children?: JSX.Element;
};

const NavigationContext = createContext<any>(null);

export const useNav = () => useContext(NavigationContext);

const NavigationContextProvider: FC<Props> = ({ children }: Props) => {
  console.log("---8. NAV CONTEXT----");

  const [home, setHome] = useState<boolean>(false);
  const [auction, setAuction] = useState<boolean>(false);
  const [notis, setNotis] = useState<boolean>(false);
  const [message, setMessage] = useState<boolean>(false);
  const [profile, setProfile] = useState<boolean>(false);

  const handleSelect = (
    select: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    setHome(false);
    setAuction(false);
    setNotis(false);
    setMessage(false);
    setProfile(false);
    select(true);
  };

  const values = {
    handleSelect,
    home,
    auction,
    notis,
    message,
    profile,
    setHome,
    setAuction,
    setNotis,
    setMessage,
    setProfile,
  };

  return (
    <NavigationContext.Provider value={values}>
      {children}
    </NavigationContext.Provider>
  );
};

export default NavigationContextProvider;
