import React, { useState } from 'react'
import { Box } from "@mui/material";
import { StyledCollapse, StyledDiv, StyledTitle } from "./StyledFilterCollapse";
import SelectCheckbox from '../../SelectCheckbox/SelectCheckbox';
import { useSearch } from '../../../Contexts/SearchContext';
import InputField from '../../InputField/InputField';


interface Props{
  isOpen: boolean,
  toggle: Function
}

const categories = ["Blomma", "Träd", "Stickling", "Frö", "Buske"];

function FilterCollapse({ isOpen, toggle }: Props) {
  
  const { setSelectedCategories, hours, setHours } = useSearch();

  return (
    <StyledCollapse in={isOpen} timeout="auto" unmountOnExit>
      <StyledDiv>
        <Box>
          <StyledTitle>KATEGORIER</StyledTitle>
          <SelectCheckbox
            options={categories}
            setSelected={setSelectedCategories}
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
              endAdornment: (
                <p>TIMMAR</p>
              ),
              inputProps: {min: 1}
            }}
          />
        </Box>
        <Box>
          <StyledTitle>SE ENDAST</StyledTitle>
        </Box>
      </StyledDiv>
    </StyledCollapse>
  );
}

export default FilterCollapse;
