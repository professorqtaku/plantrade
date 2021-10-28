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
import { useAuction } from "../../Contexts/AuctionContext";

const Input = styled("input")({
  display: "none",
});

const CreateAuctionPage = () => {
  const { createAuction } = useAuction();
 

  const [title, setTitle] = useState<string | undefined>();
  const [desc, setDesc] = useState<string | undefined>();
  const [price, setPrice] = useState<number | undefined>();
  const [images, setImages] = useState<String[] | undefined>();
  /*  not that i add 24 hr + 5 extra seconds.
  Had to do that because we have extra check in backend that checks that endDate is minimum one day and max one month, if i just add 1000*60*60*24 i get back an error as a response. */
  const inOneDay = Date.now() + 1000*65*60*24;
  const [endDate, setEndDate] = useState<number | undefined>(inOneDay);
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
    /*categories: categoriesToUse,  */
    };
    createAuction(auction);

    setTitle(undefined);
    setDesc(undefined);
    setPrice(undefined);
    setImages(undefined);
    setEndDate(inOneDay);
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

  const handleLogin = async (e: any) => {
    e.preventDefault();
    const user = {
      "id": 3,
      "username": "postila",
      "email": "postila@haha.se",
      "password": 123
    }

    let res: Response  = await fetch('/api/login', {
      method: 'POST',
      body: JSON.stringify(user),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const userLoginResponse = await res.json();
    console.log(userLoginResponse);
  }


  return (
    <StyledWrapper>
      <button onClick={(e) => handleLogin(e)}>Login</button>
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
