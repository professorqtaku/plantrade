import { FormEvent } from "react";
import { MutableRefObject } from "react";
import { useRef, useContext} from "react";
import BasicModal from "../../Components/Modal/BaiscModal";
import { AuthContext } from "../../Contexts/AuthContextProvider";
import {
  StyledWrapper,
  Styledh3,
  StyledForm,
  StyledDiv,
  StyledInput,
  StyledLoginBtn,
  StyledPorfileIcon,
  StyledPwIcon
} from "./StyledMyPage";

const MyPage = () => {

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

  return (
    <StyledWrapper>
      <h3>MyPage</h3>
      {whoAmI.username ? <p>Välkommen, {whoAmI.username}</p> : ''}
      <button onClick={() => logout()}>Logga ut</button>
      <BasicModal>
        <Styledh3>LOGGA IN</Styledh3>
        <StyledForm onSubmit={e => handleLogin(e)}>
        <StyledDiv>
          <StyledPorfileIcon/><StyledInput ref={usernameRef} type="text" placeholder="Användarnamn" />
          <StyledPwIcon/><StyledInput ref={passwordRef} type="password" placeholder="Lösenord" />
          </StyledDiv>
          {wrongPassword && <p>Wrong username/password</p>}
            <StyledLoginBtn>Logga in</StyledLoginBtn>
        </StyledForm>
      </BasicModal>

    </StyledWrapper>
  );
}

export default MyPage;