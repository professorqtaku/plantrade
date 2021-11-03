import { BaseSyntheticEvent, useState } from "react";
import {
  StyledTextField,
  StyledFormControl,
  StyledIconButton,
} from "./StyledSearchField";
import SearchIcon from "@mui/icons-material/Search";
import FilterCollapse from "../FilterCollapse/FilterCollapse"


interface Props {
  searchText: string;
  setSearchText: Function;
  showFilter: boolean;
  setShowFilter: Function;
}

const SearchField = ({ searchText, setSearchText, showFilter, setShowFilter }: Props) => {

  return (
    <StyledFormControl>
      <StyledTextField
        id="search-input-field"
        variant="standard"
        type="text"
        value={searchText}
        isfilteropen={showFilter}
        onChange={(e: BaseSyntheticEvent) => setSearchText(e.target.value)}
        onFocus={() => setShowFilter(true)}
        inputProps={{
          style: { fontFamily: "var(--font-text)", fontSize: "1em" },
        }}
        InputProps={{
          endAdornment: (
            <>
              <StyledIconButton type="submit" input={searchText}>
                <SearchIcon />
              </StyledIconButton>
            </>
          ),
          disableUnderline: true,
        }}
      />
    </StyledFormControl>
  );
};

export default SearchField;