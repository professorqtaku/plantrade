import {
  StyledWrapper,
  StyledTitle,
  StyledLastMsg,
  StyledName,
  StyledAvatar,
  StyledInnerWrapper,
} from "./StyledDrawerItem";

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
      <StyledAvatar>{content.username.charAt(0)}</StyledAvatar>
    </StyledWrapper>
  );
};

export default DrawerItem;
