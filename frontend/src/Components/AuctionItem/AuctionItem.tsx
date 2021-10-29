import Grid from '@mui/material/Grid';
import CircleIcon from '@mui/icons-material/Circle';
import { useHistory } from 'react-router-dom';
import { StyledWrapper, StyledStatus, StyledTitle, StyledText } from './StyledAuctionItem';
import { Auction } from "../../Interfaces/Interfaces";
import Card from '@mui/material/Card';

function AuctionItem({ auction }: Auction) {
  const history = useHistory();
  console.log('what is auction in item ', auction);
  const status = auction.status == 'SOLD' ? 'Såld' : auction.status == 'OPEN' ? 'Pågående' : 'Inte såld';
  const color = auction.status == 'SOLD' ? 'var(--status-green)' : auction.status == 'OPEN' ? 'var(--status-yellow)' : 'var(--status-red)';

  const handleDetailView = () => {
    // history.push(`/auctions/${auction.id}`);
  }

  return (
    <StyledWrapper>
      <Card>
          <Grid container onClick={handleDetailView} style={{margin: '0.5rem'}}>
            <Grid item xs={8} md={10}>
              <StyledTitle>{auction.title}</StyledTitle>
            </Grid>
            <Grid item xs={4} md={2}>
              <StyledStatus><CircleIcon sx={{ color: color }} fontSize="inherit" /> {status}</StyledStatus>
              </Grid>
            <Grid item xs={12}>
              <StyledText>{auction.bids.length > 0 ? auction.bids[auction.bids.length -1].user.username : 'Inga bud'}</StyledText>
            </Grid>
            <Grid item xs={12}>
              <StyledText>{'SEK ' + (auction.bids.length > 0 ? auction.bids[auction.bids.length -1].price : auction.startPrice)}</StyledText>
            </Grid>
          </Grid>
        </Card>
    </StyledWrapper>
  )
}

export default AuctionItem;