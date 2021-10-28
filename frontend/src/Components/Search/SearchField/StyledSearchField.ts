import styled from "styled-components";
import { FormControl, IconButton, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

interface Props {
  // check if input has content
  texted: boolean;
}

export const StyledTextField = styled(TextField)`
  background-color: var(--yellow);
  border-radius: 50px;
  padding: 2% 5%;
  width: 100%;
`;

export const StyledFormControl = styled(FormControl)`
  background-color: var(--yellow);
  border-radius: 50px;
  width: 100%;
`;

export const StyledIconButton = styled(IconButton)<Props>`
  background-color: ${(props) => props.texted && "var(--light-green)"};
  transition: 500ms;
  &:focus {
    background-color: var(--light-green);
  }
`;

export const StyledSearchIcon = styled(SearchIcon)`
  /* background-color: var(--light-green); */
  &:focus {
    /* background-color: var(--light-green); */
  }
`;