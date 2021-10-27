import { FormEvent } from "react";
import { useRef, useContext } from "react";
import { useHistory } from "react-router";
import BasicModal from "../../Components/Modal/BaiscModal";
import Divider from '@mui/material/Divider';
import { AuthContext } from "../../Contexts/AuthContextProvider";
import {
  StyledWrapper,
  Styledh3,
  StyledForm,
  StyledDiv,
  StyledInput,
  StyledLoginBtn,
  StyledPorfileIcon,
  StyledPwIcon,
  StyledText,
  StyledSpan,
  StyledDivider
} from "./StyledMyPage";

const MyPage = () => {

  const history = useHistory();
  const { login, wrongPassword, logout, whoAmI } = useContext(AuthContext)
  const usernameRef = useRef<any>();
  const passwordRef = useRef<any>();

  const handleLogin = (e: FormEvent) => {
    e.preventDefault();

    const userObj = {
      username: usernameRef.current.value,
      password: passwordRef.current.value
    }
    login(userObj)
  }

  const handleLogout = () => {
    logout();
    history.push('/')
  }

  return (
    <StyledWrapper>
      <h3>MyPage</h3>
      {whoAmI && whoAmI.username ? <p>Välkommen, {whoAmI.username}</p> : ''}
      {whoAmI ? <button onClick={handleLogout}>Logga ut</button> : 'Not logged in'}
      <BasicModal>
        <Styledh3>LOGGA IN</Styledh3>
        <StyledForm onSubmit={e => handleLogin(e)}>
        <StyledDiv>
          <StyledPorfileIcon/><StyledInput required ref={usernameRef} type="text" placeholder="Användarnamn" />
          <StyledPwIcon/><StyledInput required ref={passwordRef} type="password" placeholder="Lösenord" />
          </StyledDiv>
          {wrongPassword && <p>Wrong username/password</p>}
          <StyledLoginBtn>Logga in</StyledLoginBtn>
          <StyledDivider />
          <StyledText>Har du inte ett konto? <StyledSpan onClick={() => history.push('/register')}>Skapa ett</StyledSpan></StyledText>
        </StyledForm>
      </BasicModal>

    </StyledWrapper>
  );
}

export default MyPage;