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
import { Chat } from "../../../Interfaces/Interfaces";

interface Props {
  chat: Chat;
}

const DrawerItem = ({ chat }: Props) => {
  const { setShowChatRoom, setChatId } = useDrawer();

  const handleShowMessageView = () => {
    setChatId(chat.id)
    setShowChatRoom(true);
  }

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
      <StyledTitle>{chat.auction.title}</StyledTitle>
      {chat.messages && (
        <StyledLastMsg>
          <StyledName>
            {chat.messages[chat.messages.length - 1].writer.username}:{" "}
          </StyledName>
          {chat.messages[chat.messages.length - 1].message}
        </StyledLastMsg>
      )}
    </StyledInnerWrapper>
  );

  const renderBadge = (
    <StyledBadge badgeContent={100}>
      <StyledAvatar>{chat.receiver.username.charAt(0)}</StyledAvatar>
    </StyledBadge>
  );

  return (
    <StyledSwipe>
      <SwipeableListItem trailingActions={trailingActions()}>
        <StyledWrapper onClick={handleShowMessageView}>
          {renderMsgContent}
          {renderBadge}
        </StyledWrapper>
      </SwipeableListItem>
    </StyledSwipe>
  );
};

export default DrawerItem;
