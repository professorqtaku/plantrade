import Header from '../../Components/Header/Header';
import { StyledText } from "../MyPage/StyledMyPage";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { StyledBackBtn } from '../MyAuctionsPage/StyledMyAuctionsPage';
import { StyledWrapper } from './StyledMyWonAuctionsPage';
import { useHistory } from 'react-router-dom';
import { useAuction } from '../../Contexts/AuctionContext';
import { useEffect, useState } from 'react';

function MyWonAuctionsPage() {
  const history = useHistory();
  const { getWonAuctionsByUser, usersWonAuctions } = useAuction();

  useEffect(() => {
    handleWonAuctions();
  }, []);

  const handleWonAuctions = async () => {
    await getWonAuctionsByUser();
  }

  return (
    <>
    <Header grid={true} gridColumns="1fr 1fr">
        <StyledText color="white" size="2rem" margin="1rem">
          Mina vunna auktioner
        </StyledText>
      </Header>
      <StyledWrapper>
        <StyledBackBtn onClick={() => history.push('/my-page') }>
          <ArrowBackIosIcon />
          Tillbaka
        </StyledBackBtn>
      </StyledWrapper>
    </>
  )
}

export default MyWonAuctionsPage;