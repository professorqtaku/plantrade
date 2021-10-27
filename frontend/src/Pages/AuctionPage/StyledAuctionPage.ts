import styled from "styled-components";

export const StyledWrapper = styled.div`
  max-height: 80vh;
  display: grid;
  grid-template-rows: 25vh 1fr;
`;

export const StyledContentWrapper = styled.div`
  margin: 0 auto;
  `;

export const StyledSearchWrapper = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
`

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
