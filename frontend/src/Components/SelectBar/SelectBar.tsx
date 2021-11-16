import * as React from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
import { StyledForm } from "./StyledSelectBar";

import { useCategory } from "../../Contexts/CategoryContext";
import { Category } from "../../Pages/AuctionPage/AuctionPage";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

interface Props {
  setCategoriesToUse: React.Dispatch<
    React.SetStateAction<Category[]>
  >;
}

const SelectBar = ({ setCategoriesToUse }: Props) => {
  const { allCategories} = useCategory();

  const [categories, setCategories] = React.useState<Category[]>([]);

  const handleChange = (event: any) => {
    const category = event.target.value
    setCategories(category);
    setCategoriesToUse(category);
  };

  return (
    <StyledForm>
      <InputLabel id="demo-multiple-checkbox-label">Kategori</InputLabel>
      <Select
        labelId="demo-multiple-checkbox-label"
        id="demo-multiple-checkbox"
        multiple
        value={categories}
        onChange={handleChange}
        input={<OutlinedInput label="Kategori" />}
        // can make nicer later.
        renderValue={(selected) => selected.map(cat => cat.name + ' ')}
        MenuProps={MenuProps}
      >
        {allCategories && allCategories.map((category: Category) => (
          // @ts-ignore
          <MenuItem key={category.id} value={category}>
            <Checkbox checked={categories.indexOf(category) > -1} />
            <ListItemText primary={category.name} /> 
          </MenuItem>
        ))}
      </Select>
    </StyledForm>
     
  );
};

export default SelectBar;
