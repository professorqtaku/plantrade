import { useHistory } from "react-router"
import { useAuth } from "../../Contexts/AuthContext";
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

  const history = useHistory();
  const { logout, whoAmI } = useAuth()

// Ändra useref till useState till inputfiel (props, update + label + value)

  const handleLogout = () => {
    logout();
    history.push('/')
  }

  return (
    <StyledWrapper>
      <h3>MyPage</h3>
      {whoAmI && whoAmI.username ? <p>Välkommen, {whoAmI.username}</p> : ''}
      {whoAmI ? <button onClick={handleLogout}>Logga ut</button> : 'Not logged in'}

      <StyledAvatarWrapper>
        <StyledAvatar>N</StyledAvatar>
        <Button label="logga ut"/>
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
