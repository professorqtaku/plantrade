import styled from "styled-components";
import { FormControl, IconButton, TextField } from "@mui/material";

interface Props {
  // check if input has content
  input?: string;
  isfilteropen?: string;
}

export const StyledTextField = styled(TextField)<Props>`
  background-color: var(--yellow);
  border-radius: ${(props) => (props.isfilteropen === "true" ? "50% 50% 0 0" : "50%")};
  padding: 2% 5%;
  width: 90%;
  transition: ${(props) => (props.isfilteropen === "true" ? "100ms" : "1200ms")};
`;

export const StyledFormControl = styled(FormControl)`
  background-color: var(--yellow);
  border-radius: 50px;
  width: 100%;
`;

export const StyledIconButton = styled(IconButton)<Props>`
  background-color: ${(props) => props.input && props.input.length > 0 && "var(--light-green)"};
  transition: 500ms;
  &:focus {
    background-color: var(--light-green);
  }
`;