import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { useAuth } from "../../Contexts/AuthContext";
import { useBid } from "../../Contexts/BidContext";
import { Auction } from "../../Interfaces/Interfaces";
import { handleCount, ONE_DAY_IN_MILLIS } from "./auctionUtils";
import ButtonComp from "../Button/ButtonComp";
import {
  StyledCard,
  StyledImg,
  StyledTitle,
  StyledDesc,
  StyledAvatar,
  StyledCardContent,
  StyledSpan,
  StyledDiv,
  StyledImgWrapper,
} from "./StyledAuctionCard";
import { useModal } from "../../Contexts/ModalContext";

interface Props {
  auction: Auction;
  fetchAuctions: () => Promise<void>;
  forwardRef?: any;
}

const AuctionCard = ({ auction, fetchAuctions, forwardRef}: Props) => {
  const [daysLeft, setDaysLeft] = useState<number | null>(null);
  const [differenceInMillis, setDifferenceInMillis] = useState(0);
  const [counter, setCounter] = useState<number | null>(null);
  const [remainingTime, setRemainingTime] = useState("Dagar kvar:");
  const [bid, setBid] = useState<number | undefined>(0);
  const [quickBid, setQuickBid] = useState<number>();
  

  const history = useHistory();
  const { createBid } = useBid();
  const { whoAmI } = useAuth();
  const { toggleLoginModal } = useModal();
  const isHost =
    whoAmI && auction.host && auction.host.id && whoAmI.id == auction.host.id;
  
  useEffect(() => {
    if (auction.bids?.length) {
      setBid(auction.bids[auction.bids?.length - 1].price);
    } else {
      setBid(auction.startPrice);
    }
  }, [auction.bids])
  
  useEffect(() => {
    handleQuickBid();
  }, [!!bid, bid]);

  useEffect(() => {
    handleTime();
  }, [daysLeft]);

  useEffect(() => {
    handleCounter();
  }, [counter]);

  const handleTime = async () => {
    const endDateInMillis = new Date(auction.endDate + "").getTime();
    const todayInMillis = new Date().getTime();
    setDifferenceInMillis(endDateInMillis - todayInMillis);
    differenceInMillis <= 0 && fetchAuctions();
    differenceInMillis <= ONE_DAY_IN_MILLIS && setCounter(differenceInMillis);
    setDaysLeft(Math.round(differenceInMillis / (60 * 60 * 24 * 1000)));
  };

  const handleCounter = () => {
    if (counter !== null) {
      handleCount(
        counter,
        differenceInMillis,
        setDaysLeft,
        setRemainingTime,
        setCounter,
        handleTime
      );
    }
  };

  const handleQuickBid = () => {
    if (!!bid) {
      if (bid <= 10) {
        setQuickBid(bid + 1);
      }
      if (bid <= 100 && bid > 10) {
        setQuickBid(bid + 10);
      }
      if (bid >= 100 && bid > 100) {
        setQuickBid(bid + 100);
      }
      if (bid == auction.startPrice) {
        setQuickBid(bid + 1);
      }
    }
  };

  const handleBid = async () => {
    if (whoAmI == null) {
      toggleLoginModal();
      return
    }
    
    const newBid = {
      userId: whoAmI.id,
      auctionId: auction.id,
      price: quickBid,
      createdDate: Date.now(),
    };

    await createBid(newBid);
  };

  const toDetailPage = () => {
    history.push(`/auctions/${auction.id}`);
  };

  return (
    <StyledCard ref={forwardRef}>
      <StyledImgWrapper>
        <StyledImg
          src={
            auction.images.length
              ? auction.images[0].path
              : `https://i.pinimg.com/564x/9e/8b/dc/9e8bdc74df3cb2f87fae194a18ba569a.jpg`
          }
          onClick={toDetailPage}
        />
      </StyledImgWrapper>
      <StyledCardContent>
        <div>
          <StyledAvatar>{auction.title.charAt(0)}</StyledAvatar>
          <StyledTitle onClick={toDetailPage}>{auction.title}</StyledTitle>
        </div>
        <StyledDiv onClick={toDetailPage}>
          <StyledDesc>
            <StyledSpan>Pris:</StyledSpan> {auction.startPrice} SEK
          </StyledDesc>
          <StyledDesc>
            <StyledSpan>Högsta bud:</StyledSpan>{" "}
            {bid == auction.startPrice ? "Inga bud" : bid + " SEK"}
          </StyledDesc>
          <StyledDesc>
            <StyledSpan>{remainingTime}</StyledSpan> {daysLeft}
          </StyledDesc>
        </StyledDiv>
        <ButtonComp
          label={`Snabb bud ${quickBid} SEK`}
          callback={handleBid}
          costumFontSize="0.7rem"
          disabled={isHost}
        />
      </StyledCardContent>
    </StyledCard>
  );
};

export default AuctionCard;
