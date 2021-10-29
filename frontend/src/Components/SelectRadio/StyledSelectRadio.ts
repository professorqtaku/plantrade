import styled from "styled-components";
import { FormControl, RadioGroup, Radio } from "@mui/material";

export const StyledFormControl = styled(FormControl)`
  width: 100%
`;

export const StyledRadioGroup = styled(RadioGroup)`
  padding: 2%;
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

export const StyledRadio = styled(Radio)`
  color: var(--dark-grey) !important;
`;