import Header from '../../Components/Header/Header';
import { StyledText } from "../MyPage/StyledMyPage";

function MyWonAuctionsPage() {
  return (
    <Header grid={true} gridColumns="1fr 1fr">
        <StyledText color="white" size="2rem" margin="1rem">
          Mina vunna auktioner
        </StyledText>
      </Header>
  )
}

export default MyWonAuctionsPage;