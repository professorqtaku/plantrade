import React, { FC } from "react";
import { FormControl, InputAdornment } from "@mui/material";
import { StyledTextField } from "./StyledSearchField";
import SearchIcon from "@mui/icons-material/Search";

const SearchField = () => {
  return (
    <FormControl>
      <StyledTextField
        id="search-input-field"
        variant="standard"
        type="search"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
          disableUnderline: true,
        }}
      />
    </FormControl>
  );
};

export default SearchField;