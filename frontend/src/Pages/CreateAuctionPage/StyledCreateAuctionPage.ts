import styled from "styled-components";
import Button from "@mui/material/Button";

export const StyledWrapper = styled.div`
  margin: 0 auto;
`;

export const StyledTitle = styled.p`
  font-size: 1.5rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  text-align: center;
`;

export const StyledForm = styled.form`
  width: 70%;
  margin: 0 auto;
  /* display: grid;
  grid-gap: 1rem;
  grid-template-columns: 1fr; */

`;

export const StyledButton = styled(Button)`
  margin: 10px 0;
  background: var(--light-green);
  text-transform: uppercase;
  font-size:  "1rem";
  letter-spacing: 1px;
  &:hover {
    background: var(--light-green);
  }
  margin-bottom: 70px;
  width: 100%;
`;

export const StyledText = styled.p`
  margin: 0;
  color: darkgrey;
  font-family: var(--font-normal-text);
  font-size: 0.9rem;
`;

export const StyledImage = styled.img`
  max-width: 150px;
  max-height: 150px;
  margin: 0.3rem;
  cursor: pointer;
`;

export const StyledTextPrimary = styled.div`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: var(--status-green);
  font-family: var(--font-normal-text);
  padding: 5px;
`;

export const StyledEndDate = styled.div`
  margin: 5px 0 10px 0;
`;



