import styled from "styled-components";
import Button from "@mui/material/Button";

export const StyledButton = styled(Button)`
  background: var(--light-green);
  text-transform: uppercase;
  font-size: 1rem;
  letter-spacing: 1px;
  &:hover {
    background: var(--light-green);
  }
`;
