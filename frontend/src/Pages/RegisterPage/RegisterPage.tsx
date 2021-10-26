import { useRef, useContext } from "react";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthContextProvider";
import { StyledWrapper } from "./StyledRegisterPage";

interface User {
  username: string,
  email: string,
  password: string
}

const RegisterPage = () => {

  const { registerUser } = useContext(AuthContext)
  const history = useHistory();
  const usernameRef = useRef<any>();
  const emailRef = useRef<any>();
  const passwordRef = useRef<any>();

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
 
    const userObject: User = {
      username: usernameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value
    }
    
    await registerUser(userObject);
    history.push('/');
  }

  return (
    <StyledWrapper>
      <h3>Register Page</h3>
      <form onSubmit={(e) => handleRegister(e)}>

        <input ref={usernameRef} type="text" placeholder="Username" />
        <input ref={emailRef} type="email" placeholder="Email" />
        <input ref={passwordRef} type="password" placeholder="Password" />

        <button>Skapa Konto</button>
      </form>
    </StyledWrapper>
  );
}

export default RegisterPage;