import {
  StyledWrapper,
  StyledImg,
  StyledContentWrapper,
  StyledSearchWrapper,
  StyledSearchFieldWrapper,
} from "./StyledAuctionPage";
import AuctionCard from "../../Components/AuctionCard/AuctionCard";
import { useAuction } from "../../Contexts/AuctionContext";
import { Bid } from "../../Contexts/BidContext";
import { useEffect } from "react";
import SearchForm from "../../Components/Search/SearchForm/SearchForm";
import { useSearch } from "../../Contexts/SearchContext";
import { Auction } from '../../Interfaces/Interfaces';
import { useNav } from "../../Contexts/NavigationContext";

export interface Category {
  id: number;
  name: String;
}

const AuctionPage = () => {
  const { getAllAuctions, auctions } = useAuction();
  const { searchText } = useSearch();
  const { setAuction, handleSelect } = useNav();

  useEffect(() => {
    handleGetAuctions();
    handleSelect(setAuction);
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
