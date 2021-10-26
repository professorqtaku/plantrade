import { FormEvent } from "react";
import BasicModal from "../../Components/Modal/BaiscModal";
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

  const handleLogin = (e: FormEvent) => {
    e.preventDefault();

    console.log("login logic here..")
  }

  return (
    <StyledWrapper>
      <h3>MyPage</h3>

      <BasicModal>
        <Styledh3>LOGGA IN</Styledh3>
        <StyledForm onSubmit={e => handleLogin(e)}>
        <StyledDiv>
          <StyledPorfileIcon/><StyledInput type="text" placeholder="Användarnamn" />
          <StyledPwIcon/><StyledInput type="password" placeholder="Lösenord" />
          </StyledDiv>
            <StyledLoginBtn>Logga in</StyledLoginBtn>
        </StyledForm>
      </BasicModal>

    </StyledWrapper>
  );
}

export default MyPage;