import { createContext, useState, useEffect, useContext } from "react";
import { useSnackBar } from "./SnackBarContext";
import {User} from '../Interfaces/Interfaces'

interface Props {
  children?: JSX.Element;
}

const AuthContext = createContext<any>(null);
export const useAuth = () => useContext(AuthContext);

export const AuthContextProvider: React.FC<Props> = ({ children }: Props) => {
  const [whoAmI, setWhoAmI] = useState(null);
  const [wrongPassword, setWrongPassword] = useState(false);
  const [userExists, setUserExists] = useState(false);
  const { setShowOpenSnackBar, setText } = useSnackBar();

  useEffect(() => {
    whoIsOnline();
  }, [!whoAmI]);

  const register = async (user: User) => {
    let res = await fetch("/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },

      body: JSON.stringify(user),
    });
    if (res.status == 400) {
      setUserExists(true);
      console.log("user exists");
      return false;
    }
    if (res.status == 200) {
      setUserExists(false);
      console.log("user was registered");
      setText("Regristrering lyckades!");
      setShowOpenSnackBar(true);
      return true;
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
    if (res.status == 404) {
      setWrongPassword(true);
      return false;
    } else {
      let resUser = await res.json();
      setWhoAmI(resUser);
      whoIsOnline();
      setWrongPassword(false);
      setText("Inloggnig lyckades!");
      setShowOpenSnackBar(true);
      return true;
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
    setWhoAmI(null);
    setText("Utloggning lyckades!");
    setShowOpenSnackBar(true);
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
  };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;

