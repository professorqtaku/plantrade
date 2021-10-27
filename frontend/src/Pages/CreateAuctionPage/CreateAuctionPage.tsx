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
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [price, setPrice] = useState(0);
  const [endDate, setEndDate] = useState<number | null>(null);
  const [categoriesToUse, setCategoriesToUse] = useState<String[] | null>(null);

  const handleAddAuction = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <StyledWrapper>
      <StyledTitle>Skapa auktion</StyledTitle>
      <StyledForm onSubmit={handleAddAuction}>
        <InputField label="Titel" value={title} updateState={setTitle} />
        <InputField label="Beskrivning" value={desc} updateState={setDesc} />
        <InputField
          label="Start pris"
          type="number"
          value={price}
          updateState={setPrice}
        />
        <AuctionDatePicker endDate={setEndDate} />
        <SelectBar setCategoriesToUse={setCategoriesToUse} />
        <StyledButton>Skapa auktion</StyledButton>
      </StyledForm>
    </StyledWrapper>
  );
};

export default CreateAuctionPage;
