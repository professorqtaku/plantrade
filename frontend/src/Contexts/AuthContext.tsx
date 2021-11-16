import { createContext, useState, useEffect, useContext } from "react";
import { User } from "../Interfaces/Interfaces";
import { useChat } from "./ChatContext";

interface Props {
  children?: JSX.Element;
}

const AuthContext = createContext<any>(null);
export const useAuth = () => useContext(AuthContext);

export const AuthContextProvider: React.FC<Props> = ({ children }: Props) => {
  console.log("---5. AUTH CONTEXT----");
  const [whoAmI, setWhoAmI] = useState(null);
  const [wrongPassword, setWrongPassword] = useState(false);
  const [userExists, setUserExists] = useState(false);
  const { checkReadMsg } = useChat();
  const [invisibleMsgBadge, setInvisibleMsgBadge] = useState(true);

  useEffect(() => {
    console.log("---5.1 AUTH USEEFFECT----har user:", whoAmI != null);
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
    }
    else {
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
      whoIsOnline();
      setWrongPassword(false);
      const readMsg = await checkReadMsg();
      if (readMsg === 0 && resUser.id) {
        setInvisibleMsgBadge(false);
      }
      return true;
    } else {
      setWrongPassword(true);
      return false;
    }
  };

  const whoIsOnline = async () => {
    let res = await fetch("/api/whoami");
    try {
      let data = await res.json();
      setWhoAmI(data);
      return data;
    } catch (e) {
      setWhoAmI(null);
      return null;
    }
  };

  const logout = async () => {
    await fetch("/api/logout", {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
    });
    setInvisibleMsgBadge(true);
    setWhoAmI(null);
    window.location.reload();
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
    invisibleMsgBadge,
    setInvisibleMsgBadge,
  };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;
