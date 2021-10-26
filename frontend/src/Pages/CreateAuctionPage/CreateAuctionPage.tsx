import {
  StyledWrapper,
  StyledForm,
  StyledInput,
  StyledTitle,
  StyledButton,
} from "./StyledCreateAuctionPage";
import AuctionDatePicker from "../../Components/AuctionDatePicker/AuctionDatePicker";

const CreateAuctionPage = () => {

  const handleAddAuction = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();    
  }

  return (
    <StyledWrapper>
      <StyledTitle>Skapa auktion</StyledTitle>
      <StyledForm onSubmit={handleAddAuction}>
        <StyledInput placeholder="Titel" />
        <StyledInput placeholder="Beskrivning" />
        <StyledInput placeholder="Start pris" />
        <AuctionDatePicker />
        <StyledButton>Skapa auktion</StyledButton>
      </StyledForm>
    </StyledWrapper>
  );
};

export default CreateAuctionPage;
