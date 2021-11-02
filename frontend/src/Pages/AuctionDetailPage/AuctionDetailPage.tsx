import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useAuction } from "../../Contexts/AuctionContext";
import { useBid } from "../../Contexts/BidContext";
import { useAuth } from "../../Contexts/AuthContext";
import { Auction } from "../../Interfaces/Interfaces";
import Grid from "@mui/material/Grid";
import SkeletonCard from "../../Components/SkeletonCard/SkeletonCard";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import CommentIcon from "@mui/icons-material/Comment";
import InputField from "../../Components/InputField/InputField";
import ImageCarousel from "../../Components/ImageCarousel/ImageCarousel";
import ExpandableDescriptionBox from "../../Components/ExpandableDesc/ExpandableDescriptionBox";
import ButtonComp from "../../Components/Button/ButtonComp";
import {
  StyledWrapper,
  StyledPrice,
  StyledPriceTitle,
  StyledBackBtn,
  StyledTitle,
  StyledUnderTitle,
  StyledChat,
  StyledChatIcon,
  StyleImg,
  StyledDate,
  StyledAccessTimeOutlinedIcon,
  StyledCalendarTodayOutlinedIcon,
  StyledForm,
} from "./StyledAuctionDetailPage";

const AuctionDetailPage = () => {
  const { id }: any = useParams();
  const history = useHistory();

  const { getAuctionById } = useAuction();
  const { createBid } = useBid();
  const { whoAmI } = useAuth();

  const [auction, setAuction] = useState<Auction | undefined>();
  const [bid, setBid] = useState<string>("");
  const [currentBid, setCurrentBid] = useState<number>(0);
  const [endDate, setEndDate] = useState<string>();
  const [endTime, setEndTime] = useState<string>();
  const [bidText, setBidText] = useState<string>("");
  const [isHost, setIsHost] = useState<boolean>(false);
  const [isOverPrice, setIsOverPrice] = useState(false);

  useEffect(() => {
    handleGetAuctionById();
  }, []);

  const handleGetAuctionById = async () => {
    const res = await getAuctionById(id);
    setAuction(res);
    setEndDate(new Date(res.endDate).toLocaleDateString("sv-SV"));
    setEndTime(new Date(res.endDate).toLocaleTimeString("sv-SV"));

    if (whoAmI && whoAmI.id == res.host.id) {
      setIsHost(true);
    }

    if (res.bids.length) {
      setCurrentBid(res.bids.pop(res.bids.length - 1).price);
      setBidText("Högsta budet");
    } else {
      setCurrentBid(res.startPrice);
      setBidText("Startpris");
    }
  };

  const handleBid = async (e: any) => {
    e.preventDefault();
    if (whoAmI == null) return;
    if (parseInt(bid) > currentBid * 2) {
      setIsOverPrice(true);
      return;
    }

    const newBid = {
      userId: whoAmI.id,
      auctionId: auction?.id,
      price: parseInt(bid),
      createdDate: Date.now(),
    };

    await createBid(newBid);
    //rerender the new currently highest bid
    handleGetAuctionById();
    setBid("");
  };

  const handleChat = () => {
    console.log("I want to chat with the seller");
  };

  return (
    <StyledWrapper>
      {!auction ? (
        <SkeletonCard />
      ) : (
        <>
          <StyledBackBtn onClick={() => history.push("/auctions")}>
            <ArrowBackIosIcon />
            Tillbaka
          </StyledBackBtn>
          <Grid container spacing={2}>
            <Grid item xs={12} md={12}>
              {/* Remove when ImageCarousel is in place */}
              <StyleImg src="https://cdn.shopify.com/s/files/1/0410/5696/0672/products/chocolatecovered-1_600x503.jpg?v=1592089346" />
              {/* <ImageCarousel images={auction.images} /> */}
            </Grid>
            <Grid item xs={8} md={8}>
              <StyledTitle>{auction.title}</StyledTitle>
            </Grid>
            <Grid item xs={4} md={4}>
              <StyledChat onClick={handleChat}>
                <StyledChatIcon>
                  <CommentIcon />
                </StyledChatIcon>
              </StyledChat>
            </Grid>
            <Grid item xs={8} md={8}>
              <StyledUnderTitle>Sluttid</StyledUnderTitle>
              <StyledDate>
                <StyledCalendarTodayOutlinedIcon>
                  <CalendarTodayOutlinedIcon />
                </StyledCalendarTodayOutlinedIcon>
                {endDate}
              </StyledDate>
              <StyledDate>
                <StyledAccessTimeOutlinedIcon>
                  <AccessTimeOutlinedIcon />
                </StyledAccessTimeOutlinedIcon>
                {endTime}
              </StyledDate>
            </Grid>
            <Grid item xs={4} md={4}>
              <StyledPrice>SEK {currentBid}</StyledPrice>
              <StyledPriceTitle>{bidText}</StyledPriceTitle>
            </Grid>
            <Grid item xs={12} md={6}>
              <StyledUnderTitle>Beskrivning</StyledUnderTitle>
              <ExpandableDescriptionBox
                auctionDescription={auction.description}
              />
            </Grid>
            <Grid item xs={12} md={12}>
              #tags
            </Grid>
            <StyledForm>
              <InputField
                label="Lägg ett bud"
                type="number"
                value={bid}
                updateState={setBid}
              />
              <ButtonComp label="Buda" callback={handleBid} disabled={isHost} />
            </StyledForm>
          </Grid>
        </>
      )}
    </StyledWrapper>
  );
};

export default AuctionDetailPage;
