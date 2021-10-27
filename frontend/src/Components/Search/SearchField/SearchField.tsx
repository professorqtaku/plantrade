import React, { FC } from "react";
import { InputAdornment } from "@mui/material";
import { StyledTextField, StyledFormControl } from "./StyledSearchField";
import SearchIcon from "@mui/icons-material/Search";

const SearchField = () => {
  return (
    <StyledFormControl>
      <StyledTextField
        id="search-input-field"
        variant="standard"
        type="search"
        inputProps={{
          style: { fontFamily: "'Abhaya Libre', serif", fontSize: 24 },
        }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
          disableUnderline: true,
        }}
      />
    </StyledFormControl>
  );
};

export default SearchField;