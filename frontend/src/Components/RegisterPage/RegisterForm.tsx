import { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthContextProvider";
import InputField from "../../Components/InputField/InputField";
import {
  StyledWrapper,
  StyledForm,
  StyledInput,
  StyledBtn,
  StyledPorfileIcon,
  StyledPwIcon,
  StyledEmailIcon,
  StyledInputDiv,
  StyledTitle,
  StyledText
} from "./StyledRegisterForm";

interface User {
  username: string,
  email: string,
  password: string
}

const RegisterForm = () => {

  const { registerUser, userExists } = useContext(AuthContext)
  const history = useHistory();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
 
    const userObject: User = {
      username: username,
      email: email,
      password: password
    }
    registerUser(userObject);
  }

  return (
    <StyledWrapper>
      <StyledTitle>Skapa Konto</StyledTitle>
      <StyledForm onSubmit={e => handleRegister(e)}>

        <StyledInputDiv>

          <StyledPorfileIcon /><InputField value={username} label="username" updateState={e => setUsername(e)} required/>
        <StyledEmailIcon/><InputField value={email} label="email" updateState={e => setEmail(e)} required/>
        <StyledPwIcon/><InputField value={password} type="password" label="password" updateState={e => setPassword(e)} required/>     
        </StyledInputDiv>
        {userExists && <StyledText>The user already exists.</StyledText>}
        <StyledBtn>Skapa Konto</StyledBtn>
      </StyledForm>
    </StyledWrapper>
  );
}

export default RegisterForm;