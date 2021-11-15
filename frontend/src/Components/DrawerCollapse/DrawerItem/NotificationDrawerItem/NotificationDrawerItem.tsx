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
import { useHistory } from "react-router";
import { useDrawer } from "../../../../Contexts/DrawerContext";

interface Props {
  notification: Notification;
}

const NotificationDrawerItem = ({ notification }: Props) => {
  const history = useHistory();
  const { toggleDrawer } = useDrawer()
  
  const handleOnClick = () => {
    if (notification.auction && notification.auction.id) {
      history.push("/auctions/" + notification.auction.id)
      toggleDrawer();
    }
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
