import SearchField from "../../Components/Search/SearchForm/SearchForm"
import SearchForm from "../../Components/Search/SearchForm/SearchForm"
import {
  StyledWrapper,
  StyledSearchWrapper,
  StyledImg,
  StyledSearchFieldWrapper
  
 } from "./StyledHomePage";

const HomePage = () => {

  return (
    <StyledWrapper>
      <StyledSearchWrapper>
        <StyledImg src="https://i.pinimg.com/564x/63/5e/b1/635eb177eef29242e96352f1206298da.jpg" alt="" />
        <StyledSearchFieldWrapper>
        <SearchForm />
        </StyledSearchFieldWrapper>
        </StyledSearchWrapper>

      


    </StyledWrapper>
  );
}

export default HomePage;