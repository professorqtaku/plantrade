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
  const maxTitleLength = 8;

  const handleToAuction = () => {};

  const getTime = () => {
    return "3 sek sen";
  };

  const truncateString = (str: string, num: number) => {
    if (str.length <= num) {
      return str;
    }
    return str.slice(0, num) + "...";
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
      <span>
          <StyledAuctionTitle noWrap={true} display="inline">
            {truncateString(notice.auction.title, maxTitleLength)}
          </StyledAuctionTitle>{" "}
        <StyledTitle noWrap={false} display="inline">
          {notice.message}
        </StyledTitle>
      </span>
      <StyledTitle
        sx={{ fontStyle: "italic" }}
        noWrap={true}
        display="inline"
        align="right"
      >
        {getTime()}
      </StyledTitle>
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
