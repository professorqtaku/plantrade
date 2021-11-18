import styled from "styled-components";
import Box from "@mui/material/Box";

interface BoxProps {
  isFirstLoad: boolean
}

export const StyledWrapper = styled.div`
  max-height: 100vh;
  display: grid;
  grid-template-rows: 25vh 1fr;
  
  @media (min-width: 769px) {
  max-height: 100%;
  }
`;

export const StyledContentWrapper = styled.div`
  padding: 20px;
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
  width: 80%;
  margin: 0 auto;
  position: absolute;
  top: 60%;
  left: 10%;
  z-index: 50;
`;

export const StyledEndAuctions = styled.div`
  margin: 20px 0 100px 0;
  text-align: center;
  font-family: var(--font-text);
`;

export const StyledBox = styled(Box)<BoxProps>`
  margin: ${(props) => !props.isFirstLoad && '40px auto 80px 45%'};
`;
