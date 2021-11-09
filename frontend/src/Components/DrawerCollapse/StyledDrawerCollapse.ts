import styled from 'styled-components'
import { Collapse } from "@mui/material";

export const StyledCollapse = styled(Collapse)`
  position: fixed;
  bottom: 0;
  width: 100vw;
  background-color: pink;
  z-index: 99;
`;

export const StyledDiv = styled.div`
  height: 85vh;
  background-color: var(--background-color);
  display: grid;
  grid-template-rows: 30px 10px 1fr 50px;
`;