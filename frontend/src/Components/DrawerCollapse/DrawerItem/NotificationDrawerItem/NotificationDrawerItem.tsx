import {
  StyledWrapper,
  StyledTitle,
  StyledInnerWrapper,
  StyledSwipe,
  StyledDelete,
  StyledTrashCan,
  StyledDeleteText,
  StyledAuctionTitle,
} from "./StyledNotificationDrawerItem";
import {
  SwipeableListItem,
  SwipeAction,
  TrailingActions,
} from "react-swipeable-list";
import "react-swipeable-list/dist/styles.css";
import { Notification } from "../../../../Interfaces/Interfaces";

interface Props {
  notice: Notification;
}

const NotificationDrawerItem = ({ notice }: Props) => {
  const handleToAuction = () => {};

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
      <span>
        <StyledAuctionTitle noWrap={true} display="inline">
          {notice.auction.title}
        </StyledAuctionTitle>{" "}
        <StyledTitle noWrap={false} display="inline">
          {notice.message}
        </StyledTitle>
      </span>
    </StyledInnerWrapper>
  );

  return (
    <StyledSwipe>
      <SwipeableListItem trailingActions={trailingActions()}>
        <StyledWrapper onClick={handleToAuction}>
          {renderMsgContent}
        </StyledWrapper>
      </SwipeableListItem>
    </StyledSwipe>
  );
};

export default NotificationDrawerItem;
