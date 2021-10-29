import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import Grid from '@mui/material/Grid';
import SkeletonCard from '../../Components/SkeletonCard/SkeletonCard';
import { useAuction } from '../../Contexts/AuctionContext';
import { useBid, Bid } from '../../Contexts/BidContext';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import ImageCarousel from '../../Components/ImageCarousel/ImageCarousel';
import ExpandableDescriptionBox from '../../Components/ExpandableDesc/ExpandableDescriptionBox';
import {
  StyledWrapper,
  StyledPrice,
  StyledPriceTitle,
  StyledBidBtn,
  StyledBackBtn,
  StyledTitle,
  StyledUnderTitle,
  StyleChatIcon,
  StyleImg,
  StyledIcon,
  StyledDate,
  StyledParagraph,
  StyledAccessTimeOutlinedIcon,
  StyledCalendarTodayOutlinedIcon
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
          <StyledBackBtn onClick={() => history.push('/auctions')}>
            <ArrowBackIosIcon />
            Tillbaka
          </StyledBackBtn>
          <Grid container spacing={2}>
            <Grid item xs={12} md={12}>
              <StyleImg src="https://cdn.shopify.com/s/files/1/0410/5696/0672/products/chocolatecovered-1_600x503.jpg?v=1592089346" />
            {/* <ImageCarousel images={auction.images} /> */}
            </Grid>
            {/* <Grid item xs={6} md={8}>
              <div>first</div>
            </Grid>
            <Grid item xs={6} md={4}>
              <p>{auction.host.username}</p>
            </Grid> */}
            <Grid item xs={8} md={8}>
              <StyledTitle>{auction.title}</StyledTitle>
              {/* <StyledUnderTitle>Säljs av {auction.host.username}</StyledUnderTitle> */}
            </Grid>
            <Grid item xs={4} md={4}>
              <StyleChatIcon>
                  <StyledIcon>
                    <ChatBubbleOutlineIcon onClick={handleChat} />
                  </StyledIcon>
                </StyleChatIcon>
            </Grid>
            <Grid item xs={8} md={8}>
              <StyledUnderTitle>Sluttid</StyledUnderTitle>
              <StyledDate>
                <StyledCalendarTodayOutlinedIcon><CalendarTodayOutlinedIcon /></StyledCalendarTodayOutlinedIcon>
                {new Date(auction?.endDate).toLocaleDateString('sv-SV')}</StyledDate>
              <StyledDate>
                <StyledAccessTimeOutlinedIcon><AccessTimeOutlinedIcon/></StyledAccessTimeOutlinedIcon>
                {new Date(auction?.endDate).toLocaleTimeString('sv-SV')}
              </StyledDate>
            </Grid>
            <Grid item xs={4} md={4}>
              <StyledPrice>SEK {currentBid}</StyledPrice>
              <StyledPriceTitle>{auction.bids.length ? "Högsta budet" : "Startpris"}</StyledPriceTitle>
            </Grid>
            <Grid item xs={12} md={6}>
                <StyledUnderTitle>Beskrivning</StyledUnderTitle>
                <StyledParagraph>{auction.description}</StyledParagraph>
                {/* <ExpandableDescriptionBox description={auction.description} /> */}
            </Grid>
            <Grid item xs={12} md={12} >
              #tags
            </Grid>
            <Grid item xs={6} md={6}>
              <InputField label="Lägg ett bud" type="number" value={bid} updateState={setBid} />
            </Grid>
            <Grid item xs={6} md={6}>
              <StyledBidBtn onClick={handleBid}>Buda</StyledBidBtn>
            </Grid>
        </Grid></>)}
    </StyledWrapper>
  );
}

export default AuctionDetailPage;
