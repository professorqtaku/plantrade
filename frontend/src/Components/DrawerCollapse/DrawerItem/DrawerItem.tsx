import {
  StyledWrapper,
  StyledTitle,
  StyledLastMsg,
  StyledName,
  StyledAvatar,
  StyledInnerWrapper,
} from "./StyledDrawerItem";
import Badge from "@mui/material/Badge";

interface Props {
  content: {
    title: string;
    username: string;
    lastSender: string;
  };
}

const DrawerItem = ({ content }: Props) => {
  return (
    <StyledWrapper>
      <StyledInnerWrapper>
        <StyledTitle>{content.title}</StyledTitle>
        <StyledLastMsg>
          <StyledName>{content.lastSender}: </StyledName>
          Tjena gubben, kan du sälja blomman svart?
        </StyledLastMsg>
      </StyledInnerWrapper>
      <Badge color="secondary" badgeContent={3}>
        <StyledAvatar>{content.username.charAt(0)}</StyledAvatar>
      </Badge>
    </StyledWrapper>
  );
};

export default DrawerItem;
