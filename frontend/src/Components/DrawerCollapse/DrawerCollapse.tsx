import { useDrawer } from "../../Contexts/DrawerContext";
import DrawerHeader from "./DrawerHeader/DrawerHeader";
import { StyledCollapse, StyledDiv } from "./StyledDrawerCollapse";
import { Divider } from "@mui/material";
import DrawerContent from "./DrawerContent/DrawerContent";
import ChatRoom from "../ChatRoom/ChatRoom";
import { useAuth } from "../../Contexts/AuthContext";
import { useEffect } from "react";

const DrawerCollapse = () => {
  const { showDrawer, toggleDrawer, showChatRoom } = useDrawer();
  const { setInvisibleMsgBadge } = useAuth();

  const emptyFooter = <div></div>;

  useEffect(() => {
    setInvisibleMsgBadge(true);
  }, [showDrawer]);

  const drawer = (
    <StyledDiv>
      <DrawerHeader toggle={toggleDrawer} />
      <Divider style={{marginBottom: '1rem'}}/>
      {!showChatRoom ? <DrawerContent /> : <ChatRoom/>}
      {emptyFooter}
    </StyledDiv>
  );

  return <StyledCollapse in={showDrawer}>{drawer}</StyledCollapse>;
};

export default DrawerCollapse;
