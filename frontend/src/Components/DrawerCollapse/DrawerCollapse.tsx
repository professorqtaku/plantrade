import { useState } from "react";
import { useDrawer } from "../../Contexts/DrawerContext";
import DrawerHeader from "./DrawerHeader/DrawerHeader";
import { StyledCollapse, StyledDiv } from "./StyledDrawerCollapse";
import { Divider } from "@mui/material";
import DrawerContent from "./DrawerContent/DrawerContent";

const DrawerCollapse = () => {
  const { showDrawer, toggleDrawer } = useDrawer();

  const emptyFooter = <div></div>;

  const drawer = (
    <StyledDiv>
      <DrawerHeader toggle={toggleDrawer} />
      <Divider />
      <DrawerContent />
      {emptyFooter}
    </StyledDiv>
  );

  return <StyledCollapse in={showDrawer}>{drawer}</StyledCollapse>;
};

export default DrawerCollapse;
