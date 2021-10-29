import { useSearch } from "../../Contexts/SearchContext";
import SearchForm from "../../Components/Search/SearchForm/SearchForm"
import Leaf from "./kategory_Images/leaf.png";
import Flower from "./kategory_Images/flower.png";
import Tree from "./kategory_Images/Tree.png";
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
    imgFile: Leaf,
    text: "Buske"
  },
  {
    imgFile: Flower,
    text: "Blomma"
    },
  {
    imgFile: Tree,
    text: "Träd"
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
          return (<div style={{margin: '0 auto', border: '1px solid grey', padding: '3px 10px 3px 10px'}}>
            <StyledIconImg key={icon.text} src={icon.imgFile}/>
            <p style={{margin: 0, padding: 0, textAlign: 'center'}}>{icon.text}</p>
          </div>)
        })}
          </StyledCategoryWrapper>
      </div>

    </StyledWrapper>
  );
}

export default HomePage;