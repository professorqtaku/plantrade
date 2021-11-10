import {
  StyledWrapper,
  StyledTitle,
  StyledLastMsg,
  StyledName,
  StyledAvatar,
  StyledInnerWrapper,
  StyledBadge,
} from "./StyledDrawerItem";

interface Props {
  content: {
    title: string;
    username: string;
    lastSender: string;
  };
}

const DrawerItem = ({ content }: Props) => {
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
    <StyledWrapper>
      {renderMsgContent}
      {renderBadge}
    </StyledWrapper>
  );
};

export default DrawerItem;
