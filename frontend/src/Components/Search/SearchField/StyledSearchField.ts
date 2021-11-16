import styled from "styled-components";
import { FormControl, IconButton, TextField } from "@mui/material";

interface Props {
  // check if input has content
  input?: string;
  isfilteropen?: string;
}

export const StyledTextField = styled(TextField)<Props>`
  background-color: ${(props) =>
    props.isfilteropen === "true" ? "white" : "var(--yellow)"};
  border-radius: ${(props) =>
    props.isfilteropen === "true" ? "25px 25px 0 0" : "100px"};
  padding: 0.5rem 5%;
  width: 90%;
  box-shadow: ${(props) =>
    props.isfilteropen === "true" ? null : "0 0 3px var(--dark-grey)"};
  transition: ${(props) =>
    props.isfilteropen === "true" ? "100ms" : "1200ms"};
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