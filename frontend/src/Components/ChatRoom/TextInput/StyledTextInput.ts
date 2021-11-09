import styled from "styled-components";
import SendIcon from "@mui/icons-material/Send";

export const StyledWrapper = styled.div`
  background: #f8f8f8;
  border-top: 1px solid lightgray;
  display: grid;
  grid-template-columns: 1fr 2rem;
  grid-gap: 5px;
`;

export const StyledInput = styled.input`
  background: white;
  border: none;
  padding: 0.5rem;
  color: black;
  outline: none;
  align-self: center;
  margin-left: 0.7rem;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
`;

export const StyledSendIcon = styled(SendIcon)`
  align-self: center;
`;
