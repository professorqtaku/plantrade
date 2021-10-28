import {
  StyledWrapper
} from './StyledMyAuctionsPage';
import { useState, useEffect } from 'react';
import CardContent from '@mui/material/CardContent';
import Collapse from '@mui/material/Collapse';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';
import CardActions from '@mui/material/CardActions';
import { useAuction } from '../../Contexts/AuctionContext';
import AuctionItem from '../../Components/AuctionItem/AuctionItem';


function MyAuctionsPage() {
  const [expandedCurr, setExpandedCurr] = useState(false);
  const [expandedSold, setExpandedSold] = useState(false);
  const [expandedNoSold, setExpandedNoSold] = useState(false);
  const { getUsersAuctions, usersAuctions } = useAuction();

  useEffect(() => {
    handleUsersAuctions();
  }, [])

  useEffect(() => {
    console.log('what is users auctions', usersAuctions)
  }, [usersAuctions])

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
    const { expand, ...other } = props;
    return <IconButton {...other} />;
      })(({ theme, expand }) => ({
        transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
          duration: theme.transitions.duration.shortest,
        }),
}));



  return (
    <div>
      
      <CardActions disableSpacing>
      <Typography paragraph>Aktuella auktioner</Typography>
      <ExpandMore
          expand={expandedCurr}
          onClick={handleExpandCurr}
        >
          <ExpandMoreIcon />
        </ExpandMore>
        </CardActions>
      <Collapse in={expandedCurr} timeout="auto" unmountOnExit>
        {usersAuctions && usersAuctions.map((auction: any) => {
          if (auction.status === 'OPEN') {
            return <AuctionItem key={auction.id} auction={auction} />
          }
        })}
      </Collapse>

      <CardActions disableSpacing>
      <Typography paragraph>Sålda auktioner</Typography>
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

      <CardActions disableSpacing>
      <Typography paragraph>Inte sålda auktioner</Typography>
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


    </div>
  )
}

export default MyAuctionsPage;