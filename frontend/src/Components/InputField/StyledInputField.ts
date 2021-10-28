import styled from 'styled-components'
import TextField from "@mui/material/TextField";
interface InputProps {
  marginTop: number;
}
export const StyledInput = styled(TextField) <InputProps>`
  outline: none;
  margin-top: ${(props) => props.marginTop > 0 ? `${props.marginTop}px` : `${0}px`};
`;
