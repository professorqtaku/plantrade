import { useState } from "react";
import {
  StyledForm,
  StyledInput,
  StyledSendIcon,
  StyledButton,
} from "./StyledTextInput";

const TextInput = () => {
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newMessage = {
      message: message,
    };
    console.log(newMessage);

    // Logic to send obj to backend
    setMessage("");
  };

  return (
    <div>
      <StyledForm onSubmit={(e) => handleSubmit(e)}>
        <StyledInput
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Skriv ditt meddelande här"
        />
        <StyledButton>
          <StyledSendIcon />
        </StyledButton>
      </StyledForm>
    </div>
  );
};

export default TextInput;
