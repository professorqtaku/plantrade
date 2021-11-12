import styled from "styled-components";
import DatePicker from "react-datepicker";

export const StyledDatePicker = styled(DatePicker)`
  width: 82vw; 
  padding: 1rem;
  outline: none;
  border: 1px solid lightgrey;
  border-radius: 4px;
`;

export const StyledWrapper = styled.div`
  z-index: 100;
  position: relative;
`
