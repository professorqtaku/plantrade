import {
  StyledWrapper,
  StyledForm,
  StyledTitle,
  StyledButton,
  StyledText
} from "./StyledCreateAuctionPage";
import Grid from '@mui/material/Grid';
import AuctionDatePicker from "../../Components/AuctionDatePicker/AuctionDatePicker";
import SelectBar from "../../Components/SelectBar/SelectBar";
import InputField from "../../Components/InputField/InputField";
import { useState } from "react";
import { useAuction } from "../../Contexts/AuctionContext";
import { useHistory } from "react-router";
import { Category } from "../AuctionPage/AuctionPage";
import { useSocket } from "../../Contexts/SocketContext";
import TextField from '@mui/material/TextField';
import FileUpload from '../../Components/FileUpload/FileUpload';

const formData = new FormData();

const CreateAuctionPage = () => {
  const { createAuction } = useAuction();
  const history = useHistory();
  const { socket } = useSocket();

 
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
    
    for (let file of formDataPreview) {
      formData.append('files', file, file.name);
    }
    
    setErrorMsg(formData.has('files') ? false : true);

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
        setErrorMsg(false);
        formData.delete('files');

        if (res.id) {
          socket.emit("join", res.id);
          history.push(`/auctions/${res.id}`)
        }
    };
  }
}

 

  return (
    <StyledWrapper>
      <StyledTitle>Skapa auktion</StyledTitle>
      <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      <StyledForm onSubmit={handleAddAuction}>
        <Grid item>
        <InputField
          required
          label="Titel"
          value={title}
          updateState={setTitle}
          inputProps={{ maxLength: 20 }}
            /></Grid>
        <Grid item>  
            <TextField
              required
              label="Beskrivning"
              multiline
              maxRows={5}
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
              style={{width: '100%'}}
            /></Grid>
          <Grid item>  
        <InputField
          required
          label="Start pris"
          type="number"
          value={price}
          updateState={setPrice}
            /></Grid>
          <Grid item xs={12}>  
        <label>
          <StyledText>Välj ett slutdatum</StyledText>
          <AuctionDatePicker endDate={setEndDate} />
        </label>
          </Grid>
          <Grid item>  
            <SelectBar setCategoriesToUse={setCategoriesToUse} />
          </Grid>
          <Grid item>  
            <FileUpload
              formDataPreview={formDataPreview}
              setFormDataPreview={setFormDataPreview}
              errorMsg={errorMsg}
              setErrorMsg={setErrorMsg}
            />
          </Grid>
          <Grid item> 
        <StyledButton type="submit" variant="contained">
          {" "}
          Skapa auktion{" "}
        </StyledButton>
        </Grid>
      </StyledForm>
      </Grid>
    </StyledWrapper>
  );
};

export default CreateAuctionPage;
