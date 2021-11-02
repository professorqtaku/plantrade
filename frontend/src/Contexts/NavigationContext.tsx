import { createContext, FC, useContext, useState } from "react";

type Props = {
  children?: JSX.Element;
};

const NavigationContext = createContext<any>(null);

export const useNav = () => useContext(NavigationContext);

const NavigationProvider: FC<Props> = ({ children }: Props) => {
  const [home, setHome] = useState(false);
  const [auction, setAuction] = useState(false);
  const [notis, setNotis] = useState(false);
  const [message, setMessage] = useState(false);
  const [profile, setProfile] = useState(false);

  const handleSelect = (
    select: React.Dispatch<React.SetStateAction<boolean>>,
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
    setProfile
  };

  return (
    <NavigationContext.Provider value={values}>
      {children}
    </NavigationContext.Provider>
  );
};

export default NavigationProvider;
