
import {
  StyledTitle,
  StyledInnerWrapper,
  StyledAuctionTitle,
  StyledGridContainer,
  StyledAuctionGrid,
  StyledColoredText,
} from "./StyledNotificationDrawerItem";
import * as moment from 'moment';
import { Grid } from "@mui/material";
import {
  ONE_DAY_IN_MILLIS,
  ONE_HOUR_IN_MILLIS,
  ONE_MINUTE_IN_MILLIS,
  ONE_SECOND_IN_MILLIS,
} from "../../../AuctionCard/auctionUtils";

interface Props {
  message: string;
  auctionTitle?: string;
  time?: Date;
  now: Date;
}
// order = [order of title, order of message]
const notificationTypes: Record<string, number[]> = {
  "ett högre bud": [2, 1],
  "grattis": [2, 1],
  "ett nytt bud": [1, 2],
  "avslutades": [1,2], 
}

const coloredWords: Record<string, string> = {
  "grattis": "var(--green)",
  "avslutades": "var(--red)"
}

const MsgContent = ({ message, auctionTitle, time, now }: Props) => {
  const getTime = () => {
    if (time) {
      const createdDate = new Date(time);
      const difference = now.getTime() - createdDate.getTime();
      const days = Math.floor(difference / ONE_DAY_IN_MILLIS);

      if (days > 30) {
        const formattedDate = moment(createdDate).format("DD/MM/YYYY");
        return `${formattedDate}`;
      }
      if (days > 0) {
        return `${days} d sen`;
      }

      const hours = Math.floor(difference / ONE_HOUR_IN_MILLIS);
      if (hours > 0) {
        return `${hours} h sen`;
      }

      const minutes = Math.floor(difference / ONE_MINUTE_IN_MILLIS);
      if (minutes > 0) {
        return `${minutes} m sen`;
      }

      const seconds = Math.floor(difference / ONE_SECOND_IN_MILLIS);
      return `${seconds} s sen`;
    }
    return "";
  };

  const getOrder = () => {
    let order: number[] = [1, 2];
    for (let key of Object.keys(notificationTypes)) {
      if (message.toLocaleLowerCase().includes(key)) {
        return notificationTypes[key];
      }
    }
    return order;
  };

  const getColoredWord = () => {
    for (let word of Object.keys(coloredWords)) {
      if (message.toLocaleLowerCase().includes(word)) {
        return message.trim().split(" ").shift();
      }
    }
    return "";
  };

  let order: number[] = getOrder();
  const coloredWord: string = getColoredWord()!;
  //                                         ^ the exclamation mark (non-null assertion operator)
  const removeFirstWord = (str: string) => {
    return " " + str.substr(str.trim().indexOf(" ") + 1);
  };

  return (
    <StyledInnerWrapper>
      <StyledGridContainer container>
        <StyledAuctionGrid item order={order[0]} xs={3} md={2} lg={1}>
          {auctionTitle && (
            <StyledAuctionTitle noWrap={true} display="inline">
              {auctionTitle}
            </StyledAuctionTitle>
          )}
        </StyledAuctionGrid>
        <Grid item order={order[1]}>
          <StyledTitle noWrap={false} display="inline">
            {coloredWord.length > 0 ? (
              <>
                <StyledColoredText
                  color={coloredWords[coloredWord.toLocaleLowerCase()]}
                >
                  {coloredWord}
                </StyledColoredText>
                {removeFirstWord(message)}
              </>
            ) : (
              <>{message + " "}</>
            )}
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
};

export default MsgContent;
