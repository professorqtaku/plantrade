import styled from "styled-components";
import Button from "@mui/material/Button";

interface Props {
  fontSize?: string;
}

export const StyledButton = styled(Button)<Props>`
  background: var(--light-green);
  text-transform: uppercase;
  font-size: ${(props) => props.fontSize ? props.fontSize: "1rem"};
  letter-spacing: 1px;
  &:hover {
    background: var(--light-green);
  }
`;
