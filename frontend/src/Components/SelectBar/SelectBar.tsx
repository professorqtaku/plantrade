import * as React from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
import { StyledForm } from "./StyledSelectBar";
import FormControl from "@mui/material/FormControl";

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
  "Kategori 1",
  "Kategori 2",
  "Kategori 3",
  "Kategori 4",
  "Kategori 5",
  "Kategori 6",
  "Kategori 7",
  "Kategori 8",
  "Kategori 9",
  "Kategori 10",
];

interface Props {
  setCategoriesToUse: React.Dispatch<
    React.SetStateAction<String[] | undefined>
  >;
}

const SelectBar = ({ setCategoriesToUse }: Props) => {
  const [categories, setCategories] = React.useState<string[]>([]);

  const handleChange = (event: SelectChangeEvent<typeof categories>) => {
    const {
      target: { value },
    } = event;
    setCategories(typeof value === "string" ? value.split(",") : value);
    setCategoriesToUse(typeof value === "string" ? value.split(",") : value);
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
        renderValue={(selected) => selected.join(", ")}
        MenuProps={MenuProps}
      >
        {values.map((category) => (
          <MenuItem key={category} value={category}>
            <Checkbox checked={categories.indexOf(category) > -1} />
            <ListItemText primary={category} />
          </MenuItem>
        ))}
      </Select>
    </StyledForm>
  );
};

export default SelectBar;
