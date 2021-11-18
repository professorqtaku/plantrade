import { useAuth } from "../../Contexts/AuthContext";
import { useSnackBar } from "../../Contexts/SnackBarContext";
import {
  StyledWrapper,
  StyledAvatar,
  StyledEdit,
  StyledEditWrapper,
  StyledText,
  StyledNavigationWrapper,
  StyledCheck,
  StyledInput,
  StyledCheckWrapper,
  StyledNavigationBox,
  StyledButton,
} from "./StyledMyPage";
import Header from "../../Components/Header/Header";
import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { useNav } from "../../Contexts/NavigationContext";

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
  const { setProfile, handleSelect } = useNav();
  const history = useHistory();
  const { logout, whoAmI } = useAuth();
  const { addSnackbar } = useSnackBar();

  useEffect(() => {
    handleSelect(setProfile);
  }, []);

  // to be added during sprint three?
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
        onClick={() => history.push("/createAuction")}
        justify="end"
        background={IMAGE1}
        opacity=""
      >
        <StyledText color="white">Skapa auktion</StyledText>
      </StyledNavigationBox>

      <StyledNavigationBox
        onClick={() => history.push('/my-page/my-won-auctions')}
        justify="start"
        background={IMAGE2}
        opacity="">
        <StyledText color="white">Vunna auktioner</StyledText>
      </StyledNavigationBox>

      <StyledNavigationBox
        onClick={() => history.push("/my-page/my-auctions")}
        justify="end"
        background={IMAGE4}
        opacity=""
      >
        <StyledText color="white">Mina auktioner</StyledText>
      </StyledNavigationBox>

      {/* to come during sprint three */}
      <StyledNavigationBox justify="end" background={IMAGE3} opacity="0">
        <StyledText color="white">Kommer snart</StyledText>
      </StyledNavigationBox>
    </StyledNavigationWrapper>
  );

  const handleLogout = (e: any) => {
    e.preventDefault();
    logout();
    history.push("/");
    addSnackbar("Utloggning lyckades!");
  };

  return (
    <>
      {whoAmI && <Header grid={true} gridColumns="1fr 1fr">
        <StyledText color="white" size="2rem" margin="1rem">
          Hej {whoAmI.username}
        </StyledText>
        <StyledAvatar>{whoAmI.username.charAt(0).toUpperCase()}</StyledAvatar>
      </Header>}
      <StyledWrapper>
        {/* {renderEditFields} */}
        {renderNavigations}
        <StyledButton onClick={handleLogout}>Logga ut</StyledButton>
      </StyledWrapper>
    </>
  );
};

export default MyPage;
