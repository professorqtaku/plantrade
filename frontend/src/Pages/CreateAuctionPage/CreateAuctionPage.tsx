import {
  StyledWrapper,
  StyledForm,
  StyledTitle,
} from "./StyledCreateAuctionPage";
import AuctionDatePicker from "../../Components/AuctionDatePicker/AuctionDatePicker";
import SelectBar from "../../Components/SelectBar/SelectBar";
import InputField from "../../Components/InputField/InputField";
import { useState } from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import ButtonComp from "../../Components/Button/ButtonComp"

const Input = styled("input")({
  display: "none",
});

const CreateAuctionPage = () => {
  const [title, setTitle] = useState<string | undefined>();
  const [desc, setDesc] = useState<string | undefined>();
  const [price, setPrice] = useState<number | undefined>();
  const [images, setImages] = useState<String[] | undefined>();
  const [endDate, setEndDate] = useState<number | undefined>();
  const [categoriesToUse, setCategoriesToUse] = useState<
    String[] | undefined
  >();

  const handleAddAuction = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const auction = {
      title: title,
      description: desc,
      startPrice: price,
      endDate: endDate,
      categories: categoriesToUse,
    };
    setTitle(undefined);
    setDesc(undefined);
    setPrice(undefined);
    setImages(undefined);
    setEndDate(undefined);
    setCategoriesToUse(undefined);
  };

  const renderUploadFiles = () => (
    <label htmlFor="contained-button-file">
      <Input
        accept="image/*"
        onChange={(e: any) =>
          images?.length
            ? setImages([images, e.target.value])
            : setImages(e.target.value)
        }
        id="contained-button-file"
        multiple
        type="file"
      />
      <Button variant="contained" component="span" style={{ width: "100%" }}>
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
        <ButtonComp label="Skapa auktion"/>
      </StyledForm>
    </StyledWrapper>
  );
};

export default CreateAuctionPage;
