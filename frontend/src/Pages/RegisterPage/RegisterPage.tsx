import { useRef, useContext } from "react";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthContextProvider";
import {
  StyledWrapper,
  StyledForm,
  StyledInput
} from "./StyledRegisterPage";

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
    // history.push('/');
  }

  return (
    <StyledWrapper>
      <h3>Register Page</h3>
      <StyledForm onSubmit={(e) => handleRegister(e)}>

        <StyledInput ref={usernameRef} required type="text" placeholder="Username" />
        <StyledInput ref={emailRef} required type="email" placeholder="Email" />
        <StyledInput ref={passwordRef} required type="password" placeholder="Password" />

        <button>Skapa Konto</button>
      </StyledForm>
    </StyledWrapper>
  );
}

export default RegisterPage;