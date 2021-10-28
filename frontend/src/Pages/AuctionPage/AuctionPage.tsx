import {
  StyledWrapper,
  StyledImg,
  StyledContentWrapper,
  StyledSearchWrapper,
  StyledSearchFieldWrapper,
} from "./StyledAuctionPage";
import AuctionCard from "../../Components/AuctionCard/AuctionCard";
import { useAuction } from "../../Contexts/AuctionContext";
import { useEffect } from "react";
import SearchForm from "../../Components/Search/SearchForm/SearchForm";

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
    console.log("handle get auction");
    handleGetAuctions();
  }, []);
  useEffect(() => {
    console.log(auctions.length);
    console.log(auctions);
  }, [auctions]);

  const handleGetAuctions = async () => {
    if (auctions.length < 0) {
      await getAllAuctions();
    }
  };

  return (
    <StyledWrapper>
      <StyledSearchWrapper>
        <StyledImg src="https://i.pinimg.com/564x/63/5e/b1/635eb177eef29242e96352f1206298da.jpg" />
        <StyledSearchFieldWrapper>
          <SearchForm />
        </StyledSearchFieldWrapper>
      </StyledSearchWrapper>
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
