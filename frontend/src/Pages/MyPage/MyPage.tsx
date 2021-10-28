import {
  StyledWrapper,
  StyledAvatar,
  StyledEdit,
  StyledAvatarWrapper,
  StyledEditWrapper,
  StyledBoldText,
  StyledText,
  StyledNavigationWrapper,
  StyledCheck,
  StyledInput,
  StyledCheckWrapper,
} from "./StyledMyPage";
import Button from "../../Components/Button/ButtonComp";
import { useState } from "react";
import { useHistory } from "react-router";

const MyPage = () => {
  const [editEmail, setEditEmail] = useState(false);
  const [editPassword, setEditPassword] = useState(false);
  const [email, setEmail] = useState("Email");
  const [password, setPassword] = useState("Lösenord");
  const history = useHistory();

  const renderEditFields = () => (
    <StyledEditWrapper>
      {!editEmail && (
        <StyledText>
          <StyledEdit onClick={() => setEditEmail(true)} /> {email}
        </StyledText>
      )}

      {editEmail && (
        <StyledCheckWrapper>
          <StyledCheck onClick={() => setEditEmail(false)} />
          <StyledInput
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </StyledCheckWrapper>
      )}

      {!editPassword && (
        <StyledText>
          <StyledEdit onClick={() => setEditPassword(true)} /> {password}
        </StyledText>
      )}

      {editPassword && (
        <StyledCheckWrapper>
          <StyledCheck onClick={() => setEditPassword(false)} />
          <StyledInput
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </StyledCheckWrapper>
      )}
    </StyledEditWrapper>
  );

  const renderNavigations = () => (
    <StyledNavigationWrapper>
      <Button callback={() => history.push('/createAuction')} label="Skapa en auktion" />
      <Button label="Mina vunna auktioner" />
      <Button label="Statistik" />
      <Button label="Mina auktioner" />
    </StyledNavigationWrapper>
  );

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
