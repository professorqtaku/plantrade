import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import Grid from '@mui/material/Grid';
import SkeletonCard from '../../Components/SkeletonCard/SkeletonCard';
import { useAuction } from '../../Contexts/AuctionContext';
import { useBid, Bid } from '../../Contexts/BidContext';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ImageCarousel from '../../Components/ImageCarousel/ImageCarousel';
import ExpandableDescriptionBox from '../../Components/ExpandableDesc/ExpandableDescriptionBox';
import {
  StyledWrapper,
  StyledPrice,
  StyledBidInput,
  StyledBidBtn,
  StyledBackBtn
} from "./StyledAuctionDetailPage";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useHistory } from 'react-router-dom'
import InputField from '../../Components/InputField/InputField';

interface Auction {
  id: Number,
  title: String,
  description: String,
  startPrice: number | undefined,
  status: String,
  endDate: Date,
  host: {
    id: String,
    username: String
  },
  categories: [],
  bids: Array<Bid>,
  images: []
}

const AuctionDetailPage = () => {
  const ariaLabel = { 'aria-label': 'description' };
  const { id }: any = useParams();
  const history = useHistory();
  
  const [auction, setAuction] = useState<Auction | undefined>();
  const [bid, setBid] = useState<string>('');
  const [currentBid, setCurrentBid] = useState<number>(0);

  const { getAuctionById } = useAuction();
  const { createBid } = useBid();

  useEffect(() => {
    handleGetAuctionById();
  }, [])

  const handleGetAuctionById = async () => {
    const res = await getAuctionById(id);
    setAuction(res);
    if (res.bids.length) {
      setCurrentBid(res.bids.pop(res.bids.length - 1).price)
    } else {
      setCurrentBid(res.startPrice)
    }
  }

  const handleBid = async () => {

    const newBid = {
      // update to userId who is logged in
      userId: 5,
      auctionId: auction?.id,
      price: parseInt(bid),
      createdDate: Date.now()
    }

    await createBid(newBid);
    //rerender the new currently highest bid
    handleGetAuctionById();
    setBid('')
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
            {/* <ImageCarousel images={auction.images} /> */}
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
            {/* <ExpandableDescriptionBox {...auction.description} /> */}
          </Grid>
          <Grid item md={6}>
            <div></div>
          </Grid>
          <Grid item xs={12} md={12}>
            <StyledPrice>
              <p>{currentBid} SEK</p>
              {auction.bids.length ? "Högsta bud" : "Startpris"}
            </StyledPrice>
          </Grid>
          <Grid item xs={6} md={6}>
            <StyledBidInput>
              <InputField label="Lägg ett bud" type="number" value={bid} updateState={setBid} />
            </StyledBidInput>
          </Grid>
          <Grid item xs={6} md={6}>
            <StyledBidBtn onClick={handleBid} style={{cursor: 'pointer'}}>Buda</StyledBidBtn>
          </Grid>
        </Grid></>)}
    </StyledWrapper>
  );
}

export default AuctionDetailPage;