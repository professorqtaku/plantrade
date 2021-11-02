import Header from '../../Components/Header/Header';
import { StyledText } from "../MyPage/StyledMyPage";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { StyledBackBtn } from '../MyAuctionsPage/StyledMyAuctionsPage';
import { StyledWrapper } from './StyledMyWonAuctionsPage';
import { useHistory } from 'react-router-dom';
import { useAuction } from '../../Contexts/AuctionContext';
import { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import { StyledCardUnpaid, StyledCardPaid} from './StyledMyWonAuctionsPage';
import Card from '@mui/material/Card';
import MyAuctionsCard from '../../Components/MyAuctions/MyAuctionsCard';
import { Auction } from '../../Interfaces/Interfaces';

function MyWonAuctionsPage() {
  const history = useHistory();
  const { getWonAuctionsByUser, usersWonAuctions } = useAuction();
  const [expandedUnpaid, setExpandedUnpaid] = useState(false);
  const [expandedPaid, setExpandedPaid] = useState(false);
  const [unpaidList, setUnpaidList] = useState<Auction[]>();
  const [paidList, setPaidList] = useState<Auction[]>();

  useEffect(() => {
    handleWonAuctions();
  }, []);

  useEffect(() => {
    // handleLists();
    setUnpaidList(usersWonAuctions);
  }, [usersWonAuctions]);

  const handleWonAuctions = async () => {
    await getWonAuctionsByUser();
  }

  const handleLists = () => {
    // use when different status for SOLD and NOT_SOLD
  };

  const handleUnpaid = () => {
    setExpandedUnpaid(!expandedUnpaid);
  };

  const handlePaid = () => {
    setExpandedPaid(!expandedPaid);
  };

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

        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Card elevation={expandedUnpaid ? 0 : 1} onClick={handleUnpaid}>
              <StyledCardUnpaid isExpanded={expandedUnpaid}>
                <MyAuctionsCard title="Obetalda auktioner"
                  expandState={expandedUnpaid}
                  userAuctionsListByStatus={unpaidList}
                />
              </StyledCardUnpaid>
            </Card>
          </Grid>
          
          <Grid item xs={12}>
            <Card elevation={expandedPaid ? 0 : 1} onClick={handlePaid}>
              <StyledCardPaid isExpanded={expandedPaid}>
                <MyAuctionsCard title="Betalda auktioner"
                  expandState={expandedPaid}
                  userAuctionsListByStatus={paidList}
                />
              </StyledCardPaid>
            </Card>
          </Grid>
        </Grid>
      </StyledWrapper>
    </>
  )
}

export default MyWonAuctionsPage;