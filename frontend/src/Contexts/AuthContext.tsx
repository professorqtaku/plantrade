import { createContext, useState, useEffect, useContext } from "react";
import { User } from "../Interfaces/Interfaces";
import { useChat } from "./ChatContext";
import { useMessage } from "./MessageContext";

interface Props {
  children?: JSX.Element;
}

const AuthContext = createContext<any>(null);
export const useAuth = () => useContext(AuthContext);

export const AuthContextProvider: React.FC<Props> = ({ children }: Props) => {
  const [whoAmI, setWhoAmI] = useState(null);
  const [wrongPassword, setWrongPassword] = useState(false);
  const [userExists, setUserExists] = useState(false);
  const [hasReadMsg, setHasReadMsg] = useState(true);

  useEffect(() => {
    whoIsOnline();
  }, [!whoAmI]);

  const register = async (user: User) => {
    let res = await fetch("/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },

      body: JSON.stringify(user),
    });
    if (res.ok && res.status == 200) {
      setUserExists(false);
      return true;
    } else {
      setUserExists(true);
      return false;
    }
  };

  const login = async (user: User) => {
    let res = await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    if (res.ok && res.status == 200) {
      let resUser = await res.json();
      setWhoAmI(resUser);
      setWrongPassword(false);
      return resUser;
    } else {
      setWrongPassword(true);
      return null;
    }
  };

  const whoIsOnline = async () => {
    let res = await fetch("/api/whoami");
    if (res.ok && res.status === 200) {
      let data = await res.json();
      setWhoAmI(data);
      return data;
    }
    setWhoAmI(null);
    return null;
  };

  const logout = async () => {
    await fetch("/api/logout", {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
    });
    setHasReadMsg(true);
    setWhoAmI(null);
  };

  const values = {
    register,
    login,
    logout,
    wrongPassword,
    setWrongPassword,
    userExists,
    whoIsOnline,
    whoAmI,
    hasReadMsg,
    setHasReadMsg,
  };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;
