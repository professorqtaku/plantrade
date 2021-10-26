import { FormEvent } from "react";
import BasicModal from "../../Components/Modal/BaiscModal";
import {
  StyledWrapper,
  Styledh3
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
        <form onSubmit={e => handleLogin(e)}>
          <input type="text" placeholder="Användarnamn" />
          <input type="password" placeholder="Lösenord" />
          <button>Logga in</button>
        </form>
      </BasicModal>

    </StyledWrapper>
  );
}

export default MyPage;