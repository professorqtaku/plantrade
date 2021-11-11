import {
  StyledWrapper,
  StyledTitle,
  StyledLastMsg,
  StyledName,
  StyledAvatar,
  StyledInnerWrapper,
  StyledBadge,
  StyledSwipe,
  StyledDelete,
  StyledTrashCan,
  StyledDeleteText,
} from "./StyledDrawerItem";
import {
  SwipeableListItem,
  SwipeAction,
  TrailingActions,
} from "react-swipeable-list";
import "react-swipeable-list/dist/styles.css";
import { useDrawer } from "../../../Contexts/DrawerContext";

interface Props {
  content: {
    title: string;
    username: string;
    lastSender: string;
  };
}

const DrawerItem = ({ content }: Props) => {
  const { setShowChatRoom } = useDrawer();

  const trailingActions = () => (
    <TrailingActions>
      <SwipeAction
        destructive={true}
        onClick={() => console.info("swipe action triggered")}
      >
        <StyledDelete>
          <StyledTrashCan />
          <StyledDeleteText>Ta bort</StyledDeleteText>
        </StyledDelete>
      </SwipeAction>
    </TrailingActions>
  );

  const renderMsgContent = (
    <StyledInnerWrapper>
      <StyledTitle>{content.title}</StyledTitle>
      <StyledLastMsg>
        <StyledName>{content.lastSender}: </StyledName>
        Tjena gubben, kan du sälja blomman svart?
      </StyledLastMsg>
    </StyledInnerWrapper>
  );

  const renderBadge = (
    <StyledBadge badgeContent={100}>
      <StyledAvatar>{content.username.charAt(0)}</StyledAvatar>
    </StyledBadge>
  );

  return (
    <StyledSwipe>
      <SwipeableListItem trailingActions={trailingActions()}>
        <StyledWrapper onClick={() => setShowChatRoom(true)}>
          {renderMsgContent}
          {renderBadge}
        </StyledWrapper>
      </SwipeableListItem>
    </StyledSwipe>
  );
};

export default DrawerItem;
