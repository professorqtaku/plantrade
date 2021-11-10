import styled from "styled-components";
import { Collapse, IconButton } from '@mui/material'

interface Props {
  paddingtop?: string;
}

export const StyledCollapse = styled(Collapse)`
  background: white;
  width: 100%;
  border-radius: 0 0 5px 5px;
  max-height: 500px;
  position: relative;
  z-index: 100;
  box-shadow: 0 10px 10px rgb(0 0 0 / 0.2);
  /* box-shadow: 0px 10px 15px 5px var(--dark-grey); */
`;
export const StyledDiv = styled.div`
  background: white;
  width: 90%;
  margin: 3% auto;
  margin-top: 0;
  border-radius: 5px;
  padding: 3%;
  max-height: 400px;
`;

export const StyledTitle = styled.p<Props>`
  padding: ${(props) =>
    props.paddingtop ? `${props.paddingtop} 10px 10px` : "30px 10px 10px"};
  margin: 0;
  font-family: var(--font-text);
`;

export const StyledHeader = styled.div`
  position: absolute;
  top: 0;
  right: 5%;
  z-index: 100;
`;

export const StyledIconButton = styled(IconButton)`
  position: absolute;
  bottom: 5%;
  right: 5%;
  z-index: 100;
`;