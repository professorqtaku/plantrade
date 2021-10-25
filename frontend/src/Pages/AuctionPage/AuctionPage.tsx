import {
  StyledWrapper,
  StyledImg,
  StyledContentWrapper,
} from "./StyledAuctionPage";
import AuctionCard from "../../Components/AuctionCard/AuctionCard";
import { AuctionContext } from "../../Contexts/AuctionContext";
import { useContext, useEffect } from "react";

const AuctionPage = () => {
  const { getAllAuctions, auctions } = useContext(AuctionContext);

  useEffect(() => {
    handleGetAuctions();
  }, []);

  const handleGetAuctions = async () => {
    await getAllAuctions();
  };

  return (
    <StyledWrapper>
      <StyledImg src="https://i.pinimg.com/564x/63/5e/b1/635eb177eef29242e96352f1206298da.jpg" />
      <StyledContentWrapper>
        <AuctionCard />
      </StyledContentWrapper>
    </StyledWrapper>
  );
};

export default AuctionPage;
