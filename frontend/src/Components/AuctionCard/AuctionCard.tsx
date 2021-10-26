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
}

const AuctionCard = ({ auction }: Props) => {

  const [daysLeft, setDaysLeft] = useState<number | null>(null);

  useEffect(() => {
    const endDateInMillis = new Date(auction.endDate + "").getTime();
    const todayInMillis = new Date().getTime();
    const differenceInMillis = endDateInMillis - todayInMillis;
    setDaysLeft(Math.round(differenceInMillis / (60 * 60 * 24 * 1000)));
  }, [])
  
  
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
            <StyledSpan>Bud:</StyledSpan> Inget bud för tillfället
          </StyledDesc>
          <StyledDesc>
            <StyledSpan>Dagar kvar:</StyledSpan> {daysLeft}
          </StyledDesc>
        </div>
        <StyledButton>Snabb bud</StyledButton>
      </StyledCardContent>
    </StyledCard>
  );
};

export default AuctionCard;
