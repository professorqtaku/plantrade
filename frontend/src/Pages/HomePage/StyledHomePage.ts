import styled from "styled-components";
import Card from "@mui/material/Card";

export const StyledWrapper = styled.div`
  max-height: 80vh;
  display: grid;
  grid-template-rows: 25vh 1fr;
`;

export const StyledPageWrapper = styled.div`
      @media (min-width: 769px) {
    width: 75%;
    margin: 0 auto;
  }
`;

export const StyledSearchWrapper = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
`;

export const StyledImg = styled.img`
  width: 100%;
  height: 75%;
  object-fit: cover;
`;

export const StyledSearchFieldWrapper = styled.div`
 width: 70%;
  margin: 0 auto;
  position: absolute;
  top: 60%;
  left: 12%;
`;

export const StyledCarouselWrapper = styled.div`
  width: 100;
    @media (min-width: 769px) {
    width: 60%;
    margin: 0 auto;
  }
`;

export const StyledTest = styled(Card)`
  display: grid;
  align-items: center;
  justify-items: center;
  background: #FFF;
  padding: 10px 15px 10px 15px;
  min-width: 60px;
   margin: 10px;
`;

export const StyledText = styled.p`
  margin: 7px 0 0 0;
  font-size: 13px;
`;

export const StyledTitle = styled.p`
  font-size: 20px;
  letter-spacing: 2px;
  margin: 0 0 0 1rem;
`;

export const StyledIconImg = styled.img`
  width: 25px;
`;
