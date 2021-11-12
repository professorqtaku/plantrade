import { useDrawer } from "../../../../Contexts/DrawerContext";
import {
  StyledHeader,
  StyledExpandIcon,
  StyledText
} from "../StyledDrawerHeader";

const NoticeDrawerHeader = () => {
  const { toggleDrawer } = useDrawer();

  return (
    <StyledHeader>
      <StyledText isright={false}>Notifikationer</StyledText>
      <StyledExpandIcon onClick={toggleDrawer} />
      <StyledText isright={true}></StyledText>
    </StyledHeader>
  );
};

export default NoticeDrawerHeader;
