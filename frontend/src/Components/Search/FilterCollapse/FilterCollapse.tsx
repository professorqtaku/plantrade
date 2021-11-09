import React, { useEffect, useState } from "react";
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
import { Status, status } from "../../../Utils/types";
import { useCategory } from "../../../Contexts/CategoryContext";
import { Category } from "../../../Interfaces/Interfaces";
import ClearButton from "../../ClearButton/ClearButton";
import { useSearch } from "../../../Contexts/SearchContext";

interface Props {
  isOpen: boolean;
  toggle: Function;
  hours: number;
  setHours: Function;
  selectedStatus: Status;
  selectedCategories: Category[];
  setSelectedStatus: Function;
  setSelectedCategories: Function;
}

function FilterCollapse({
  isOpen,
  toggle,
  hours,
  setHours,
  selectedStatus,
  setSelectedStatus,
  selectedCategories,
  setSelectedCategories,
}: Props) {
  const { allCategories } = useCategory();
  const { clearFilter, isRerender } = useSearch();

  return (
    <StyledCollapse in={isOpen} timeout="auto" unmountOnExit>
      <StyledDiv>
        <StyledHeader>
          <ClearButton label="rensa" type="button" callback={clearFilter} />
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
          <InputField
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
