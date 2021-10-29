import { useSearch } from "../../Contexts/SearchContext";
import SearchForm from "../../Components/Search/SearchForm/SearchForm"
import { imageIcons } from "./ImageIcons"
import Carousel from 'react-elastic-carousel';
import {
  StyledWrapper,
  StyledSearchWrapper,
  StyledImg,
  StyledSearchFieldWrapper,
  StyledIconImg,
  StyledTest,
  StyledText,
  StyledTitle,
  StyledCarouselWrapper,
  StyledPageWrapper
 } from "./StyledHomePage";

interface IconImage{
  imgFile: string;
  text: string;
}


const HomePage = () => {

  const { searchText } = useSearch();

  const renderCategories = () => (
    <StyledCarouselWrapper>
    <Carousel isRTL={true} itemsToShow={3} outerSpacing={0} pagination={false}>
        {imageIcons.map((icon: IconImage) => {
          return <StyledTest><StyledIconImg key={icon.text} src={icon.imgFile}/>
            <StyledText>{icon.text}</StyledText>
            </StyledTest>
        })}
      </Carousel>
      </StyledCarouselWrapper>
  )



  return (
    <StyledWrapper>
      <StyledSearchWrapper>
        <StyledImg src="https://i.pinimg.com/564x/63/5e/b1/635eb177eef29242e96352f1206298da.jpg" alt="" />
        <StyledSearchFieldWrapper>
          <SearchForm searchWord={searchText}/>
        </StyledSearchFieldWrapper>
        </StyledSearchWrapper>

      <StyledPageWrapper>
        <StyledTitle>Kategorier</StyledTitle>
          {renderCategories()}
      </StyledPageWrapper>

    </StyledWrapper>
  );
}

export default HomePage;