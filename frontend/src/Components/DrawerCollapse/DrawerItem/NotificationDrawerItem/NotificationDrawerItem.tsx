import {
  StyledWrapper,
  StyledSwipe,
  StyledDelete,
  StyledTrashCan,
  StyledDeleteText,
} from "./StyledNotificationDrawerItem";
import {
  SwipeableListItem,
  SwipeAction,
  TrailingActions,
} from "react-swipeable-list";
import "react-swipeable-list/dist/styles.css";
import { Notification } from "../../../../Interfaces/Interfaces";
import MsgContent from "./MsgContent";

interface Props {
  notification: Notification;
}

const NotificationDrawerItem = ({ notification }: Props) => {
  
  const handleOnClick = () => {};

  const truncateString = (str: string, num: number) => {
    if (str.length <= num) {
      return str;
    }
    return str.slice(0, num) + "...";
  };

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

  return (
    <StyledSwipe>
      <SwipeableListItem trailingActions={trailingActions()}>
        <StyledWrapper onClick={handleOnClick}>
          <MsgContent auctionTitle={notification.auction.title} message={notification.message} />
        </StyledWrapper>
      </SwipeableListItem>
    </StyledSwipe>
  );
};

export default NotificationDrawerItem;
