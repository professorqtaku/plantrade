import styled from "styled-components";
import Button from "@mui/material/Button";

export const StyledWrapper = styled.div``;

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

