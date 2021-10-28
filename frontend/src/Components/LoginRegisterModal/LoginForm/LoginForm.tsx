import { BaseSyntheticEvent, FC, useState } from 'react'
import {
  StyledLoginContainer,
  Styledh3,
  StyledForm,
  StyledDiv,
  StyledLoginBtn,
  StyledText,
  StyledPorfileIcon,
  StyledPwIcon,
  StyledDivider,
  StyledSpan,
} from "./StyledLoginForm";
import InputField from '../../InputField/InputField';
import { useAuth } from '../../../Contexts/AuthContext';

interface Props {
  toggleRegister: Function
}

const LoginForm = ({ toggleRegister }: Props) => {
  const { login, wrongPassword } = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: BaseSyntheticEvent) => {
    e.preventDefault();

    const userObj = {
      username: username,
      password: password,
    };
    login(userObj);
  };

  return (
    <StyledLoginContainer>
      <Styledh3>LOGGA IN</Styledh3>
      <StyledForm onSubmit={(e) => handleLogin(e)}>
        <StyledDiv>
          <StyledPorfileIcon />
          <InputField
            label="username"
            updateState={(e) => setUsername(e)}
            value={username}
            required
          />
          <StyledPwIcon />
          <InputField
            label="password"
            marginTop={10}
            type="password"
            updateState={(e) => setPassword(e)}
            value={password}
            required
          />
        </StyledDiv>
        {wrongPassword && <p>Wrong username/password</p>}
        <StyledLoginBtn>Logga in</StyledLoginBtn>
        <StyledDivider />
        <StyledText>
          Har du inte ett konto?{" "}
          <StyledSpan onClick={() => toggleRegister()}>Skapa ett här</StyledSpan>
        </StyledText>
      </StyledForm>
    </StyledLoginContainer>
  );
};

export default LoginForm
