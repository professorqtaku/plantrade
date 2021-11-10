import styled from "styled-components";
import { FormControl, IconButton, TextField } from "@mui/material";

interface Props {
  // check if input has content
  input?: string;
  isfilteropen?: boolean;
}

export const StyledTextField = styled(TextField)<Props>`
  background-color: ${props => (props.isfilteropen ? "white" : "var(--yellow)")};
  border-radius: ${(props) => (props.isfilteropen ? "25px 25px 0 0" : "100px")};
  padding: 2% 5%;
  width: 90%;
  transition: ${(props) => (props.isfilteropen ? "100ms" : "1200ms")};
`;

export const StyledFormControl = styled(FormControl)<Props>`
  width: 100%;
`;

export const StyledIconButton = styled(IconButton)<Props>`
  background-color: ${(props) => props.input && props.input.length > 0 && "var(--light-green)"};
  transition: 500ms;
  &:focus {
    background-color: var(--light-green);
  }
`;