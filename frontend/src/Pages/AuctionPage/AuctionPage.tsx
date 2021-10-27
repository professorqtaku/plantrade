import {
  StyledWrapper,
  StyledImg,
  StyledContentWrapper,
} from "./StyledAuctionPage";
import AuctionCard from "../../Components/AuctionCard/AuctionCard";
import { useAuction } from "../../Contexts/AuctionContext";
import { useEffect } from "react";
import SearchField from "../../Components/Search/SearchField/SearchField";

export interface Host {
  id: number;
  username: String;
  email: String;
  password: String;
}

export interface Auction {
  id: number;
  title: String;
  description: String;
  startPrice?: number;
  status?: String;
  endDate?: String;
  host?: Host;
}

const AuctionPage = () => {
  const { getAllAuctions, auctions } = useAuction();

  useEffect(() => {
    handleGetAuctions();
  }, []);

  const handleGetAuctions = async () => {
    await getAllAuctions();
  };

  return (
    <StyledWrapper>
      <div>
        <StyledImg src="https://i.pinimg.com/564x/63/5e/b1/635eb177eef29242e96352f1206298da.jpg" />
        <SearchField />
      </div>
      <StyledContentWrapper>
        {auctions &&
          auctions.map((auction: Auction) => (
            <AuctionCard
              key={auction.id}
              auction={auction}
              fetchAuctions={handleGetAuctions}
            />
          ))}
      </StyledContentWrapper>
    </StyledWrapper>
  );
};

export default AuctionPage;
