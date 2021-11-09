import Message from './Message/Message';
import TextInput from './TextInput/TextInput';
import { StyledWrapper } from './StyledChatRoom'

const ChatRoom = () => {
  return (
    <StyledWrapper>
      <Message />
      <TextInput/>
    </StyledWrapper>
  )
}

export default ChatRoom;