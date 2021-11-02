import {
  StyledWrapper,
  StyledCardCurr,
  StyledCardSold,
  StyledCardNoSold,
  StyledBackBtn
} from './StyledMyAuctionsPage';
import { useState, useEffect } from 'react';
import { useAuction } from '../../Contexts/AuctionContext';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import Header from "../../Components/Header/Header";
import { StyledText } from "../MyPage/StyledMyPage";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useHistory } from 'react-router-dom';
import MyAuctionsCard from '../../Components/MyAuctions/MyAuctionsCard';
import { Auction } from '../../Interfaces/Interfaces';


function MyAuctionsPage() {
  const [expandedCurr, setExpandedCurr] = useState(false);
  const [expandedSold, setExpandedSold] = useState(false);
  const [expandedNoSold, setExpandedNoSold] = useState(false);
  const { getUsersAuctions, usersAuctions } = useAuction();
  const history = useHistory();
  const [openList, setOpenList] = useState<Auction[]>();
  const [soldList, setSoldList] = useState<Auction[]>();
  const [unSoldList, setUnSoldList] = useState<Auction[]>();

  useEffect(() => {
    handleUsersAuctions();
  }, [])

  useEffect(() => {
    handleLists();
  }, [usersAuctions])

  const handleUsersAuctions = async () => {
    await getUsersAuctions();
  }

  const handleLists = () => {
    usersAuctions && usersAuctions.map((auction: Auction) => {
      if (auction.status === 'OPEN') {
        if (!openList) {
          setOpenList([auction]);
        } else {
          setOpenList([...openList, auction]);
        }
      } else if (auction.status === 'SOLD') {
        if (!soldList) {
          setSoldList([auction]);
        } else {
          setSoldList([...soldList, auction]);
        }
      } else if (auction.status === 'NOT_SOLD') {
        if (!unSoldList) {
          setUnSoldList([auction]);
        } else {
          setUnSoldList([...unSoldList, auction]);
        }
      }
    });
  }

  const handleExpandCurr = () => {
    setExpandedCurr(!expandedCurr);
  };

  const handleExpandSold = () => {
    setExpandedSold(!expandedSold);
  };

  const handleExpandNoSold = () => {
    setExpandedNoSold(!expandedNoSold);
  };

  return (
    <>
      <Header grid={true} gridColumns="1fr 1fr">
        <StyledText color="white" size="2rem" margin="1rem">
          Mina auktioner
        </StyledText>
      </Header>
      <StyledWrapper>
        <StyledBackBtn onClick={() => history.push('/my-page') }>
          <ArrowBackIosIcon />
          Tillbaka
        </StyledBackBtn>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Card elevation={expandedCurr ? 0 : 1}>
              <StyledCardCurr isExpanded={expandedCurr}>
                <MyAuctionsCard title="Pågående auktioner"
                  expandState={expandedCurr}
                  expandFunction={handleExpandCurr}
                  userAuctionsListByStatus={openList}
                />
              </StyledCardCurr>
            </Card>
          </Grid>
          
          <Grid item xs={12}>
            <Card elevation={expandedSold ? 0 : 1}>
              <StyledCardSold isExpanded={expandedSold}>
                <MyAuctionsCard title="Sålda auktioner"
                  expandState={expandedSold}
                  expandFunction={handleExpandSold}
                  userAuctionsListByStatus={soldList}
                />
              </StyledCardSold>
            </Card>
          </Grid>

          <Grid item xs={12}>
            <Card elevation={expandedNoSold ? 0 : 1}>
              <StyledCardNoSold isExpanded={expandedNoSold}>
                <MyAuctionsCard title="Inte sålda auktioner"
                  expandState={expandedNoSold}
                  expandFunction={handleExpandNoSold}
                  userAuctionsListByStatus={unSoldList}
                />
              </StyledCardNoSold>
            </Card>
          </Grid>
        </Grid>
      </StyledWrapper>
    </>
  )
}

export default MyAuctionsPage;