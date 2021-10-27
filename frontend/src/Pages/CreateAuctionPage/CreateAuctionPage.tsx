import {
  StyledWrapper,
  StyledForm,
  StyledInput,
  StyledTitle,
  StyledButton,
} from "./StyledCreateAuctionPage";
import AuctionDatePicker from "../../Components/AuctionDatePicker/AuctionDatePicker";
import SelectBar from "../../Components/SelectBar/SelectBar";
import InputField from "../../Components/InputField/InputField";
import { useState } from "react";

const CreateAuctionPage = () => {
  const [endDate, setEndDate] = useState<number | null>(null);
  const [categoriesToUse, setCategoriesToUse] = useState<String[] | null>(null);

  const handleAddAuction = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <StyledWrapper>
      <StyledTitle>Skapa auktion</StyledTitle>
      <StyledForm onSubmit={handleAddAuction}>
        <InputField label="Titel" />
        <InputField label="Beskrivning" />
        <InputField label="Start pris" type="number" />
        <AuctionDatePicker endDate={setEndDate} />
        <SelectBar setCategoriesToUse={setCategoriesToUse} />
        <StyledButton>Skapa auktion</StyledButton>
      </StyledForm>
    </StyledWrapper>
  );
};

export default CreateAuctionPage;
