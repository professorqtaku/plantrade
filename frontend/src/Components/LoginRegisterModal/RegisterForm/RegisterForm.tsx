import { useState } from "react";
import { useAuth } from "../../../Contexts/AuthContext";
import InputField from "../../InputField/InputField";
import { useSnackBar } from "../../../Contexts/SnackBarContext";
import { User } from "../../../Interfaces/Interfaces";
import {
  StyledWrapper,
  StyledForm,
  StyledBtn,
  StyledPorfileIcon,
  StyledPwIcon,
  StyledEmailIcon,
  StyledInputDiv,
  StyledTitle,
  StyledWarningText,
} from "./StyledRegisterForm";
import {
  StyledDivider,
  StyledSpan,
  StyledText,
} from "../LoginForm/StyledLoginForm";

interface Props {
  toggleRegister: Function;
}

const RegisterForm = ({ toggleRegister }: Props) => {
  const { register, userExists } = useAuth();
  const { addSnackbar } = useSnackBar();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();

    const userObject = {
      username: username,
      email: email,
      password: password,
    };
    let isRegSucceed = await register(userObject);
    if (isRegSucceed) {
      toggleRegister();
      addSnackbar("Regristrering lyckades!");
    } else {
      addSnackbar({ message: "Inloggning misslyckad!", status: "error" });
    }
  };

  return (
    <StyledWrapper>
      <StyledTitle>Skapa Konto</StyledTitle>
      <StyledForm onSubmit={(e) => handleRegister(e)}>
        <StyledInputDiv>
          <StyledPorfileIcon />
          <InputField
            value={username}
            label="Användarnamn"
            updateState={(e) => setUsername(e)}
            required
          />
          <StyledEmailIcon />
          <InputField
            value={email}
            type="email"
            label="Email"
            updateState={(e) => setEmail(e)}
            required
          />
          <StyledPwIcon />
          <InputField
            value={password}
            type="password"
            label="Lösenord"
            updateState={(e) => setPassword(e)}
            required
          />
        </StyledInputDiv>
        {userExists && (
          <StyledWarningText>The user already exists.</StyledWarningText>
        )}
        <StyledBtn>Skapa Konto</StyledBtn>
        <StyledDivider />
        <StyledText>
          Har du redan ett konto?{" "}
          <StyledSpan onClick={() => toggleRegister()}>Logga in här</StyledSpan>
        </StyledText>
      </StyledForm>
    </StyledWrapper>
  );
};

export default RegisterForm;
