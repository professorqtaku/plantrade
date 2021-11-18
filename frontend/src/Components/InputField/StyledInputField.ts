import styled from 'styled-components'
import TextField from "@mui/material/TextField";
interface InputProps {
  margintop: number;
}
export const StyledInput = styled(TextField)<InputProps>`
  outline: none;
  margin-top: ${(props) =>
    props.margintop > 0 ? `${props.margintop}px` : `${0}px`};
`;
