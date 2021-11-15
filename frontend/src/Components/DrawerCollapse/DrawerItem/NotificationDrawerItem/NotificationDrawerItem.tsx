import {
  StyledWrapper,
  StyledTitle,
  StyledInnerWrapper,
  StyledSwipe,
  StyledDelete,
  StyledTrashCan,
  StyledDeleteText,
  StyledAuctionTitle,
  StyledGridContainer,
  StyledAuctionGrid,
} from "./StyledNotificationDrawerItem";
import {
  SwipeableListItem,
  SwipeAction,
  TrailingActions,
} from "react-swipeable-list";
import "react-swipeable-list/dist/styles.css";
import { Notification } from "../../../../Interfaces/Interfaces";
import { Grid } from "@mui/material";

interface Props {
  notice: Notification;
}

const notificationTypes: Record<string, number[]> = {
  "ett högre bud": [1, 2],
  "grattis": []
}

const NotificationDrawerItem = ({ notice }: Props) => {
  const maxTitleLength = 100;
  let order: number[] = [1, 2];
  if (notice.message.includes("ett högre bud")) {
    order = [2, 1];
  }

  const handleOnClick = () => {};

  const getTime = () => {
    return "3 sek sen";
  };

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

  const renderMsgContent = (
    <StyledInnerWrapper>
      <StyledGridContainer container>
        <StyledAuctionGrid item order={order[0]} xs={4} sm={3} md={2} lg={1}>
          <StyledAuctionTitle noWrap={true} display="inline">
            {notice.auction.title &&
              truncateString(notice.auction.title, maxTitleLength)}
          </StyledAuctionTitle>
        </StyledAuctionGrid>
        <Grid item order={order[1]}>
          <StyledTitle noWrap={false} display="inline">
            {notice.message}
          </StyledTitle>
        </Grid>
      </StyledGridContainer>
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
        <StyledWrapper onClick={handleOnClick}>
          {renderMsgContent}
        </StyledWrapper>
      </SwipeableListItem>
    </StyledSwipe>
  );
};

export default NotificationDrawerItem;
