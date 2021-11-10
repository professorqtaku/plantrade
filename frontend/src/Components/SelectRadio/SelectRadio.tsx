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
  isRerender: boolean;
}

const SelectRadio = ({
  options,
  updateState,
  optionKey,
  defaultValue,
  isRerender,
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
        key={`search-status-${isRerender}`}
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
          <Grid item key={`radio${index}`}>
            <FormControlLabel
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
