import { useSearch } from "../../Contexts/SearchContext";
import SearchForm from "../../Components/Search/SearchForm/SearchForm"
import { imageIcons } from "./ImageIcons"
import {
  StyledWrapper,
  StyledSearchWrapper,
  StyledImg,
  StyledSearchFieldWrapper,
  StyledIconImg,
  StyledCategoryWrapper,
  StyledTest
 } from "./StyledHomePage";

const HomePage = () => {

  const { searchText } = useSearch();



  return (
    <StyledWrapper>
      <StyledSearchWrapper>
        <StyledImg src="https://i.pinimg.com/564x/63/5e/b1/635eb177eef29242e96352f1206298da.jpg" alt="" />
        <StyledSearchFieldWrapper>
          <SearchForm searchWord={searchText}/>
        </StyledSearchFieldWrapper>
        </StyledSearchWrapper>

      
      <div>
        {/* <img src={flower} alt="" /> */}
          <StyledCategoryWrapper>
        {imageIcons.map(icon => {
          return (<StyledTest>
            <StyledIconImg key={icon.text} src={icon.imgFile}/>
            <p style={{margin: 0, padding: 0, textAlign: 'center'}}>{icon.text}</p>
          </StyledTest>)
        })}
          </StyledCategoryWrapper>
      </div>

    </StyledWrapper>
  );
}

export default HomePage;