import { BaseSyntheticEvent } from 'react'
import { Autocomplete, Checkbox, TextField } from "@mui/material";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import { Category } from '../../Interfaces/Interfaces';
import { StyledChip } from './StyledSelectCheckbox';

interface Props {
  options: Category[];
  label?: string;
  isRerender: boolean;
  selected: Category[];
  setSelected: Function;
  limitTags?: number;
}

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

const SelectCheckbox = ({
  label,
  options,
  isRerender,
  setSelected,
  limitTags,
  selected,
}: Props) => {
  const handleChange = (event: BaseSyntheticEvent, value: Category[]) => {
    setSelected(value);
  };

  return (
    <Autocomplete
      multiple
      key={`search-category-${isRerender}`}
      limitTags={limitTags}
      options={options}
      onChange={(event, value) => handleChange(event, value)}
      disableCloseOnSelect
      defaultValue={selected}
      getOptionLabel={(option) => option.name}
      renderTags={
        (tagValue, getTagProps) => {
          return tagValue.map((option, index) => (
            <StyledChip {...getTagProps({index})} label={option.name}/>
          ))
      }}
      renderOption={(props, option, { selected }) => (
        <li {...props}>
          <Checkbox
            key={`filter-category-checkbox-${option}`}
            icon={icon}
            checkedIcon={checkedIcon}
            style={{ marginRight: 8 }}
            checked={selected}
          />
          {option.name}
        </li>
      )}
      renderInput={(params) => <TextField {...params} label={label} />}
    />
  );
};

export default SelectCheckbox
