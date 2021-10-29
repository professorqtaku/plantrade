import styled from "styled-components";

export const StyledWrapper = styled.div`
  max-height: 80vh;
  display: grid;
  grid-template-rows: 25vh 1fr;
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

export const StyledIconImg = styled.img`
  width: 50px;
`;

export const StyledCategoryWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  padding: 10px;
  align-items: center;
`;