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
  const [onEditEmail, setOnEditEmail] = useState(false);
  const [onEditPassword, setOnEditPassword] = useState(false);
  const [email, setEmail] = useState("Email");
  const [password, setPassword] = useState("Lösenord");
  const history = useHistory();

  const renderEditFields = (
    <StyledEditWrapper>
      {!onEditEmail ? (
        <StyledText>
          <StyledEdit onClick={() => setOnEditEmail(true)} /> {email}
        </StyledText>
      ) : (
        <StyledCheckWrapper>
          <StyledCheck onClick={() => setOnEditEmail(false)} />
          <StyledInput
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </StyledCheckWrapper>
      )}

      {!onEditPassword ? (
        <StyledText>
          <StyledEdit onClick={() => setOnEditPassword(true)} /> {password}
        </StyledText>
      ) : (
        <StyledCheckWrapper>
          <StyledCheck onClick={() => setOnEditPassword(false)} />
          <StyledInput
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </StyledCheckWrapper>
      )}
    </StyledEditWrapper>
  );

  const renderNavigations = (
    <StyledNavigationWrapper>
      <Button
        callback={() => history.push("/createAuction")}
        label="Skapa en auktion"
      />
      <Button label="Mina vunna auktioner" />
      <Button label="Statistik" />
      <Button label="Mina auktioner" />
    </StyledNavigationWrapper>
  );

  return (
    <>
      <StyledAvatarWrapper>
        <StyledText color="white" size="2rem" margin="1rem">Hej Oscar</StyledText>
        <StyledAvatar>N</StyledAvatar>
      </StyledAvatarWrapper>
      <StyledWrapper>
        {renderEditFields}
        {renderNavigations}
        <Button label="logga ut" />
      </StyledWrapper>
    </>
  );
};

export default MyPage;
