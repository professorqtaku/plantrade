import { Box, IconButton } from "@mui/material";
import {
  StyledCollapse,
  StyledDiv,
  StyledTitle,
  StyledHeader,
  StyledIconButton,
} from "./StyledFilterCollapse";
import SelectCheckbox from "../../SelectCheckbox/SelectCheckbox";
import SelectRadio from "../../SelectRadio/SelectRadio";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { Status, status, SortByTimes, sortByTimes } from "../../../Utils/types";
import { useCategory } from "../../../Contexts/CategoryContext";
import { Category } from "../../../Interfaces/Interfaces";
import ClearButton from "../../ClearButton/ClearButton";
import { useSearch } from "../../../Contexts/SearchContext";
import { useAuction } from "../../../Contexts/AuctionContext";
import { useEffect } from "react";

interface Props {
  isOpen: boolean;
  toggle: Function;
  selectedStatus: Status;
  selectedCategories: Category[];
  setSelectedStatus: Function;
  setSelectedCategories: Function;
  setSelectedSortTime: Function;
  selectedSortTime: SortByTimes;
  setShowFilter: Function;
}

function FilterCollapse({
  isOpen,
  toggle,
  selectedStatus,
  setSelectedStatus,
  selectedCategories,
  setSelectedCategories,
  selectedSortTime,
  setSelectedSortTime,
  setShowFilter,
}: Props) {
  const { allCategories } = useCategory();
  const { auctions, clearFilter, isRerender } = useSearch();

  const handleClearFilter = () => {
    clearFilter();
    setShowFilter(false);
  };

  return (
    <StyledCollapse in={isOpen} timeout="auto" unmountOnExit>
      <StyledDiv>
        <StyledIconButton type="button" onClick={() => toggle()}>
          <ExpandLessIcon />
        </StyledIconButton>
        <StyledHeader>
          <ClearButton
            label="Rensa"
            type="button"
            callback={handleClearFilter}
          />
        </StyledHeader>
        <Box>
          <StyledTitle paddingtop="0">KATEGORIER</StyledTitle>
          <SelectCheckbox
            isRerender={isRerender}
            options={allCategories}
            selected={selectedCategories}
            setSelected={setSelectedCategories}
            limitTags={1} // 1 for now (console.log)
          />
        </Box>
        <Box>
          <StyledTitle>SORTERA ANNONSER</StyledTitle>
          <SelectRadio
            isRerender={isRerender}
            options={sortByTimes}
            updateState={setSelectedSortTime}
            optionKey={"title"}
            defaultValue={selectedSortTime}
          />
        </Box>
        <Box>
          <StyledTitle>SE ENDAST</StyledTitle>
          <SelectRadio
            isRerender={isRerender}
            options={status}
            updateState={setSelectedStatus}
            optionKey={"title"}
            defaultValue={selectedStatus}
          />
        </Box>
      </StyledDiv>
    </StyledCollapse>
  );
}

export default FilterCollapse;
