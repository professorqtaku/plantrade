import React, { BaseSyntheticEvent } from 'react'
import {
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl
} from "@mui/material";

interface Props {
  options: string[] | Object[];
  optionKey?: string;
  updateState: Function;
}

const SelectRadio = ({ options, updateState, optionKey }: Props) => {

  const handleChange = (event: BaseSyntheticEvent) => {
    if (typeof options == "object" && optionKey) {
      for (let option of options) {
        if ((option as any)[optionKey] == event.target.value) {
          updateState(option)         
        }
      }
    } else {
      updateState(event.target.value);
    }
  };
  
  return (
    <FormControl component="fieldset">
      <RadioGroup
        row
        aria-label="gender"
        name="row-radio-buttons-group"
        onChange={handleChange}
      >
        {options.map((option, index) => (
          <FormControlLabel
            key={`${option}${index}`}
            value={
              typeof optionKey == "string" && typeof options == "object"
                ? (option as any)[optionKey]
                : option
            }
            control={<Radio />}
            label={
              typeof optionKey == "string" && typeof options == "object"
                ? (option as any)[optionKey]
                : option
            }
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
};

export default SelectRadio
