import styled from "styled-components";
import Button from "@mui/material/Button";

interface Props {
  fontSize?: string;
  backgroundcolor?: string;
}

export const StyledButton = styled(Button)<Props>`
  background: ${(props) => props.backgroundcolor};
  font-size: ${(props) => props.fontSize};
  letter-spacing: 1px;
  border-radius: 50px;
  color: var(--grey) !important;
  border-color: var(--grey) !important;
`;
