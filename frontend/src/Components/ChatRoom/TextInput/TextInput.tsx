import { StyledWrapper, StyledInput, StyledSendIcon } from "./StyledTextInput";

const TextInput = () => {
  return (
    <StyledWrapper>
      <StyledInput placeholder="Skriv ditt meddelande här" />
      <StyledSendIcon/>
    </StyledWrapper>
  )
}

export default TextInput;