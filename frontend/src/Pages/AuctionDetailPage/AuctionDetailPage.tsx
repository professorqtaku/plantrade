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
import ExpandableDescriptionBox from "../../Components/ExpandableDesc/ExpandableDescriptionBox";
import ButtonComp from "../../Components/Button/ButtonComp";
import AuctionDetailsPageCategories from "../../Components/AuctionDetailsPageCategories/AuctionDetailsPageCategories";
import { useChat } from "../../Contexts/ChatContext";
import { useDrawer } from "../../Contexts/DrawerContext";
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
  StyledChatWrapper,
} from "./StyledAuctionDetailPage";
import { useModal } from "../../Contexts/ModalContext";
import BidHistoryContainer from '../../Components/BidHistory/BidHistoryContainer';
import { useNav } from "../../Contexts/NavigationContext";

const AuctionDetailPage = () => {
  const { id }: any = useParams();
  const history = useHistory();

  const { getAuctionById } = useAuction();
  const { createChat } = useChat();
  const { setShowDrawer } = useDrawer();
  const { setMessage, handleSelect } = useNav();
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
  }, [id, whoAmI]);

  useEffect(() => {
    setCurrentBid(highestBid);
    setBidText("Högsta budet");
  }, [highestBid]);

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

    await createBid(newBid);
    getHighestBid(auction?.id);
    //rerender the new currently highest bid
    // handleGetAuctionById();
    setBid("");
  };

  const handleChat = () => {
    if (whoAmI && createChat({ auctionId: auction?.id })) {
      handleSelect(setMessage);
      setShowDrawer(true);
    }
    else {
      toggleLoginModal();
    }
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
      {!isOverPrice ? (
        <ButtonComp label="Buda" callback={handleBid} disabled={isHost} />
      ) : (
        <ButtonComp label="Ja" callback={handleBid} disabled={isHost} />
      )}
    </>
  );

  const renderLoginToggle = (
    <>
      <p>Logga in för att placera ett bud.</p>
      <ButtonComp label="Login" callback={() => toggleLoginModal()} />
    </>
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
            {/* images carousel */}
            <Grid item xs={12} md={12}>
              <StyledCarousel
                initialActiveIndex={0}
                isRTL={false}
                showArrows={true}
                itemsToShow={1}
                pagination={false}
              >
                {auction.images.map((img) => (
                  <StyledImg key={img.path} src={img.path} />
                ))}
              </StyledCarousel>
            </Grid>

            <Grid item xs={8} md={8}>
              <StyledTitle>{auction.title}</StyledTitle>
            </Grid>
              <Grid item xs={4} md={4}>
                <StyledChatWrapper>
                  <StyledChat disabled={isHost} onClick={handleChat}>
                  <StyledChatIcon>
                    <CommentIcon />
                  </StyledChatIcon>
                  </StyledChat>
                </StyledChatWrapper>
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
            {auction.categories && (
              <AuctionDetailsPageCategories
                categories={auction.categories}
                auctionId={auction.id}
              />
            )}
            <Grid item xs={12} md={12}>
              {isOverPrice && (
                <StyledWarning>
                  Är du säker? Ditt bud är
                  <StyledWarningPrice> {bid}</StyledWarningPrice> SEK
                </StyledWarning>
              )}
            </Grid>
            <StyledForm>
                {whoAmI ? renderBidContent : renderLoginToggle}
              </StyledForm>
            <Grid item xs={12}>
              <BidHistoryContainer auction={auction} whoAmI={whoAmI} />
            </Grid>
          </Grid>
        </>
      )}
    </StyledWrapper>
  );
};

export default AuctionDetailPage;
