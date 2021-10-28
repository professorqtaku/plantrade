import { BaseSyntheticEvent } from "react";
import {
  StyledTextField,
  StyledFormControl,
  StyledIconButton,
} from "./StyledSearchField";
import SearchIcon from "@mui/icons-material/Search";


interface Props {
  searchText: string;
  setSearchText: Function;
}

const SearchField = ({ searchText, setSearchText }: Props) => {

  return (
    <StyledFormControl>
      <StyledTextField
        id="search-input-field"
        variant="standard"
        type="text"
        value={searchText}
        onChange={(e: BaseSyntheticEvent) => setSearchText(e.target.value)}
        inputProps={{
          style: { fontFamily: "var(--font-text)", fontSize: 24 },
        }}
        InputProps={{
          endAdornment: (
            <StyledIconButton type="submit" inputed={searchText.length > 0}>
              <SearchIcon />
            </StyledIconButton>
          ),
          disableUnderline: true,
        }}
      />
    </StyledFormControl>
  );
};

export default SearchField;