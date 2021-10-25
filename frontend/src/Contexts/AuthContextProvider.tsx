import { createContext, useContext, useState} from "react";

interface Props {
  children?: JSX.Element
}

export const AuthProvider: React.FC<Props> = ({children}) => {

  const AuthContext = createContext<any>(null);



  const values = {
    
  }

  return (
    <AuthContext.Provider value={values}>
      { children }
    </AuthContext.Provider>
  );

}