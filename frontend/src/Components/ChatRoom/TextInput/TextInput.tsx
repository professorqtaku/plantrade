import { useState } from "react";
import { useChat } from "../../../Contexts/ChatContext";
import { useMessage } from "../../../Contexts/MessageContext";
import { useSocket } from "../../../Contexts/SocketContext";
import {
  StyledForm,
  StyledInput,
  StyledSendIcon,
  StyledButton,
} from "./StyledTextInput";

const TextInput = () => {
  const [message, setMessage] = useState("");
  const { createMsg } = useMessage();
  const { chatId } = useChat();
  


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newMessage = {
      message: message,
    };
    await createMsg(newMessage, chatId);
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
