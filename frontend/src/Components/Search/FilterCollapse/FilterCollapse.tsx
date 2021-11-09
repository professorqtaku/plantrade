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
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { Status, status } from "../../../Utils/types";
import { useCategory } from "../../../Contexts/CategoryContext";
import { Category } from "../../../Interfaces/Interfaces";

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
  return (
    <StyledCollapse in={isOpen} timeout="auto" unmountOnExit>
      <StyledDiv>
        <StyledIconButton type="button" onClick={() => toggle()}>
          <ExpandLessIcon />
        </StyledIconButton>
        <Box>
          <StyledTitle paddingtop="0">KATEGORIER</StyledTitle>
          <SelectCheckbox
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
