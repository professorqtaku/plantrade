import {
  StyledWrapper,
  StyledForm,
  StyledTitle,
  StyledButton,
  StyledText,
} from "./StyledCreateAuctionPage";
import AuctionDatePicker from "../../Components/AuctionDatePicker/AuctionDatePicker";
import SelectBar from "../../Components/SelectBar/SelectBar";
import InputField from "../../Components/InputField/InputField";
import { useState } from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import { useAuction } from "../../Contexts/AuctionContext";
import { useHistory } from "react-router";
import { Category } from "../AuctionPage/AuctionPage";



const Input = styled("input")({
  display: "none",
});

const CreateAuctionPage = () => {
  const { createAuction } = useAuction();
  const history = useHistory();

  // const [preview, setPreview] = useState('')
  // create a holder to store files
  const formData = new FormData()
  const [title, setTitle] = useState<string>('');
  const [desc, setDesc] = useState<string>('');
  const [price, setPrice] = useState<number>(0);
  /*  not that i add 24 hr + 5 extra seconds.
  Had to do that because we have extra check in backend that checks that endDate is minimum one day and max one month, if i just add 1000*60*60*24 i get back an error as a response. */
  const inOneDay = Date.now() + 1000*65*60*24;
  const [endDate, setEndDate] = useState<number | undefined>(inOneDay);
  const [categoriesToUse, setCategoriesToUse] = useState<
    Category[]>([]);
  const [errorMsg, setErrorMsg] = useState(false);

  const handleAddAuction = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
      if(formData.has('files')){
        setErrorMsg(false);
      } else {
        setErrorMsg(true);
        return;
      }

      const auction = {
        title: title,
        description: desc,
        startPrice: price,
        endDate: endDate,
      };
  
      if(auction.title && auction.description && auction.startPrice){
        const res =  await createAuction(auction, categoriesToUse, formData);
        
        setTitle('');
        setDesc('');
        setPrice(0);
        setEndDate(inOneDay);
        setCategoriesToUse([]);
        
        if(res.id) {
          history.push(`/auctions/${res.id}`)
        }
      }
  };

  const renderUploadFiles = () => (
    <label htmlFor="contained-button-file">
      <Input
        accept="image/*"
        onChange={onFileLoad}
        id="contained-button-file"
        multiple
        type="file"
      />
      <Button variant="contained" component="span" style={{ width: "100%" }}>
        Ladda upp bilder
      </Button>
      {errorMsg && <div>Please choose atleast one file</div>}
    </label>
  );

  async function onFileLoad(e: any) {
    const files = e.target.files;

    // add files to formData
    for (let file of files) {
      formData.append('files', file, file.name);
    }

    // clear input of files
    e.target.value = '';
  }

  return (
    <StyledWrapper>
      <StyledTitle>Skapa auktion</StyledTitle>
      <StyledForm onSubmit={handleAddAuction}>
        <InputField
          required
          label="Titel"
          value={title}
          updateState={setTitle}
        />
        <InputField
          required
          label="Beskrivning"
          value={desc}
          updateState={setDesc}
        />
        <InputField
          required
          label="Start pris"
          type="number"
          value={price}
          updateState={setPrice}
        />
        <label>
          <StyledText>Välj ett slutdatum</StyledText>
          <AuctionDatePicker endDate={setEndDate} />
        </label>
        <SelectBar setCategoriesToUse={setCategoriesToUse} />
        {renderUploadFiles()}
        <StyledButton type="submit" variant="contained">
          {" "}
          Skapa auktion{" "}
        </StyledButton>
      </StyledForm>
    </StyledWrapper>
  );
};

export default CreateAuctionPage;
