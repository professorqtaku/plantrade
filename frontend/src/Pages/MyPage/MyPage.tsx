import BasicModal from "../../Components/Modal/BaiscModal";
import {
  StyledWrapper
} from "./StyledMyPage";

const MyPage = () => {
  return (
    <StyledWrapper>
      <h3>MyPage</h3>

      <BasicModal>
        <p>LOGGA IN</p>
      </BasicModal>
    </StyledWrapper>
  );
}

export default MyPage;