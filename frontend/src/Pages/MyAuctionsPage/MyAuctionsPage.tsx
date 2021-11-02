import {
  StyledWrapper,
  StyledCardCurr,
  StyledCardSold,
  StyledCardNoSold,
  StyledBackBtn
} from './StyledMyAuctionsPage';
import { useState, useEffect } from 'react';
import Collapse from '@mui/material/Collapse';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';
import CardActions from '@mui/material/CardActions';
import { useAuction } from '../../Contexts/AuctionContext';
import AuctionItem from '../../Components/AuctionItem/AuctionItem';
import Card from '@mui/material/Card';
import { Auction } from "../../Interfaces/Interfaces";
import Grid from '@mui/material/Grid';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Header from "../../Components/Header/Header";
import { StyledText } from "../MyPage/StyledMyPage";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useHistory } from 'react-router-dom';


function MyAuctionsPage() {
  const [expandedCurr, setExpandedCurr] = useState(false);
  const [expandedSold, setExpandedSold] = useState(false);
  const [expandedNoSold, setExpandedNoSold] = useState(false);
  const { getUsersAuctions, usersAuctions } = useAuction();
  const history = useHistory();

  useEffect(() => {
    handleUsersAuctions();
  }, [])

  const handleUsersAuctions = async () => {
    await getUsersAuctions();
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

  const ExpandMore = styled((props) => {
  const { expand, ...other }: any = props;
  return <IconButton {...other} />;
      })(({ theme, expand}: any) => ({
      transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
  }));



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
            <Card style={{border: 'none'}}>
              <StyledCardCurr isExpanded={expandedCurr}>
                <CardActions disableSpacing>
                  <p>Aktuella auktioner</p>
                  <ExpandMore
                    expand={expandedCurr}
                    onClick={handleExpandCurr}
                    >
                      <KeyboardArrowDownIcon />
                  </ExpandMore>
                </CardActions>
                <Collapse in={expandedCurr} timeout="auto" unmountOnExit>
                  {usersAuctions && usersAuctions.map((auction: Auction) => {
                    if (auction.status === 'OPEN') {
                    return <AuctionItem key={auction.id} auction={auction} />
                  }
                  })}
                </Collapse>
              </StyledCardCurr>
            </Card>
          </Grid>
          
          <Grid item xs={12}>
            <Card>
              <StyledCardSold isExpanded={expandedSold}>
                <CardActions disableSpacing>
                <p>Sålda auktioner</p>
                  <ExpandMore
                    expand={expandedSold}
                    onClick={handleExpandSold}
                  >
                    <ExpandMoreIcon />
                  </ExpandMore>
                </CardActions>
                <Collapse in={expandedSold} timeout="auto" unmountOnExit>
                  {usersAuctions && usersAuctions.map((auction: any) => {
                    if (auction.status === 'SOLD') {
                    return <AuctionItem key={auction.id} auction={auction} />
                  }
                })}
                </Collapse>
              </StyledCardSold>
            </Card>
          </Grid>

          <Grid item xs={12}>
            <Card>
              <StyledCardNoSold isExpanded={expandedNoSold}>
                <CardActions disableSpacing>
                  <p>Inte sålda auktioner</p>
                  <ExpandMore
                    expand={expandedNoSold}
                    onClick={handleExpandNoSold}
                  >
                    <ExpandMoreIcon />
                  </ExpandMore>
                </CardActions>
                <Collapse in={expandedNoSold} timeout="auto" unmountOnExit>
                  {usersAuctions && usersAuctions.map((auction: any) => {
                    if (auction.status === 'NOT_SOLD') {
                    return <AuctionItem key={auction.id} auction={auction} />
                  }   
                })}
                </Collapse>
              </StyledCardNoSold>
            </Card>
          </Grid>
        </Grid>
      </StyledWrapper>
    </>
  )
}

export default MyAuctionsPage;