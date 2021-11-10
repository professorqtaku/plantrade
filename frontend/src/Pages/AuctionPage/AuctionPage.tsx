import {
  StyledWrapper,
  StyledImg,
  StyledContentWrapper,
  StyledSearchWrapper,
  StyledSearchFieldWrapper,
} from "./StyledAuctionPage";
import AuctionCard from "../../Components/AuctionCard/AuctionCard";
import { useEffect, useRef, useCallback, useState } from "react";
import SearchForm from "../../Components/Search/SearchForm/SearchForm";
import { useSearch } from "../../Contexts/SearchContext";
import { Auction } from '../../Interfaces/Interfaces';
import { useNav } from "../../Contexts/NavigationContext";
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export interface Category {
  id: number;
  name: String;
}

const AuctionPage = () => {
  const { searchText, getAuctionsByOptions, auctions, setAuctions} = useSearch();
  const { setAuction, handleSelect } = useNav();
  const observer = useRef<IntersectionObserver>();
  let [pageNumber, setPageNumber] = useState(0);

  useEffect(() => {
    console.log('auctions changed', auctions);
  }, [auctions])
  
  useEffect(() => {
    handleGetAuctions();
    handleSelect(setAuction);
    return () => {
      setAuctions([]);
      setPageNumber(0);
    }
  }, []);
  
  const handleGetAuctions = async () => {
    if (auctions.length <= 0 && searchText.trim().length <= 0) {
      console.log('wants to get auctions in auction page')
      await getAuctionsByOptions(0);
    }
  };

  const handleScroll = async () => {
    await getAuctionsByOptions(pageNumber);
  }

  const handleLastAuction = useCallback(
    (node: any, _deps: any) => {
      if (observer.current) {
        // disconnecting the last element so
        // the new last element can be connected
        observer.current.disconnect();
      }
      observer.current = new IntersectionObserver((entries: any) => {
        // if the node is intersecting, aka on the page somewhere
        if (entries[0].isIntersecting) {
          console.log('what is page number', pageNumber)
          setPageNumber(pageNumber++);
          handleScroll();
        }
      });
      if (node) {
        observer.current.observe(node);
      }
    }, [auctions]);
  
  

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
          ? auctions.map((auction: Auction, i: number) => {
            const isLastElement = auctions.length === i + 1;
          
            {
              return isLastElement ?
                (<AuctionCard
                  key={auction.id}
                  auction={auction}
                  fetchAuctions={handleGetAuctions}
                  forwardRef={handleLastAuction}
                />) : (<AuctionCard
                  key={auction.id}
                  auction={auction}
                  fetchAuctions={handleGetAuctions}
                />)
            }
          })
          :
          <Box sx={{ display: 'flex' }}>
            <CircularProgress sx={{color: 'var(--light-green)'}} />
          </Box>
        }
      </StyledContentWrapper>
    </StyledWrapper>
  );
};

export default AuctionPage;
