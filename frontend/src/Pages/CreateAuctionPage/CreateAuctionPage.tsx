import {
  StyledWrapper,
  StyledForm,
  StyledTitle,
  StyledButton,
  StyledText,
  StyledImage
} from "./StyledCreateAuctionPage";
import Grid from '@mui/material/Grid';
import AuctionDatePicker from "../../Components/AuctionDatePicker/AuctionDatePicker";
import SelectBar from "../../Components/SelectBar/SelectBar";
import InputField from "../../Components/InputField/InputField";
import { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import { useAuction } from "../../Contexts/AuctionContext";
import { useHistory } from "react-router";
import { Category } from "../AuctionPage/AuctionPage";
import { useSocket } from "../../Contexts/SocketContext";
import Badge from '@mui/material/Badge';

const Input = styled("input")({
  display: "none",
});

const formData = new FormData();

const CreateAuctionPage = () => {
  const { createAuction } = useAuction();
  const history = useHistory();
  const { socket } = useSocket();

  const [preview, setPreview] = useState<string[]>([]);
  const [formDataPreview, setFormDataPreview] = useState<any[]>([]);
  // const [placeHolderList, placeHolderList] = useState();
  // create a holder to store files
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
    setErrorMsg(formData.has('files') ? false : true)

    for (let file of formDataPreview) {
      formData.append('files', file, file.name);
    }

    if(formData.has('files')){
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
        formData.delete('files');

        if (res.id) {
          socket.emit("join", res.id);
          history.push(`/auctions/${res.id}`)
        }
    };
  }
}

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
      {errorMsg && <div>Välj åtminstone 1 bild</div>}
    </label>
  );

  async function onFileLoad(e: any) {
    console.log('what is happening onFileLoad', e.target.files)
    const files = e.target.files;
    let previewArr = [];
    let formDataArr = [];

    // add files to formData
    for (let file of files) {
      const src = URL.createObjectURL(file);
      formDataArr.push(file);
      previewArr.push(src)
    }

    console.log('what is formdata', formData)
    
    
    if (preview.length < 5) {
      if (preview.length + previewArr.length > 5) {
        previewArr = previewArr.slice(0, 5 - preview.length);
        formDataArr = formDataArr.slice(0, 5 - preview.length);
      }
      setPreview([...preview, ...previewArr]);
      setFormDataPreview([...formDataPreview, ...formDataArr]);
    }
    setErrorMsg(files.length ? false : true)
    e.target.value = '';
    previewArr = [];
    formDataArr = [];
}

  const renderImagePreview = () => (
  <Grid container>
    <Grid item xs={12} md={12}>
        {preview.map(img => (
        <Badge badgeContent={'-'} sx={{color: 'var(--status-red)'}} key={img}>
            <StyledImage key={img} src={img} alt="" />
          </Badge>
      ))}
    </Grid>
  </Grid>
  )

  return (
    <StyledWrapper>
      <StyledTitle>Skapa auktion</StyledTitle>
      <StyledForm onSubmit={handleAddAuction}>
        <InputField
          required
          label="Titel"
          value={title}
          updateState={setTitle}
          inputProps={{ maxLength: 20 }}
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
        {renderImagePreview()}
        <StyledButton type="submit" variant="contained">
          {" "}
          Skapa auktion{" "}
        </StyledButton>
      </StyledForm>
    </StyledWrapper>
  );
};

export default CreateAuctionPage;
