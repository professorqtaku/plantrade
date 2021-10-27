import {
  StyledWrapper,
  StyledForm,
  StyledTitle,
  StyledButton,
} from "./StyledCreateAuctionPage";
import AuctionDatePicker from "../../Components/AuctionDatePicker/AuctionDatePicker";
import SelectBar from "../../Components/SelectBar/SelectBar";
import InputField from "../../Components/InputField/InputField";
import { useState } from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";

const Input = styled("input")({
  display: "none",
});

const CreateAuctionPage = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [price, setPrice] = useState();
  const [endDate, setEndDate] = useState<number | null>(null);
  const [categoriesToUse, setCategoriesToUse] = useState<String[] | null>(null);

  const handleAddAuction = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const auction = {
      title: title,
      description: desc,
      startPrice: price,
      endDate: endDate,
      categories: categoriesToUse
    };
  };

  const renderUploadFiles = () => (
    <label htmlFor="contained-button-file">
      <Input accept="image/*" id="contained-button-file" multiple type="file" />
      <Button variant="contained" component="span" style={{width: '100%'}}>
        Ladda upp bilder
      </Button>
    </label>
  );

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
        {renderUploadFiles()}
        <StyledButton>Skapa auktion</StyledButton>
      </StyledForm>
    </StyledWrapper>
  );
};

export default CreateAuctionPage;
