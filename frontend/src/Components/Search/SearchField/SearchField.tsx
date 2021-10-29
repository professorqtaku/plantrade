import { BaseSyntheticEvent, useState } from "react";
import {
  StyledTextField,
  StyledFormControl,
  StyledIconButton,
} from "./StyledSearchField";
import SearchIcon from "@mui/icons-material/Search";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import { IconButton } from "@mui/material";
import FilterCollapse from "../FilterCollapse/FilterCollapse"


interface Props {
  searchText: string;
  setSearchText: Function;
}

const SearchField = ({ searchText, setSearchText }: Props) => {
    const [showFilter, setShowFilter] = useState<boolean>(false);
    const toggleFilter = () => setShowFilter(!showFilter);

  return (
    <StyledFormControl>
      <StyledTextField
        id="search-input-field"
        variant="standard"
        type="text"
        value={searchText}
        onChange={(e: BaseSyntheticEvent) => setSearchText(e.target.value)}
        onFocus={toggleFilter}
        onBlur={toggleFilter}
        inputProps={{
          style: { fontFamily: "var(--font-text)", fontSize: 24 },
        }}
        InputProps={{
          endAdornment: (
            <>
              <StyledIconButton type="submit" input={searchText}>
                <SearchIcon />
              </StyledIconButton>
              <IconButton type="button" onClick={toggleFilter}>
                <FilterAltOutlinedIcon />
              </IconButton>
            </>
          ),
          disableUnderline: true,
        }}
      />
      <FilterCollapse isOpen={showFilter}/>
    </StyledFormControl>
  );
};

export default SearchField;