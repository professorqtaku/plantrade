import { createContext, useState, useEffect} from "react";

interface Props {
  children?: JSX.Element
}

type User = {
  username: string,
  email?: string,
  password: string
}
export const AuthContext = createContext<any>(null);
  
export const AuthProvider: React.FC<Props> = ({ children }: Props) => {

  const [whoAmI, setWhoAmI] = useState({});
  const [wrongPassword, setWrongPassword] = useState(false);


  useEffect(() => {
    whoIsOnline();
    console.log(whoAmI, 'online?')
  },[!whoAmI]);


  const registerUser = async (user: User) => {
    let res = await fetch("/api/register", {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    
      body: JSON.stringify(user)
    })
  }

  const login = async (user: User) => {
    let res = await fetch("/api/login", {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user)
    })
       if(res.status == 404) {
      setWrongPassword(true)
       }
    let resUser = await res.json();
    setWhoAmI(resUser)
    console.log(resUser , 'user?')
    console.log(whoAmI , 'who?')
    
  }
 
  const whoIsOnline = () => {
    fetch('/api/whoami')
      .then(res => res.json()
      .then(data => setWhoAmI(data)));
  }

    const logout = async () => {
    fetch('/api/logout', {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    }) 
  }
 
  
  const values = {
    registerUser,
    login,
    logout,
    wrongPassword,
    whoIsOnline,
    whoAmI
  }

  return (
    <AuthContext.Provider value={values}>
      { children }
    </AuthContext.Provider>
  );

}