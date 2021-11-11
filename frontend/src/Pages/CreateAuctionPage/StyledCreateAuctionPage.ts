import styled from "styled-components";
import Button from "@mui/material/Button";

export const StyledWrapper = styled.div`
  padding: 0.5rem;
`;

export const StyledTitle = styled.p`
  font-size: 1.5rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  text-align: center;
`;

export const StyledForm = styled.form`
  width: 90%;
  margin: 1rem auto;
  display: grid;
  grid-gap: 1rem;
`;

export const StyledInput = styled.input`
  padding: 0.5rem;
  outline: none;
`;

export const StyledButton = styled(Button)`
  background: var(--light-green);
  text-transform: uppercase;
  font-size:  "1rem";
  letter-spacing: 1px;
  &:hover {
    background: var(--light-green);
  }
`;

export const StyledText = styled.p`
  margin: 0;
  color: darkgrey;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 0.9rem;
`;

export const StyledImage = styled.img`
  max-width: 100px;
  max-height: 100px;
  margin: 0.5rem;
`;

