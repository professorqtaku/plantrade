import { useSearch } from "../../Contexts/SearchContext";
import { useAuth } from "../../Contexts/AuthContext";
import SearchForm from "../../Components/Search/SearchForm/SearchForm";
import { imageIcons } from "./ImageIcons";
import { Auction, Category } from "../../Interfaces/Interfaces";
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
  StyledCategoriesTitle,
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
import { useEffect } from "react";
import { useNav } from "../../Contexts/NavigationContext";
import { useHistory } from "react-router-dom";
import { useCategory } from "../../Contexts/CategoryContext";
import { sortByTimes } from "../../Utils/types";

const HomePage = () => {
  const history = useHistory();
  const {
    searchText,
    clearFilter,
    setSelectedCategories,
    getAuctionsByOptions,
    auctions,
    setSelectedSortTime,
  } = useSearch();

  const { whoAmI } = useAuth();
  const { allCategories } = useCategory();

  useEffect(() => {
    handleGetDescAuctions();
  }, []);

  const handleGetDescAuctions = async () => {
    setSelectedSortTime(sortByTimes[0]);
    await getAuctionsByOptions(0)
  };

  const getCategoryIcon = (name: string) => {
    let icon: IconImage = imageIcons[name.toLocaleLowerCase()];
    
    if (icon == null) {
      icon = imageIcons["stickling"]; // default icon
    }
    return icon.imgFile;
  }
  const handleSearchByCategory = async (category: Category) => {
    await clearFilter();
    await setSelectedCategories([category]);
    await getAuctionsByOptions(0, { categories: [category] });
    history.push("/auctions")
  };

  const handleGoToDetailPage = (auctionId: number) => {
    clearFilter();
    history.push("/auctions/" + auctionId)
  };

  const renderCategories = () => (
    <StyledCarouselWrapper>
        <Carousel
        isRTL={true}
        itemsToShow={3}
        outerSpacing={0}
        pagination={false}
        initialFirstItem={3}
        >
        {allCategories && allCategories.map((category: Category) => {
          return (
            <StyledIconImageItem key={category.name}>
              <StyledIconImg
                src={getCategoryIcon(category.name)}
                onClick={() => handleSearchByCategory(category)}
              />
              <StyledText>{category.name}</StyledText>
            </StyledIconImageItem>
          );
        })}
      </Carousel>
    </StyledCarouselWrapper>
  );

  const renderNews = () => (
    <StyledNewsWrapper>
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
        initialFirstItem={0}
      >
        {auctions &&
          auctions.map((auction: Auction) => {
            return (
              <StyledAuctionitem
                key={auction.id}
                onClick={() => handleGoToDetailPage(auction.id)}
              >
                <StyledImageListItem gridignore="true">
                  <StyledAuctionImg
                    src={!auction.images.length ? `https://i.pinimg.com/564x/9e/8b/dc/9e8bdc74df3cb2f87fae194a18ba569a.jpg` : auction.images[0].path}
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
        {whoAmI && <StyledAvatar>{whoAmI.username.charAt(0).toUpperCase()}</StyledAvatar>}
        <StyledSearchFieldWrapper>
          <SearchForm searchWord={searchText} />
        </StyledSearchFieldWrapper>
      </StyledSearchWrapper>

      <StyledPageWrapper>
        <StyledCategoriesTitle>Kategorier</StyledCategoriesTitle>
        {renderCategories()}

        <StyledTitle>Nyheter</StyledTitle>
        {renderNews()}

        <StyledTitle>Snart avslutade auktioner</StyledTitle>
        {renderSoonEndingAuction()}
      </StyledPageWrapper>
    </StyledWrapper>
  );
};

export default HomePage;
