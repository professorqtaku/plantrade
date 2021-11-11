import { useState } from "react";
import { useDrawer } from "../../../Contexts/DrawerContext";
import { useMessage } from "../../../Contexts/MessageContext";
import {
  StyledForm,
  StyledInput,
  StyledSendIcon,
  StyledButton,
} from "./StyledTextInput";

const TextInput = () => {
  const [message, setMessage] = useState("");
  const { createMsg } = useMessage();
   const { chatId } = useDrawer();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newMessage = {
      message: message,
    };
    createMsg(newMessage, chatId);
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
