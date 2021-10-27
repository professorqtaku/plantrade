import { useRef, useContext } from "react";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthContextProvider";
import {
  StyledWrapper,
  StyledForm,
  StyledInput,
  StyledBtn,
  StyledPorfileIcon,
  StyledPwIcon,
  StyledEmailIcon,
  StyledInputDiv,
  StyledTitle
} from "./StyledRegisterForm";

interface User {
  username: string,
  email: string,
  password: string
}

const RegisterForm = () => {

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
      <StyledTitle>Skapa Konto</StyledTitle>
      <StyledForm onSubmit={(e) => handleRegister(e)}>

        <StyledInputDiv>

        <StyledPorfileIcon/><StyledInput ref={usernameRef} required type="text" placeholder="Username" />
        <StyledPwIcon/><StyledInput ref={emailRef} required type="email" placeholder="Email" />
        <StyledEmailIcon/><StyledInput ref={passwordRef} required type="password" placeholder="Password" />

        </StyledInputDiv>

        <StyledBtn>Skapa Konto</StyledBtn>
      </StyledForm>
    </StyledWrapper>
  );
}

export default RegisterForm;