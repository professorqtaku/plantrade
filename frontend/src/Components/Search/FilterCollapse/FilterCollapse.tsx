import { Box, IconButton } from "@mui/material";
import {
  StyledCollapse,
  StyledDiv,
  StyledTitle,
  StyledHeader,
} from "./StyledFilterCollapse";
import SelectCheckbox from "../../SelectCheckbox/SelectCheckbox";
import InputField from "../../InputField/InputField";
import SelectRadio from "../../SelectRadio/SelectRadio";
import CloseIcon from "@mui/icons-material/Close";
import { Status, status, SortByTimes, sortByTimes } from "../../../Utils/types";
import { useCategory } from "../../../Contexts/CategoryContext";
import { Category } from "../../../Interfaces/Interfaces";
import ClearButton from "../../ClearButton/ClearButton";
import { useSearch } from "../../../Contexts/SearchContext";
import { useAuction } from "../../../Contexts/AuctionContext";

interface Props {
  isOpen: boolean;
  toggle: Function;
  // hours: number;
  // setHours: Function;
  selectedStatus: Status;
  selectedCategories: Category[];
  setSelectedStatus: Function;
  setSelectedCategories: Function;
  setSelectedSortTime: Function;
  selectedSortTime: SortByTimes;
}

function FilterCollapse({
  isOpen,
  toggle,
  selectedStatus,
  setSelectedStatus,
  selectedCategories,
  setSelectedCategories,
  selectedSortTime,
  setSelectedSortTime
}: Props) {
  const { allCategories } = useCategory();
  const { clearFilter, isRerender, getAuctionsByOptions } = useSearch();
  // const { getAllAuctions } = useAuction();

  const handleClearFilter = () => {
    clearFilter();
    toggle();
    // getAuctionsByOptions();
    // getAllAuctions();
  }

  return (
    <StyledCollapse in={isOpen} timeout="auto" unmountOnExit>
      <StyledDiv>
        <StyledHeader>
          <ClearButton label="Rensa" type="button" callback={handleClearFilter} />
          <IconButton type="button" onClick={() => toggle()}>
            <CloseIcon />
          </IconButton>
        </StyledHeader>
        <Box>
          <StyledTitle>KATEGORIER</StyledTitle>
          <SelectCheckbox
            isRerender={isRerender}
            options={allCategories}
            selected={selectedCategories}
            setSelected={setSelectedCategories}
            limitTags={1} // 1 for now (console.log)
          />
        </Box>
        <Box>
          <StyledTitle>ANNONSER SOM AVSLUTAS INOM</StyledTitle>
          <SelectRadio
            isRerender={isRerender}
            options={sortByTimes}
            updateState={setSelectedSortTime}
            optionKey={"title"}
            defaultValue={selectedSortTime}
          />
          {/* <InputField
            type="number"
            value={hours}
            updateState={setHours}
            InputLabelProps={{
              shrink: true,
            }}
            InputProps={{
              endAdornment: <p>TIMMAR</p>,
              inputProps: { min: 1 },
            }}
          /> */}
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
