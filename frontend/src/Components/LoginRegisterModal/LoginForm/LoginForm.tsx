import { BaseSyntheticEvent, FC, useState } from "react";
import {
  StyledLoginContainer,
  Styledh3,
  StyledForm,
  StyledDiv,
  StyledLoginBtn,
  StyledText,
  StyledPorfileIcon,
  StyledPwIcon,
  StyledDivider,
  StyledSpan,
} from "./StyledLoginForm";
import InputField from "../../InputField/InputField";
import { useAuth } from "../../../Contexts/AuthContext";
import { useModal } from "../../../Contexts/ModalContext";
import { useSnackBar } from "../../../Contexts/SnackBarContext";
import { useMessage } from "../../../Contexts/MessageContext";
import { useChat } from "../../../Contexts/ChatContext";
import { useNav } from "../../../Contexts/NavigationContext";

interface Props {
  toggleRegister: Function;
}

const LoginForm = ({ toggleRegister }: Props) => {
  const { login, wrongPassword, setHasReadMsg } = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { toggleLoginModal } = useModal();
  const { addSnackbar } = useSnackBar();
  const { getAllChatMsg } = useMessage();
  const { getChatsByCurrentUser, getUnreadMsg } = useChat();

  const handleLogin = async (e: BaseSyntheticEvent) => {
    e.preventDefault();

    const userObj = {
      username: username,
      password: password,
    };

    const isSucceed = await login(userObj);
    if (isSucceed) {
      const unreadMsg = await getUnreadMsg();
      console.log(unreadMsg);
      if (unreadMsg === 1) {
        setHasReadMsg(false);
      }
      toggleLoginModal();
      addSnackbar("Inloggning lyckades!");
    } else {
      addSnackbar({ message: "Inloggning misslyckad!", status: "error" });
    }
  };

  return (
    <StyledLoginContainer>
      <Styledh3>LOGGA IN</Styledh3>
      <StyledForm onSubmit={(e: BaseSyntheticEvent) => handleLogin(e)}>
        <StyledDiv>
          <StyledPorfileIcon />
          <InputField
            label="Användarnamn"
            updateState={(e) => setUsername(e)}
            value={username}
            required
          />
          <StyledPwIcon />
          <InputField
            label="Lösenord"
            margintop={10}
            type="password"
            updateState={(e) => setPassword(e)}
            value={password}
            required
          />
        </StyledDiv>
        {wrongPassword && <p>Wrong username/password</p>}
        <StyledLoginBtn>Logga in</StyledLoginBtn>
        <StyledDivider />
        <StyledText>
          Har du inte ett konto?{" "}
          <StyledSpan onClick={() => toggleRegister()}>
            Skapa ett här
          </StyledSpan>
        </StyledText>
      </StyledForm>
    </StyledLoginContainer>
  );
};

export default LoginForm;
