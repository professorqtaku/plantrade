import { useDrawer } from "../../Contexts/DrawerContext";
import DrawerHeader from "./DrawerHeader/DrawerHeader";
import { StyledCollapse, StyledDiv } from "./StyledDrawerCollapse";
import { Divider } from "@mui/material";
import DrawerContent from "./DrawerContent/DrawerContent";
import ChatRoom from "../ChatRoom/ChatRoom";

const DrawerCollapse = () => {
  const { showDrawer, showChatRoom } = useDrawer();

  const emptyFooter = <div></div>;

  const drawer = (
    <StyledDiv>
      <DrawerHeader />
      <Divider style={{marginBottom: '1rem'}}/>
      {!showChatRoom ? <DrawerContent /> : <ChatRoom/>}
      {emptyFooter}
    </StyledDiv>
  );

  return <StyledCollapse in={showDrawer}>{drawer}</StyledCollapse>;
};

export default DrawerCollapse;
