import * as React from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
import { StyledForm } from "./StyledSelectBar";
import FormControl from "@mui/material/FormControl";

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

const values = [
  "Blomma",
  "Träd",
  "Stickling",
  "Frö",
  "Buske"
];

interface Props {
  setCategoriesToUse: React.Dispatch<
    React.SetStateAction<Category[] | undefined>
  >;
}

const SelectBar = ({ setCategoriesToUse }: Props) => {
  const { getAllCategories, allCategories} = useCategory();

  const [categories, setCategories] = React.useState<Category[]>([]);

  React.useEffect(() => {
    handleGetCategories();
  }, [])

  const handleGetCategories = async () => {
    if (allCategories.length == 0) {
      await getAllCategories();
    }
  };
  // SelectChangeEvent<typeof categories>
  const handleChange = (event: SelectChangeEvent<any>) => {
    console.log(event, 'event')
    const { target: { value } } = event;
    console.log(JSON.parse(value), 'value')
    
    setCategories([
      ...categories,
      value])

    console.log(categories, 'categories')
    // setCategories(typeof value === "string" ? value.split(",") : value);
    // setCategoriesToUse(typeof value === "string" ? value.split(",") : value);
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
        // renderValue={(selected) => selected.join(", ")}
        MenuProps={MenuProps}
      >
        {allCategories.map((category: Category) => (
          <MenuItem key={category.id} value={JSON.stringify(category)}>
            <Checkbox checked={categories.indexOf(category) > -1} />
            <ListItemText primary={category.name} />
          </MenuItem>
        ))}
      </Select>
    </StyledForm>
     
  );
};

export default SelectBar;
