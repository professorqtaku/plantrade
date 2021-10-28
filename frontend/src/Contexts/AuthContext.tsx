import { createContext, useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import { useModal } from "./ModalContext";

interface Props {
  children?: JSX.Element
}

type User = {
  username: string,
  email?: string,
  password: string
}
export const AuthContext = createContext<any>(null);
export const useAuth = () => useContext(AuthContext);
  
export const AuthProvider: React.FC<Props> = ({ children }: Props) => {
  const [whoAmI, setWhoAmI] = useState(null);
  const [wrongPassword, setWrongPassword] = useState(false);
  const [userExists, setUserExists] = useState(false);

  useEffect(() => {
    whoIsOnline();
    console.log(whoAmI, 'who?')
  },[!whoAmI]);


  const register = async (user: User) => {
    let res = await fetch("/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },

      body: JSON.stringify(user),
    });
    if (res.status == 400) {
      setUserExists(true);
      console.log("user exists");
      return false
    }
    if (res.status == 200) {
      setUserExists(false);
      console.log("user was registered");
      return true
    }
  };

  const login = async (user: User) => {
    let res = await fetch("/api/login", {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user)
    })
    if(res.status == 404) {
      setWrongPassword(true)
    } else {
      let resUser = await res.json();
      setWhoAmI(resUser);
      whoIsOnline();
      setWrongPassword(false);
    }

  }
 
  const whoIsOnline = () => {
    fetch('/api/whoami')
      .then(res => res.json()
        .then(data => {
          if (!data) {
            setWhoAmI(null);
            return null;
          }
          setWhoAmI({ ...data });
          return data;
        }));
  }

  const logout = async () => {
    await fetch('/api/logout', {
      method: 'DELETE',
      headers: { 'content-type': 'application/json' },
    })
    setWhoAmI(null);
  }
  
  const values = {
    register,
    login,
    logout,
    wrongPassword,
    setWrongPassword,
    userExists,
    whoIsOnline,
    whoAmI
  }

  return (
    <AuthContext.Provider value={values}>
      { children }
    </AuthContext.Provider>
  );

}