import {
  StyledCard,
  StyledImg,
  StyledTitle,
  StyledDesc,
  StyledAvatar,
  StyledButton,
  StyledCardContent,
  StyledSpan,
} from "./StyledAuctionCard";
import { Auction } from "../../Pages/AuctionPage/AuctionPage";
import { useEffect, useState } from "react";

interface Props {
  auction: Auction;
  fetchAuctions: () => Promise<void>;
}

const AuctionCard = ({ auction, fetchAuctions }: Props) => {
  const ONE_DAY_IN_MILLIS = 86400000;
  const ONE_HOUR_IN_MILLIS = 3600000;
  const ONE_MINUTE_IN_MILLIS = 60000;

  const [daysLeft, setDaysLeft] = useState<number | null>(null);
  const [differenceInMillis, setDifferenceInMillis] = useState(0);
  const [counter, setCounter] = useState<number | null>(null);
  const [remainingTime, setRemainingTime] = useState("Dagar kvar:");
  const [bid, setBid] = useState(0);
  // Delete when the auction got bids..
  const [highestBid, setHighestBid] = useState(100);

  useEffect(() => {
    handleFastBid();
  }, []);

  useEffect(() => {
    handleTime();
  }, [daysLeft]);

  const handleTime = async () => {
    const endDateInMillis = new Date(auction.endDate + "").getTime();
    const todayInMillis = new Date().getTime();
    setDifferenceInMillis(endDateInMillis - todayInMillis);
    differenceInMillis <= 0 && fetchAuctions();
    differenceInMillis <= ONE_DAY_IN_MILLIS && setCounter(differenceInMillis);
    setDaysLeft(Math.round(differenceInMillis / (60 * 60 * 24 * 1000)));
  };

  useEffect(() => {
    if (counter !== null) {
      // Hours
      if (counter > ONE_HOUR_IN_MILLIS) {
        setDaysLeft(Math.floor((differenceInMillis / (1000 * 60 * 60)) % 24));
        setRemainingTime("Timmar kvar:");
        setTimeout(async () => {
          await handleTime();
          setCounter(counter - 1);
        }, ONE_HOUR_IN_MILLIS);
      }

      // Minutes
      if (counter >= ONE_MINUTE_IN_MILLIS && counter < ONE_HOUR_IN_MILLIS) {
        setDaysLeft(Math.floor((differenceInMillis / (1000 * 60)) % 60));
        setRemainingTime("Minuter kvar:");
        setTimeout(async () => {
          await handleTime();
          setCounter(counter - 1);
        }, ONE_MINUTE_IN_MILLIS);
      }

      // Seconds
      if (counter >= 0 && counter < ONE_MINUTE_IN_MILLIS) {
        setDaysLeft(Math.floor((differenceInMillis / 1000) % 60));
        setRemainingTime("Sekunder kvar:");
        setTimeout(async () => {
          await handleTime();
          setCounter(counter - 1);
        }, 1000);
      }
    }
  }, [counter]);

  const handleFastBid = () => {
    if (highestBid <= 10) {
      setBid(1);
    }
    if (highestBid <= 100 && highestBid > 10) {
      setBid(10);
    }
    if (highestBid <= 1000 && highestBid > 100) {
      setBid(100);
    }
    if (highestBid > 1000) {
      setBid(1000);
    }
  };

  const handleBid = () => {
    // Post to add a bid..
  };

  return (
    <StyledCard>
      <StyledImg src="https://i.pinimg.com/564x/9e/8b/dc/9e8bdc74df3cb2f87fae194a18ba569a.jpg" />
      <StyledCardContent>
        <div>
          <StyledAvatar>{auction.title.charAt(0)}</StyledAvatar>
          <StyledTitle>{auction.title}</StyledTitle>
        </div>
        <div>
          <StyledDesc>
            <StyledSpan>Pris:</StyledSpan> {auction.startPrice} SEK
          </StyledDesc>
          <StyledDesc>
            <StyledSpan>Högsta bud:</StyledSpan> {highestBid} SEK
          </StyledDesc>
          <StyledDesc>
            <StyledSpan>{remainingTime}</StyledSpan> {daysLeft}
          </StyledDesc>
        </div>
        <StyledButton onClick={() => handleBid()}>
          Snabb bud {bid} SEK
        </StyledButton>
      </StyledCardContent>
    </StyledCard>
  );
};

export default AuctionCard;
