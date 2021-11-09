import { useState } from "react";
import { useDrawer } from "../../Contexts/DrawerContext";
import DrawerHeader from "./DrawerHeader/DrawerHeader";
import { StyledCollapse, StyledDiv } from "./StyledDrawerCollapse";
import { Divider } from "@mui/material";
import DrawerContent from "./DrawerContent/DrawerContent";
import ChatRoom from "../ChatRoom/ChatRoom";

const DrawerCollapse = () => {
  const { showDrawer, toggleDrawer, showChatRoom } = useDrawer();

  const emptyFooter = <div></div>;

  const drawer = (
    <StyledDiv>
      <DrawerHeader toggle={toggleDrawer} />
      <Divider />
      {!showChatRoom ? <DrawerContent /> : <ChatRoom/>}
      {emptyFooter}
    </StyledDiv>
  );

  return <StyledCollapse in={showDrawer}>{drawer}</StyledCollapse>;
};

export default DrawerCollapse;
