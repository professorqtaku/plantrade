import { useDrawer } from "../../../../Contexts/DrawerContext";
import { useNotification } from "../../../../Contexts/NotificationContext";
import {
  StyledHeader,
  StyledExpandIcon,
  StyledText,
  StyledAmountOfMsg,
} from "../StyledDrawerHeader";

const NoticeDrawerHeader = () => {
  const { notifications } = useNotification();
  const { toggleDrawer } = useDrawer();

  return (
    <StyledHeader>
      <StyledText isright={false}>Notifikationer</StyledText>
      <StyledExpandIcon onClick={toggleDrawer} />
      <StyledText isright={true}>
        Antal: <StyledAmountOfMsg>{notifications.length}</StyledAmountOfMsg>
      </StyledText>
    </StyledHeader>
  );
};

export default NoticeDrawerHeader;
