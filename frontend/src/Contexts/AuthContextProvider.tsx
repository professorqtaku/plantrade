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

  const [user, setUser] = useState({});
  

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
    
  }
 
 
  
  const values = {
    registerUser,
    login
  }

  return (
    <AuthContext.Provider value={values}>
      { children }
    </AuthContext.Provider>
  );

}