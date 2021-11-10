import React, { useState } from "react";
import { Box } from "@mui/material";
import {
  StyledCollapse,
  StyledDiv,
  StyledTitle,
  StyledIconButton,
} from "./StyledFilterCollapse";
import SelectCheckbox from "../../SelectCheckbox/SelectCheckbox";
import InputField from "../../InputField/InputField";
import SelectRadio from "../../SelectRadio/SelectRadio";
import CloseIcon from "@mui/icons-material/Close";
import { Status, status, SortByTimes, sortByTimes } from "../../../Utils/types";
import { useCategory } from "../../../Contexts/CategoryContext";

interface Props {
  isOpen: boolean;
  toggle: Function;
  // hours: number;
  // setHours: Function;
  selectedStatus: Status;
  selectedCategories: string[];
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
  return (
    <StyledCollapse in={isOpen} timeout="auto" unmountOnExit>
      <StyledDiv>
        <StyledIconButton type="button" onClick={() => toggle()}>
          <CloseIcon />
        </StyledIconButton>
        <Box>
          <StyledTitle>KATEGORIER</StyledTitle>
          <SelectCheckbox
            options={allCategories}
            selected={selectedCategories}
            setSelected={setSelectedCategories}
            limitTags={1} // 1 for now (console.log)
          />
        </Box>
        <Box>
          <StyledTitle>ANNONSER SOM AVSLUTAS INOM</StyledTitle>
          <SelectRadio
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
