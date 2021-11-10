import {
  StyledWrapper,
  StyledTitle,
  StyledLastMsg,
  StyledName,
  StyledAvatar,
  StyledInnerWrapper,
  StyledBadge,
  StyledSwipe,
  StyledSwipeAction,
  StyledSwipeList,
  StyledDelete,
} from "./StyledDrawerItem";
import {
  SwipeableList,
  SwipeableListItem,
  SwipeAction,
  TrailingActions,
} from "react-swipeable-list";
import "react-swipeable-list/dist/styles.css";

interface Props {
  content: {
    title: string;
    username: string;
    lastSender: string;
  };
}

const DrawerItem = ({ content }: Props) => {
  const trailingActions = () => (
    <TrailingActions>
      <StyledSwipeAction
        destructive={true}
        onClick={() => console.info("swipe action triggered")}
      >
        <StyledDelete>Ta bort</StyledDelete>
      </StyledSwipeAction>
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
      <StyledSwipeList trailingActions={trailingActions()}>
        <StyledWrapper>
          {renderMsgContent}
          {renderBadge}
        </StyledWrapper>
      </StyledSwipeList>
    </StyledSwipe>
  );
};

export default DrawerItem;
