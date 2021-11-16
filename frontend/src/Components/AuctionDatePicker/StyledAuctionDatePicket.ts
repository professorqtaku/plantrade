import styled from "styled-components";
import DatePicker from "react-datepicker";

export const StyledDatePicker = styled(DatePicker)`
  width: 100%;
  padding: 20px 0;
  outline: none;
  border: 1px solid lightgrey;
  border-radius: 4px;
  background: var(--background-color);
  cursor: pointer;
`;

export const StyledWrapper = styled.div`
  z-index: 100;
  position: relative;
`
