import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import Grid from '@mui/material/Grid';
import SkeletonCard from '../../Components/AuctionCard/SkeletonCard';
import { useAuction } from '../../Contexts/AuctionContext';
import Input from '@mui/material/Input';
import {
  StyledWrapper,
  StyledGridLeft,
  StyledGridRight,
  StyledPrice,
  StyledBidInput,
  StyledBidBtn
} from "./StyledAuctionDetailPage";
import { BluetoothDisabled } from '@mui/icons-material';

interface Auction {
  id: Number,
  title: String,
  description: String,
  startPrice: Number,
  status: String,
  endDate: Date,
  host: {
    id: String,
    username: String
  },
  categories: [],
  bids: [],
  images: []
}


const AuctionDetailPage = () => {
  const { id }: any = useParams();
  const { getAuctionById } = useAuction();
  const [auction, setAuction] = useState<Auction>();
  const [bid, setBid] = useState<number>();
  const ariaLabel = { 'aria-label': 'description' };

  useEffect(() => {
    handleGetAuctionById();
  }, [])

  const handleGetAuctionById = async () => {
    const res = await getAuctionById(id);
    setAuction(res);
    console.log(res, 'what do we get here')
  }

  const handleBid = async () => {
    if (!bid || isNaN(bid)) {
      console.log('Bid is empty or not a number, send error message');
      return;
    }
    console.log('I want to bid')
  }


  return (
    <StyledWrapper>
      {!auction ? <SkeletonCard /> :
        (<Grid container spacing={2}>
          <Grid item xs={6} md={8}>
            <div></div>
          </Grid>
          <Grid item xs={6} md={4}>
            <div>{auction.host.username}</div>
          </Grid>
          <Grid item xs={6} md={8}>
            <div>{auction.title}</div>
          </Grid>
          <Grid item xs={6} md={4}>
            <div>Chatta med säljare</div>
          </Grid>
          <Grid item xs={6} md={8}>
            <div>{auction.endDate}</div>
          </Grid>
          <Grid item xs={6} md={4}>
            <div>xs=6 md=8</div>
          </Grid>
          <Grid item xs={12} md={12}>
            <StyledPrice>{auction.bids.length ? auction.bids[auction.bids.length - 1] : auction.startPrice} Kr<br />
              {auction.bids.length? "Högsta bud" : "Startpris"}</StyledPrice>
          </Grid>
          <Grid item xs={6} md={6}>
            <StyledBidInput><Input placeholder="Ditt pris" inputProps={ariaLabel} onChange={(e: any) => setBid(e.target.value)} /> Kr</StyledBidInput>
          </Grid>
          <Grid item xs={6} md={6}>
            <StyledBidBtn onClick={handleBid}>Buda</StyledBidBtn>
          </Grid>
        </Grid>)}
    </StyledWrapper>
  );
}

export default AuctionDetailPage;