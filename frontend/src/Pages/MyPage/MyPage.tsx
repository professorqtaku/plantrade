import { FormEvent } from "react";
import { useRef, useContext, useState } from "react";
import { useHistory } from "react-router";
import BasicModal from "../../Components/Modal/BaiscModal";
import { AuthContext } from "../../Contexts/AuthContextProvider";
import RegisterForm from "../../Components/RegisterPage/RegisterForm";
import InputField from "../../Components/InputField/InputField";
import {
  StyledWrapper,
  Styledh3,
  StyledForm,
  StyledDiv,
  StyledLoginBtn,
  StyledPorfileIcon,
  StyledPwIcon,
  StyledSpan,
  StyledDivider,
  StyledLoginContainer,
  StyledRegisterContainer,
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
  const [showRegisterForm, setShowRegisterForm] = useState<boolean>(false);
  const { login, wrongPassword, logout, whoAmI } = useContext(AuthContext)
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const passwordRef = useRef<any>();

// Ändra useref till useState till inputfiel (props, update + label + value)
  
  const handleLogin = (e: FormEvent) => {
    e.preventDefault();

    const userObj = {
      username: username,
      password: password
    }
    login(userObj)
  }

  const handleLogout = () => {
    logout();
    history.push('/')
  }

  return (
    <StyledWrapper>
      <h3>MyPage</h3>
      {whoAmI && whoAmI.username ? <p>Välkommen, {whoAmI.username}</p> : ''}
      {whoAmI ? <button onClick={handleLogout}>Logga ut</button> : 'Not logged in'}
      <BasicModal>
        {!showRegisterForm ? <StyledLoginContainer>

          <Styledh3>LOGGA IN</Styledh3>
          <StyledForm onSubmit={e => handleLogin(e)}>
            <StyledDiv>
              <StyledPorfileIcon /><InputField label="username" updateState={e => setUsername(e)} value={username} required/>
              <StyledPwIcon /><InputField label="password" marginTop={10} type="password" updateState={e => setPassword(e)} value={password} required/>
            </StyledDiv>
            {wrongPassword && <p>Wrong username/password</p>}
            <StyledLoginBtn>Logga in</StyledLoginBtn>
            <StyledDivider />
            <StyledText>Har du inte ett konto? <StyledSpan onClick={() => setShowRegisterForm(true)}>Skapa ett</StyledSpan></StyledText>
          </StyledForm>

        </StyledLoginContainer> :
          <StyledRegisterContainer>
            <RegisterForm />
          </StyledRegisterContainer>}

  

      </BasicModal>

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
