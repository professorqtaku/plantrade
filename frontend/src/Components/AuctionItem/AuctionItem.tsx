import Grid from '@mui/material/Grid';
import CircleIcon from '@mui/icons-material/Circle';
import { useHistory } from 'react-router-dom';
import { StyledWrapper } from './StyledAuctionItem';

function AuctionItem({ auction }: any) {
  const history = useHistory();
  console.log('what is auction in item ', auction);
  // auction = {
  //   title: 'Auction title',
  //   status: 'OPEN',
  // }
  const status = auction.status == 'SOLD' ? 'Såld' : auction.status == 'OPEN' ? 'Pågående' : 'Inte såld';
  const color = auction.status == 'SOLD' ? '#086E3D' : auction.status == 'OPEN' ? '#FBDB0D' : '#B3280D';

  const handleDetailView = () => {
    // history.push(`/auction/${auction.id}`);
  }

  // console.log('title', data.auction.title)
  return (
    <StyledWrapper>
      <Grid container spacing={2} onClick={handleDetailView}>
        <Grid item xs={8} md={10}>
          <div>{auction.title}</div>
        </Grid>
        <Grid item xs={4} md={2}>
          <p><CircleIcon sx={{ color: color }} fontSize="small" />{status}</p>
          </Grid>
        <Grid item xs={12}>
          <div>{auction.bids.length > 0 ? auction.bids[auction.bids.length -1].user.username : 'Inga bud'}</div>
        </Grid>
        <Grid item xs={12}>
          <div>{(auction.bids.length > 0 ? auction.bids[auction.bids.length -1].price : auction.startPrice) + ' Kr'}</div>
        </Grid>
      </Grid>
    </StyledWrapper>
  )
}

export default AuctionItem;