import { useState } from 'react';
import { useDrawer } from '../../Contexts/DrawerContext';
import { StyledCollapse, StyledDiv } from "./StyledDrawerCollapse";

type Anchor = "bottom";

const Drawer = () => {
  const { showDrawer, toggleDrawer } = useDrawer();

  const drawer = (
    <StyledDiv>
      hej
    </StyledDiv>
  )

  return (
    <StyledCollapse
      in={showDrawer}
    >
      {drawer}
    </StyledCollapse>
  );
}

export default Drawer;
