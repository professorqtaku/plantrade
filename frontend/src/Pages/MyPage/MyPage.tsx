import {
  StyledWrapper,
  StyledAvatar,
  StyledEdit,
  StyledAvatarWrapper,
  StyledEditWrapper,
  StyledText,
  StyledNavigationWrapper,
  StyledCheck,
  StyledInput,
  StyledCheckWrapper,
  StyledNavigationBox,
} from "./StyledMyPage";
import Button from "../../Components/Button/ButtonComp";
import { useState } from "react";
import { useHistory } from "react-router";

const IMAGE1 =
  "https://i.pinimg.com/736x/0f/0f/99/0f0f99b410e810c32aa5fdb78b2710e0.jpg";
const IMAGE2 =
  "https://i.pinimg.com/564x/b8/c7/fa/b8c7fa3df0b4566dd831759c73330cda.jpg";
const IMAGE3 =
  "https://i.pinimg.com/564x/a7/9c/fc/a79cfc5790afdc60f2e3275a47ee0bbe.jpg";
const IMAGE4 =
  "https://i.pinimg.com/564x/28/74/5e/28745eb2b7e41daea56a003fba0c8d61.jpg";

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
      <StyledNavigationBox
        justify="end"
        background={IMAGE1}
      ></StyledNavigationBox>
      <StyledNavigationBox
        justify="start"
        background={IMAGE2}
      ></StyledNavigationBox>
      <StyledNavigationBox
        justify="end"
        background={IMAGE3}
      ></StyledNavigationBox>
      <StyledNavigationBox
        justify="start"
        background={IMAGE4}
      ></StyledNavigationBox>
    </StyledNavigationWrapper>
  );

  return (
    <>
      <StyledAvatarWrapper>
        <StyledText color="white" size="2rem" margin="1rem">
          Hej Oscar
        </StyledText>
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
