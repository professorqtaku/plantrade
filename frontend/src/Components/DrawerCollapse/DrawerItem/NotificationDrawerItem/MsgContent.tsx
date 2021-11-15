
import {
  StyledTitle,
  StyledInnerWrapper,
  StyledAuctionTitle,
  StyledGridContainer,
  StyledAuctionGrid,
  StyledColoredText,
} from "./StyledNotificationDrawerItem";
import { Grid } from "@mui/material";

interface Props {
  message: string;
  auctionTitle?: string;
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

const MsgContent = ({ message, auctionTitle }: Props) => {
  const getTime = () => {
    return "3 sek sen";
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
        return message.split(" ").shift();
      }
    }
    return "";
  };

  let order: number[] = getOrder();
  const coloredWord: string = getColoredWord()!;
  //                                         ^ the exclamation mark (non-null assertion operator)
  const removeFirstWord = (str: string) => {
    return " " + str.substr(str.indexOf(" ") + 1);
  };

  return (
    <StyledInnerWrapper>
      <StyledGridContainer container>
        <StyledAuctionGrid item order={order[0]} xs={4} sm={3} md={2} lg={1}>
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
              <>{message}</>
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
