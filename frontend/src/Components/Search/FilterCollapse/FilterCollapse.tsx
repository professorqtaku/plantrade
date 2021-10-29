import React, { useState } from 'react'
import { Box } from "@mui/material";
import {
  StyledCollapse,
  StyledDiv,
  StyledTitle,
  StyledIconButton,
} from "./StyledFilterCollapse";
import SelectCheckbox from '../../SelectCheckbox/SelectCheckbox';
import InputField from '../../InputField/InputField';
import SelectRadio from '../../SelectRadio/SelectRadio';
import CloseIcon from "@mui/icons-material/Close";
import { status } from '../../../Utils/types';


interface Props {
  isOpen: boolean;
  toggle: Function;
  hours: number;
  setHours: Function;
  setSelectedStatus: Function;
  setSelectedCategories: Function;
}

const categories = ["Blomma", "Träd", "Stickling", "Frö", "Buske"];

function FilterCollapse({
  isOpen,
  toggle,
  hours,
  setHours,
  setSelectedStatus,
  setSelectedCategories,
}: Props) {

  return (
    <StyledCollapse in={isOpen} timeout="auto" unmountOnExit>
      <StyledDiv>
        <StyledIconButton type="button" onClick={() => toggle()}>
          <CloseIcon />
        </StyledIconButton>
        <Box>
          <StyledTitle>KATEGORIER</StyledTitle>
          <SelectCheckbox
            options={categories}
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
            defaultValue={status[0]}
          />
        </Box>
      </StyledDiv>
    </StyledCollapse>
  );
}

export default FilterCollapse;
