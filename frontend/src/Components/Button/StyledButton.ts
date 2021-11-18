import styled from "styled-components";
import Button from "@mui/material/Button";

interface Props {
  fontSize?: string;
  backgroundcolor?: string;
}

export const StyledButton = styled(Button)<Props>`
  background: ${(props) =>
    props.backgroundcolor ? props.backgroundcolor : "var(--light-green)"};
  text-transform: uppercase;
  font-size: ${(props) => (props.fontSize ? props.fontSize : "1rem")};
  letter-spacing: 1px;
  &:hover {
    background: var(--light-green);
  }
`;
