import { BaseSyntheticEvent } from 'react'
import { Autocomplete, Checkbox, TextField } from "@mui/material";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";

interface Props {
  options: string[];
  label?: string;
  setSelected: Function;
  limitTags?: number;
}

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

const SelectCheckbox = ({ options, label, setSelected, limitTags }: Props) => {
  const handleChange = (event: BaseSyntheticEvent, value: string[]) => {
    setSelected(value);
  };

  return (
    <Autocomplete
      multiple
      limitTags={limitTags}
      options={options}
      onChange={(event, value) => handleChange(event, value)}
      disableCloseOnSelect
      getOptionLabel={(option) => option}
      renderOption={(props, option, { selected }) => (
        <li {...props}>
          <Checkbox
            key={`filter-category-checkbox-${option}`}
            icon={icon}
            checkedIcon={checkedIcon}
            style={{ marginRight: 8 }}
            checked={selected}
          />
          {option}
        </li>
      )}
      renderInput={(params) => <TextField {...params} label={label} />}
    />
  );
};

export default SelectCheckbox
