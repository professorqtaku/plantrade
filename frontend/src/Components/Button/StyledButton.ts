import styled from "styled-components";
import Button from "@mui/material/Button";

interface Props {
  fontsize?: string;
}

export const StyledButton = styled(Button)<Props>`
  background: var(--light-green);
  text-transform: uppercase;
  font-size: ${(props) => props.fontsize ? props.fontsize: "1rem"};
  letter-spacing: 1px;
  &:hover {
    background: var(--light-green);
  }
`;
