import React, { BaseSyntheticEvent } from 'react'
import {
  FormControlLabel,
  Grid
} from "@mui/material";
import { StyledFormControl, StyledRadioGroup, StyledRadio } from './StyledSelectRadio';

interface Props {
  options: string[] | Object[];
  defaultValue?: string | Object;
  optionKey?: string;
  updateState: Function;
}

const SelectRadio = ({
  options,
  updateState,
  optionKey,
  defaultValue,
}: Props) => {
  const handleChange = (event: BaseSyntheticEvent) => {
    if (typeof options == "object" && optionKey) {
      for (let option of options) {
        if ((option as any)[optionKey] == event.target.value) {
          updateState(option);
        }
      }
    } else {
      updateState(event.target.value);
    }
  };

  return (
    <StyledFormControl>
      <StyledRadioGroup
        row
        aria-label="gender"
        name="row-radio-buttons-group"
        onChange={handleChange}
        defaultValue={
          typeof defaultValue == "object" && typeof optionKey == "string"
            ? (defaultValue as any)[optionKey]
            : defaultValue
        }
      >
        {options.map((option, index) => (
          <Grid item>
            <FormControlLabel
              key={`${option}${index}`}
              value={
                typeof optionKey == "string" && typeof options == "object"
                  ? (option as any)[optionKey]
                  : option
              }
              control={<StyledRadio />}
              label={
                typeof optionKey == "string" && typeof options == "object"
                  ? (option as any)[optionKey]
                  : option
              }
            />
          </Grid>
        ))}
      </StyledRadioGroup>
    </StyledFormControl>
  );
};

export default SelectRadio
