import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import Grid from '@mui/material/Grid';
import SkeletonCard from '../../Components/AuctionCard/utils/SkeletonCard';
import { useAuction } from '../../Contexts/AuctionContext';
import Input from '@mui/material/Input';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ImageCarousel from '../../Components/AuctionCard/utils/ImageCarousel';
import ExpandableDescriptionBox from '../../Components/AuctionCard/utils/ExpandableDescriptionBox';
import {
  StyledWrapper,
  StyledPrice,
  StyledBidInput,
  StyledBidBtn,
  StyledBackBtn
} from "./StyledAuctionDetailPage";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useHistory } from 'react-router-dom'

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
  const history = useHistory();

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

  const handleChat = () => {
    console.log('I want to chat with the seller')
  }

  return (
    <StyledWrapper>
      {!auction ? <SkeletonCard /> :
        (<>
          <StyledBackBtn>
            <p onClick={() => history.push('/auctions')}><ArrowBackIosIcon />Tillbaka</p>
          </StyledBackBtn>
          <Grid container spacing={2}>
            <Grid item xs={12} md={12}>
            <ImageCarousel images={auction.images} />
          </Grid>
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
            <div onClick={handleChat} style={{cursor: 'pointer'}}>Chatta med säljare <ChatBubbleOutlineIcon /></div>
          </Grid>
          <Grid item xs={6} md={8}>
            <div>{new Date(auction.endDate).toLocaleString('sv-SV')}</div>
          </Grid>
          <Grid item xs={6} md={4}>
            <div></div>
          </Grid>
          <Grid item xs={12} md={6}>
            <ExpandableDescriptionBox {...auction.description} />
          </Grid>
          <Grid item md={6}>
            <div></div>
          </Grid>
          <Grid item xs={12} md={12}>
            <StyledPrice>{auction.bids.length ? auction.bids[auction.bids.length - 1] : auction.startPrice} Kr<br />
              {auction.bids.length? "Högsta bud" : "Startpris"}</StyledPrice>
          </Grid>
          <Grid item xs={6} md={6}>
            <StyledBidInput><Input placeholder="Ditt pris" inputProps={ariaLabel} onChange={(e: any) => setBid(e.target.value)} /> Kr</StyledBidInput>
          </Grid>
          <Grid item xs={6} md={6}>
            <StyledBidBtn onClick={handleBid} style={{cursor: 'pointer'}}>Buda</StyledBidBtn>
          </Grid>
        </Grid></>)}
    </StyledWrapper>
  );
}

export default AuctionDetailPage;