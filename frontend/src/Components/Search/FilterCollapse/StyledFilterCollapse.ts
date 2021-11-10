import styled from "styled-components";
import { Collapse } from '@mui/material'

export const StyledCollapse = styled(Collapse)`
  background: var(--yellow);
  width: 100%;
  border-radius: 0 0 5px 5px;
  max-height: 500px;
  position: relative;
  z-index: 100;
`;
export const StyledDiv = styled.div`
  background: var(--light-yellow);
  width: 90%;
  margin: 3% auto;
  margin-top: 0;
  border-radius: 5px;
  padding: 3%;
  max-height: 400px;
`;

export const StyledTitle = styled.p`
  padding: 40px 10px 10px;
  margin: 0;
  font-family: var(--font-text);
`;

export const StyledHeader = styled.div`
  position: absolute;
  right: 5%;
`;