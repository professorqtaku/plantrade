import {
  StyledCard,
  StyledImg,
  StyledTitle,
  StyledDesc,
  StyledAvatar,
  StyledCardContent,
  StyledSpan,
} from "./StyledAuctionCard";
import { useBid } from "../../Contexts/BidContext";
import { Auction } from "../../Interfaces/Interfaces";
import { useEffect, useState } from "react";
import { handleCount, ONE_DAY_IN_MILLIS } from "./auctionUtils";
import ButtonComp from "../Button/ButtonComp";
import { useAuth } from "../../Contexts/AuthContext";
import { useHistory } from "react-router";

interface Props {
  auction: Auction;
  fetchAuctions: () => Promise<void>;
}

const AuctionCard = ({ auction, fetchAuctions }: Props) => {

  const [daysLeft, setDaysLeft] = useState<number | null>(null);
  const [differenceInMillis, setDifferenceInMillis] = useState(0);
  const [counter, setCounter] = useState<number | null>(null);
  const [remainingTime, setRemainingTime] = useState("Dagar kvar:");
  const [bid, setBid] = useState<undefined | number>();
  const [quickBid, setQuickBid] = useState<number>();

  const history = useHistory();
  
  const { createBid } = useBid();
  const { whoAmI } = useAuth();
  const isHost =
    whoAmI && auction.host && auction.host.id && whoAmI.id == auction.host.id;
  
  useEffect(() => {
    if (!!auction?.bids?.length) {
      setBid(auction.bids.pop()?.price);
    } else {
      setBid(auction?.startPrice)
    }
  }, [auction.bids]);

  useEffect(() => {
    handleQuickBid()
  }, [!!bid, bid])

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
        setQuickBid(bid  + 1);
      }
      if (bid  <= 100 && bid  > 10) {
        setQuickBid(bid + 10);
      }
      if (bid >= 1000 && bid > 100) {
        setQuickBid(bid + 100);
      }
    }
  };

  const handleBid = async () => {  
    const newBid = {
      // change userId to user that is logged in
      userId: 3,
      auctionId: auction.id,
      price: quickBid,
      createdDate: Date.now()
    }
    
    await createBid(newBid);
  };

  const toDetailPage = () => {
    console.log(auction.id);
    history.push(`/auctions/${auction.id}`)
  }


  return (
    <StyledCard>
      <StyledImg
        src="https://i.pinimg.com/564x/9e/8b/dc/9e8bdc74df3cb2f87fae194a18ba569a.jpg"
        onClick={toDetailPage}
      />
      <StyledCardContent>
        <div>
          <StyledAvatar>{auction.title.charAt(0)}</StyledAvatar>
          <StyledTitle onClick={toDetailPage}>{auction.title}</StyledTitle>
        </div>
        <div onClick={toDetailPage}>
          <StyledDesc>
            <StyledSpan>Pris:</StyledSpan> {auction.startPrice} SEK
          </StyledDesc>
          <StyledDesc>
            <StyledSpan>Högsta bud:</StyledSpan> {bid} SEK
          </StyledDesc>
          <StyledDesc>
            <StyledSpan>{remainingTime}</StyledSpan> {daysLeft}
          </StyledDesc>
        </div>
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