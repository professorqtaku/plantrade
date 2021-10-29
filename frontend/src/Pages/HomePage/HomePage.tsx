import { useSearch } from "../../Contexts/SearchContext";
import SearchForm from "../../Components/Search/SearchForm/SearchForm"
import { imageIcons } from "./ImageIcons"
import Carousel from 'react-elastic-carousel';
import Pagination from '@mui/material/Pagination';
import {
  StyledWrapper,
  StyledSearchWrapper,
  StyledImg,
  StyledSearchFieldWrapper,
  StyledIconImg,
  StyledCategoryWrapper,
  StyledTest
 } from "./StyledHomePage";

interface IconImage{
  imgFile: any;
  text: string;
}


const HomePage = () => {

  const { searchText } = useSearch();

  const renderCategories = () => (
    <Carousel isRTL={true} itemsToShow={3}  outerSpacing={0} pagination={false}>
        {imageIcons.map((icon: IconImage) => {
          return <StyledTest><StyledIconImg key={icon.text} src={icon.imgFile}/>
            <p>{icon.text}</p>
            </StyledTest>
        })}
          </Carousel>
  )



  return (
    <StyledWrapper>
      <StyledSearchWrapper>
        <StyledImg src="https://i.pinimg.com/564x/63/5e/b1/635eb177eef29242e96352f1206298da.jpg" alt="" />
        <StyledSearchFieldWrapper>
          <SearchForm searchWord={searchText}/>
        </StyledSearchFieldWrapper>
        </StyledSearchWrapper>

      
      <div>

      
          {renderCategories()}
  

          
 
      </div>

    </StyledWrapper>
  );
}

export default HomePage;