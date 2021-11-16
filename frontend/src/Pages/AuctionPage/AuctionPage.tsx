import {
  StyledWrapper,
  StyledImg,
  StyledContentWrapper,
  StyledSearchWrapper,
  StyledSearchFieldWrapper,
  StyledEndAuctions,
} from "./StyledAuctionPage";
import Grid from "@mui/material/Grid";
import AuctionCard from "../../Components/AuctionCard/AuctionCard";
import { useEffect, useRef, useCallback, useState } from "react";
import SearchForm from "../../Components/Search/SearchForm/SearchForm";
import { useSearch } from "../../Contexts/SearchContext";
import { Auction } from "../../Interfaces/Interfaces";
import { useNav } from "../../Contexts/NavigationContext";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

export interface Category {
  id: number;
  name: String;
}

const AuctionPage = () => {
  const { getAuctionsByOptions, auctions, setAuctions, noContent, lastItem } =
    useSearch();
  const { setAuction, handleSelect } = useNav();
  const observer = useRef<IntersectionObserver>();
  const [pageNumber, setPageNumber] = useState<number>(0);
  const [endOfScroll, setEndOfScroll] = useState("");

  useEffect(() => {
    handleGetAuctions();
    handleSelect(setAuction);
    return () => {
      setAuctions([]);
      setPageNumber(0);
    };
  }, []);

  useEffect(() => {
    if (!auctions.length) {
      setPageNumber(0);
    }
  }, [auctions]);

  useEffect(() => {
    if (lastItem) {
      setEndOfScroll("Inga fler auktioner");
    } else {
      setEndOfScroll("");
    }
  }, [lastItem]);

  const handleGetAuctions = async () => {
    if (auctions.length <= 0) {
      await getAuctionsByOptions(0);
    }
  };

  const handleScroll = async () => {
    await getAuctionsByOptions(pageNumber);
  };

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
          setPageNumber(pageNumber + 1);
          handleScroll();
        }
      });
      if (node) {
        observer.current.observe(node);
      }
    },
    [auctions]
  );

  return (
    <StyledWrapper>
      <StyledSearchWrapper>
        <StyledImg src="https://i.pinimg.com/564x/63/5e/b1/635eb177eef29242e96352f1206298da.jpg" />
        <StyledSearchFieldWrapper>
          <SearchForm />
        </StyledSearchFieldWrapper>
      </StyledSearchWrapper>
      <StyledContentWrapper>
        <Grid container spacing={1} rowSpacing={1}>
          {auctions && auctions.length > 0 ? (
            auctions.map((auction: Auction, i: number) => {
              const isLastElement = auctions.length === i + 1;
              {
                return isLastElement ? (
                  <Grid
                    item
                    xs={12}
                    sm={6}
                    md={4}
                    key={`auction-card-${auction.id}`}
                  >
                    <AuctionCard
                      key={`auction-card-${auction.id}`}
                      auction={auction}
                      fetchAuctions={handleGetAuctions}
                      forwardRef={handleLastAuction}
                    />
                  </Grid>
                ) : (
                  <Grid
                    item
                    xs={12}
                    sm={6}
                    md={4}
                    key={`auction-card-${auction.id}`}
                  >
                    <AuctionCard
                      key={`auction-card-${auction.id}`}
                      auction={auction}
                      fetchAuctions={handleGetAuctions}
                    />
                  </Grid>
                );
              }
            })
          ) : noContent ? (
            <p>Inga resultat av din sökning :/</p>
          ) : (
            <Box sx={{ display: "flex" }}>
              <CircularProgress sx={{ color: "var(--light-green)" }} />
            </Box>
          )}
          <Grid item xs={12} md={12}>
            {endOfScroll && (
              <StyledEndAuctions>{endOfScroll}</StyledEndAuctions>
            )}
          </Grid>
        </Grid>
      </StyledContentWrapper>
    </StyledWrapper>
  );
};

export default AuctionPage;
