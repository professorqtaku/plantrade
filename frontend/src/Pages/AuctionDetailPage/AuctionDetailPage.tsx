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
import { images } from "./images";
import {
  StyledWrapper,
  StyledPrice,
  StyledPriceTitle,
  StyledBackBtn,
  StyledTitle,
  StyledUnderTitle,
  StyledChat,
  StyledChatIcon,
  StyledDate,
  StyledAccessTimeOutlinedIcon,
  StyledCalendarTodayOutlinedIcon,
  StyledForm,
  StyledWarning,
  StyledWarningPrice,
  StyledImg,
  StyledCarousel,
  StyledChip,
} from "./StyledAuctionDetailPage";
import { useSocket } from "../../Contexts/SocketContext";
import { useModal } from "../../Contexts/ModalContext";

const AuctionDetailPage = () => {
  const { id }: any = useParams();
  const history = useHistory();
  const { socket } = useSocket();

  const { getAuctionById } = useAuction();
  const { createBid, getHighestBid, highestBid } = useBid();
  const { whoAmI } = useAuth();

  const { toggleLoginModal } = useModal();

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

  useEffect(() => {
    setCurrentBid(highestBid);
    setBidText("Högsta budet");
  }, [highestBid])
  
  const handleGetAuctionById = async () => {
    const res = await getAuctionById(id);
    setAuction(res);
    getHighestBid(res.id);
    setEndDate(new Date(res.endDate).toLocaleDateString("sv-SV"));
    setEndTime(new Date(res.endDate).toLocaleTimeString("sv-SV"));
    
    if (whoAmI && whoAmI.id == res.host.id) {
      setIsHost(true);
    }
    
    if (!res.bids.length) {
      setCurrentBid(res.startPrice);
      setBidText("Startpris");
    }
  };

  const handleBid = async (e: any) => {
    e.preventDefault();
    if (whoAmI == null) return;
    if (parseInt(bid) > currentBid * 2 && !isOverPrice) {
      setIsOverPrice(true);
      return;
    }
    setIsOverPrice(false);
    
    const newBid = {
      userId: whoAmI.id,
      auctionId: auction?.id,
      price: parseInt(bid),
      createdDate: Date.now(),
    };
    
    const createdBid = await createBid(newBid);
    getHighestBid(auction?.id);
    if (createdBid) {
      socket.emit("join", id);
    }
      //rerender the new currently highest bid
      handleGetAuctionById();
    setBid("");
  };

  const handleChat = () => {
    console.log("I want to chat with the seller");
  };

  const renderBidContent = (
    <>
      {!isOverPrice ? (
        <InputField
          label="Lägg ett bud"
          type="number"
          value={bid}
          updateState={setBid}
        />
      ) : (
        <ButtonComp
          label="Nej"
          callback={() => setIsOverPrice(false)}
          disabled={isHost}
          costumBackgroundColor="crimson"
        />
      )}
      { !isOverPrice ? (
        <ButtonComp label="Buda" callback={handleBid} disabled={isHost} />
      ) : (
        <ButtonComp label="Ja" callback={handleBid} disabled={isHost} />
      )}
    </>
  );

  const renderLoginToggle = (
    <>
    <p>Logga in för att placera ett bud.</p>
    <ButtonComp
          label="Login"
          callback={() => toggleLoginModal()}
        />
        </>

  );

  const renderCarousel = (
    <StyledCarousel
      initialActiveIndex={0}
      isRTL={false}
      showArrows={true}
      itemsToShow={1}
      pagination={false}
    >
      {images.map((img) => (
        <StyledImg
          onClick={() => socket.emit("auctionUpdate", id)}
          key={img.path}
          src={img.path}
        />
      ))}
    </StyledCarousel>
  );

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
              {renderCarousel}
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
              {auction.categories
                ? auction.categories.map(category => (
                    <StyledChip
                      key={`${auction.id}-${category.name}`}
                      label={`#${category.name}`}
                    />
                  ))
                : null}
            </Grid>
            <Grid item xs={12} md={12}>
              {isOverPrice && (
                <StyledWarning>
                  Är du säker? Ditt bud är
                  <StyledWarningPrice> {bid}</StyledWarningPrice> SEK
                </StyledWarning>
              )}
            </Grid>
            <StyledForm warning={isOverPrice ? isOverPrice : false}>
              {whoAmI ? renderBidContent : renderLoginToggle}
            </StyledForm>
          </Grid>
        </>
      )}
    </StyledWrapper>
  );
};

export default AuctionDetailPage;
