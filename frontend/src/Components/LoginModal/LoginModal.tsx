import { FormEvent } from "react";
import { useContext, useState } from "react";
import InputField from "../../Components/InputField/InputField";
import { useHistory } from "react-router";
import { AuthContext } from "../../Contexts/AuthContextProvider";
import {
  Styledh3,
  StyledForm,
  StyledDiv,
  StyledLoginBtn,
  StyledPorfileIcon,
  StyledPwIcon,
  StyledSpan,
  StyledDivider,
  StyledLoginContainer,
  StyledText,
} from "../../Pages/MyPage/StyledMyPage";

const LoginModal = ({setShowRegisterForm}: any) => {

  const history = useHistory();
  const { login, wrongPassword, logout, whoAmI } = useContext(AuthContext)
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');


    const handleLogin = (e: FormEvent) => {
    e.preventDefault();

    const userObj = {
      username: username,
      password: password
    }
    login(userObj)
  }


  return (
    <StyledLoginContainer>

          <Styledh3>LOGGA IN</Styledh3>
          <StyledForm onSubmit={e => handleLogin(e)}>
            <StyledDiv>
              <StyledPorfileIcon /><InputField label="username" updateState={e => setUsername(e)} value={username} required/>
              <StyledPwIcon /><InputField label="password" marginTop={10} type="password" updateState={e => setPassword(e)} value={password} required/>
            </StyledDiv>
            {wrongPassword && <p>Wrong username/password</p>}
            <StyledLoginBtn>Logga in</StyledLoginBtn>
            <StyledDivider />
            <StyledText>Har du inte ett konto? <StyledSpan onClick={() => setShowRegisterForm(true)}>Skapa ett</StyledSpan></StyledText>
          </StyledForm>

        </StyledLoginContainer> 
  );
}
export default LoginModal;