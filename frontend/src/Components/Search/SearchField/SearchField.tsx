import React, { BaseSyntheticEvent, FC } from "react";
import {
  StyledTextField,
  StyledFormControl,
  StyledIconButton,
  StyledSearchIcon,
} from "./StyledSearchField";

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
          style: { fontFamily: "'Abhaya Libre', serif", fontSize: 24 },
        }}
        InputProps={{
          endAdornment: (
            <StyledIconButton type="submit" texted={searchText.length > 0}>
              <StyledSearchIcon />
            </StyledIconButton>
          ),
          disableUnderline: true,
        }}
      />
    </StyledFormControl>
  );
};

export default SearchField;