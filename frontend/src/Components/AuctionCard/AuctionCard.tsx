import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import {
  StyledCard,
  StyledImg,
  StyledTitle,
  StyledDesc,
  StyledAvatar,
} from "./StyledAuctionCard";

const AuctionCard = () => {
  return (
    <StyledCard>
      <StyledImg src="https://i.pinimg.com/564x/9e/8b/dc/9e8bdc74df3cb2f87fae194a18ba569a.jpg" />
      <CardContent>
        <StyledAvatar>N</StyledAvatar>
        <StyledTitle>Title</StyledTitle>
        <StyledDesc>Description...</StyledDesc>
      </CardContent>
    </StyledCard>
  );
};

export default AuctionCard;
