import { useSearch } from "../../Contexts/SearchContext";
import SearchForm from "../../Components/Search/SearchForm/SearchForm"
import leaf from "./kategory_Images/leaf.png";
import flower from "./kategory_Images/flower.png";
import {
  StyledWrapper,
  StyledSearchWrapper,
  StyledImg,
  StyledSearchFieldWrapper,
  StyledIconImg,
  StyledCategoryWrapper
 } from "./StyledHomePage";

const HomePage = () => {

  const { searchText } = useSearch();

  const imageIcons = [{
    imgFile: leaf,
    text: "Buske"
  },
  {
    imgFile: flower,
    text: "Blomma"
    }
  ]

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
          return (<div>
            <StyledIconImg key={icon.text} src={icon.imgFile}/>
            <p>{icon.text}</p>
          </div>)
        })}
          </StyledCategoryWrapper>
      </div>

    </StyledWrapper>
  );
}

export default HomePage;