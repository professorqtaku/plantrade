import { StyledWrapper, StyledMessage } from "./StyledMessage";
import {useMessage} from '../../../Contexts/MessageContext'

const Message = () => {
  const { messages } = useMessage();
  return (
    <StyledWrapper>
      {messages.map((message: any) => (
        <StyledMessage id={message.id}>{message.text}</StyledMessage>
      ))}
    </StyledWrapper>
  );
}

export default Message;