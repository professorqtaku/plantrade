import {
  StyledWrapper,
  StyledImg,
  StyledContentWrapper,
  StyledSearchWrapper,
  StyledSearchFieldWrapper,
} from "./StyledAuctionPage";
import AuctionCard from "../../Components/AuctionCard/AuctionCard";
import { useAuction, Bid } from "../../Contexts/AuctionContext";
import { useEffect } from "react";
import SearchForm from "../../Components/Search/SearchForm/SearchForm";
import { useSearch } from "../../Contexts/SearchContext";

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
  bids: Array<Bid> | undefined;
}

const AuctionPage = () => {
  const { getAllAuctions, auctions } = useAuction();
  const { searchText } = useSearch();

  useEffect(() => {
    handleGetAuctions();
  }, []);

  const handleGetAuctions = async () => {
    if (auctions.length <= 0 && searchText.trim().length <= 0) {
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
        {auctions && auctions.length > 0
        ? auctions.map((auction: Auction) => (
            <AuctionCard
              key={auction.id}
              auction={auction}
              fetchAuctions={handleGetAuctions}
            />
          ))
          :
          <p>Finns tyvärr inget uppe just nu :(</p>
        }
      </StyledContentWrapper>
    </StyledWrapper>
  );
};

export default AuctionPage;
