import {
  StyledCard,
  StyledImg,
  StyledTitle,
  StyledDesc,
  StyledAvatar,
  StyledButton,
  StyledCardContent,
} from "./StyledAuctionCard";
import { Auction } from "../../Pages/AuctionPage/AuctionPage";

interface Props {
  auction: Auction;
}

const AuctionCard = ({ auction }: Props) => {
  return (
    <StyledCard>
      <StyledImg src="https://i.pinimg.com/564x/9e/8b/dc/9e8bdc74df3cb2f87fae194a18ba569a.jpg" />
      <StyledCardContent>
        <div>
          <StyledAvatar>N</StyledAvatar>
          <StyledTitle>Title</StyledTitle>
        </div>
        <div>
          <StyledDesc>Description..</StyledDesc>
          <StyledDesc>Price..</StyledDesc>
          <StyledDesc>Highest bid..</StyledDesc>
          <StyledDesc>End date..</StyledDesc>
        </div>
        <StyledButton>Snabb bud</StyledButton>
      </StyledCardContent>
    </StyledCard>
  );
};

export default AuctionCard;
