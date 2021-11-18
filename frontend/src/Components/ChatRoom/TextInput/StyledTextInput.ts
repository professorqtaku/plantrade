import styled from "styled-components";
import SendIcon from "@mui/icons-material/Send";

export const StyledForm = styled.form`
  background: #f8f8f8;
  border-top: 1px solid lightgray;
  display: grid;
  grid-template-columns: 1fr 2rem;
  grid-gap: 5px;
`;

export const StyledInput = styled.input`
  background: white;
  border: none;
  height: 1.5rem;
  border-radius: 5px;
  padding: 0.3rem;
  color: black;
  outline: none;
  align-self: start;
  margin-left: 0.7rem;
  margin-top: 0.5rem;
  box-shadow: 0 3px 10px var(--shadow-color);
  @media (min-width: 768px) {
    margin-top: 2rem;
  }
`;

export const StyledSendIcon = styled(SendIcon)`
  align-self: start;
  margin-top: 0.8rem;
  @media (min-width: 768px) {
    margin-top: 2.2rem;
  }
`;

export const StyledButton = styled.button`
  border: none;
`
