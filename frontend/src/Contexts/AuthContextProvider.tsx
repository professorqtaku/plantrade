import { createContext, useState} from "react";

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
    
  }
 
 
  
  const values = {
    registerUser,
    login,
    wrongPassword
  }

  return (
    <AuthContext.Provider value={values}>
      { children }
    </AuthContext.Provider>
  );

}