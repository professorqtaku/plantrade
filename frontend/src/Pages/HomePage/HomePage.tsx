import { useSearch } from "../../Contexts/SearchContext";
import { useAuth } from "../../Contexts/AuthContext";
import SearchForm from "../../Components/Search/SearchForm/SearchForm";
import { imageIcons } from "./ImageIcons";
import { Auction } from "../../Interfaces/Interfaces";
import { IconImage } from "../../Utils/types";
import Carousel from "react-elastic-carousel";
import {
  StyledWrapper,
  StyledSearchWrapper,
  StyledImg,
  StyledSearchFieldWrapper,
  StyledIconImg,
  StyledIconImageItem,
  StyledAuctionitem,
  StyledText,
  StyledTitle,
  StyledCarouselWrapper,
  StyledPageWrapper,
  StyledAvatar,
  StyledUsername,
  StyledImageListItem,
  StyledImageListItemBar,
  StyledNewsImg,
  StyledNewsWrapper,
  StyledAuctionImg,
  StyledSoonEndingWrapper,
} from "./StyledHomePage";
import { useAuction } from "../../Contexts/AuctionContext";
import { useEffect } from "react";
import { useNav } from "../../Contexts/NavigationContext";
import { useHistory } from "react-router-dom";

const HomePage = () => {
  const history = useHistory();
  const { searchText } = useSearch();
  const { whoAmI } = useAuth();
  const { auctions } = useAuction();

  const renderCategories = () => (
    <StyledCarouselWrapper>
      <Carousel
        isRTL={true}
        itemsToShow={3}
        outerSpacing={0}
        pagination={false}
        initialFirstItem={3}
      >
        {imageIcons.map((icon: IconImage) => {
          return (
            <StyledIconImageItem key={icon.text}>
              <StyledIconImg
                src={icon.imgFile}
                onClick={() => console.log("klicka på karusell item")}
              />
              <StyledText>{icon.text}</StyledText>
            </StyledIconImageItem>
          );
        })}
      </Carousel>
    </StyledCarouselWrapper>
  );

  const renderNews = () => (
    <StyledNewsWrapper onClick={() => console.log("klicka på bild item")}>
      <StyledImageListItem>
        <StyledNewsImg
          src="https://i2.wp.com/www.livingloving.net/wp-content/uploads/2017/01/living-loving-indoor-plants-3.jpg?resize=1769%2C1000&ssl=1"
          alt="News picture"
          loading="lazy"
        />
        <StyledImageListItemBar
          title="För Hemmet"
          subtitle="Flera typer av växter"
        />
      </StyledImageListItem>
    </StyledNewsWrapper>
  );

  const renderSoonEndingAuction = () => (
    <StyledSoonEndingWrapper>
      <Carousel
        isRTL={true}
        itemsToShow={3}
        outerSpacing={0}
        pagination={false}
        initialFirstItem={3}
      >
        {auctions &&
          auctions.map((auction: Auction) => {
            return (
              <StyledAuctionitem
                key={auction.id}
                onClick={() => history.push("/auctions/" + auction.id)}
              >
                <StyledImageListItem gridignore="true">
                  <StyledAuctionImg
                    src="https://i.pinimg.com/564x/9e/8b/dc/9e8bdc74df3cb2f87fae194a18ba569a.jpg"
                    alt="Auction"
                    loading="lazy"
                  />
                  <StyledImageListItemBar
                    style={{ textAlign: "left" }}
                    width="100%"
                    subtitle={auction.title}
                  />
                </StyledImageListItem>
              </StyledAuctionitem>
            );
          })}
      </Carousel>
    </StyledSoonEndingWrapper>
  );

  const { setHome, handleSelect } = useNav();

  useEffect(() => {
    handleSelect(setHome);
  }, []);

  return (
    <StyledWrapper>
      <StyledSearchWrapper>
        <StyledImg
          src="https://i.pinimg.com/564x/63/5e/b1/635eb177eef29242e96352f1206298da.jpg"
          alt=""
        />
        {whoAmI && <StyledUsername>Hej {whoAmI.username}</StyledUsername>}
        {whoAmI && <StyledAvatar>{whoAmI.username.charAt(0)}</StyledAvatar>}
        <StyledSearchFieldWrapper>
          <SearchForm searchWord={searchText} />
        </StyledSearchFieldWrapper>
      </StyledSearchWrapper>

      <StyledPageWrapper>
        <StyledTitle>Kategorier</StyledTitle>
        {renderCategories()}

        <StyledTitle>Nyheter</StyledTitle>
        {renderNews()}

        <StyledTitle>Snart avslutade auctioner</StyledTitle>
        {renderSoonEndingAuction()}
      </StyledPageWrapper>
    </StyledWrapper>
  );
};

export default HomePage;
