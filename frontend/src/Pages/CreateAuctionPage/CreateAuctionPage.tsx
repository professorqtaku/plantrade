import {
  StyledWrapper,
  StyledForm,
  StyledInput,
  StyledTitle,
  StyledButton,
} from "./StyledCreateAuctionPage";
import AuctionDatePicker from "../../Components/AuctionDatePicker/AuctionDatePicker";
import SelectBar from "../../Components/SelectBar/SelectBar";
import { useState } from "react";

const CreateAuctionPage = () => {
  const [endDate, setEndDate] = useState(0);
  const [categoriesToUse, setCategoriesToUse] = useState<String[] | null>(null);

  const handleAddAuction = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <StyledWrapper>
      <StyledTitle>Skapa auktion</StyledTitle>
      <StyledForm onSubmit={handleAddAuction}>
        <StyledInput placeholder="Titel" />
        <StyledInput placeholder="Beskrivning" />
        <StyledInput placeholder="Start pris" />
        <AuctionDatePicker endDate={setEndDate} />
        <SelectBar
          setCategoriesToUse={setCategoriesToUse}
          categoriesToUse={categoriesToUse}
        />
        <StyledButton>Skapa auktion</StyledButton>
      </StyledForm>
    </StyledWrapper>
  );
};

export default CreateAuctionPage;
