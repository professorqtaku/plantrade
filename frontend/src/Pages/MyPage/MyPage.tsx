import {
  StyledWrapper,
  StyledAvatar,
  StyledEdit,
  StyledAvatarWrapper,
  StyledEditWrapper,
  StyledBoldText,
  StyledText,
  StyledNavigationWrapper,
} from "./StyledMyPage";
import Button from "../../Components/Button/ButtonComp";

const renderEditFields = () => (
  <StyledEditWrapper>
    <StyledText>
      <StyledEdit /> Email
    </StyledText>
    <StyledText>
      <StyledEdit /> Password
    </StyledText>
  </StyledEditWrapper>
);

const renderNavigations = () => (
  <StyledNavigationWrapper>
    <Button label="Skapa en auktion" />
    <Button label="Mina vunna auktioner" />
    <Button label="Statistik" />
    <Button label="Mina auktioner" />
  </StyledNavigationWrapper>
);

const MyPage = () => {
  return (
    <StyledWrapper>
      <StyledAvatarWrapper>
        <StyledAvatar>N</StyledAvatar>
        <Button label="logga ut" />
      </StyledAvatarWrapper>
      <StyledText>
        <StyledBoldText>Username: </StyledBoldText>
        Oscar
      </StyledText>
      {renderEditFields()}
      {renderNavigations()}
    </StyledWrapper>
  );
};

export default MyPage;
