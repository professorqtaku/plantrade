import React from 'react'
import { Box } from '@mui/material'
import { StyledCollapse, StyledDiv } from "./StyledFilterCollapse";
import SelectCheckbox from '../../SelectCheckbox/SelectCheckbox';
import { useSearch } from '../../../Contexts/SearchContext';


interface Props{
  isOpen: boolean,
  toggle: Function
}

const categories = ["Blomma", "Träd", "Stickling", "Frö", "Buske"];

function FilterCollapse({ isOpen, toggle }: Props) {
  
  const { setSelectedCategories } = useSearch();

  return (
    <StyledCollapse in={isOpen} timeout="auto" unmountOnExit>
      <StyledDiv>
        <Box>
          <SelectCheckbox
            options={categories}
            label="Kategorier"
            setSelected={setSelectedCategories}
            />
        </Box>
        <Box>
          <p>hej</p>
        </Box>
        <Box>
          <p>hej</p>
        </Box>
      </StyledDiv>
    </StyledCollapse>
  );
}

export default FilterCollapse;
