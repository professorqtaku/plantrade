import styled from 'styled-components'
import { Collapse } from "@mui/material";

export const StyledCollapse = styled(Collapse)`
  position: fixed;
  bottom: 0;
  width: 100vw;
  background-color: var(--background-color);
  z-index: 99;
  transition: 1000ms;
`;

export const StyledDiv = styled.div`
  height: 85vh;
`;