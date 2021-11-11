import {
  StyledWrapper,
  StyledForm,
  StyledTitle,
  StyledButton,
  StyledText,
  StyledImage,
  StyledTextPrimary
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
import Chip from '@mui/material/Chip';

const Input = styled("input")({
  display: "none",
});

interface previewProps {
  name: string,
  src: string
}

const formData = new FormData();

const CreateAuctionPage = () => {
  const { createAuction } = useAuction();
  const history = useHistory();
  const { socket } = useSocket();

  const [preview, setPreview] = useState<previewProps[]>([]);
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
      <Button variant="contained" component="span" style={{width: '100%'}}>
        Ladda upp bilder (max 5 st)
      </Button>
      {errorMsg && <div>Välj åtminstone 1 bild</div>}
    </label>
  );

  async function onFileLoad(e: any) {
    const files = e.target.files;
    let previewArr: previewProps[] = [];
    let formDataArr: any[] = [];

    // add files to formData
    for (let file of files) {
      const src = URL.createObjectURL(file);
      console.log('what is file', file);
      formDataArr.push(file);
      previewArr.push({name: file.name, src}) 
    }

    // check if pic is unique, dont push dublicates
    for (let i = previewArr.length - 1; i >= 0; i--){
      preview.map((p: previewProps) => {
        if (p.name === previewArr[i].name) {
          previewArr.splice(i, 1);
          formDataArr.splice(i, 1);
        }
      });
    }

    // only add total of five pictures
    if (preview.length < 5) {
      if (preview.length + previewArr.length > 5) {
        previewArr = previewArr.slice(0, 5 - preview.length);
        formDataArr = formDataArr.slice(0, 5 - preview.length);
      }
      setPreview([...preview, ...previewArr]);
      setFormDataPreview([...formDataPreview, ...formDataArr]);
    } else {
      setPreview(previewArr.slice(0, 6));
      setFormDataPreview(formDataArr.slice(0, 6));
    }
    setErrorMsg(files.length ? false : true)
    e.target.value = '';
    previewArr = [];
    formDataArr = [];
  }
  
  const handleRemovePic = (previewObject: previewProps, e: any) => {
    let copyOfPreview = Object.assign([], preview);
    let copyOfFormData = Object.assign([], formDataPreview);
    let index = copyOfPreview.indexOf(previewObject);
    if(e.tagName === 'IMG'){
      handlePrimaryPic(copyOfPreview, copyOfFormData, index);
      return;
    }
    copyOfPreview.splice(index, 1);
    copyOfFormData.splice(index, 1);
    setPreview([...copyOfPreview]);
    setFormDataPreview([...copyOfFormData]);
  }

  const handlePrimaryPic = (copyOfPreview: previewProps[], copyOfFormData: any[], index: number) => {
    let primaryImg = copyOfPreview.splice(index, 1);
    let primaryFormData = copyOfFormData.splice(index, 1);
    copyOfPreview.unshift(primaryImg[0]);
    copyOfFormData.unshift(primaryFormData[0]);
    setPreview([...copyOfPreview]);
    setFormDataPreview([...copyOfFormData]);
  }

  const renderImagePreview = () => (
  <>{preview.length > 0 && <p style={{textAlign: 'center'}}>Klicka på den bild du vill ha som huvudvy</p>}
  <Grid container>
        {preview.map((p: previewProps, index: number) => {
          const primary = index == 0 ? true : false;
          return (
          <Grid item xs={6} md={2}>
            <Badge badgeContent={'-'}
                color="error"
                key={p.src}
                onClick={(e) => handleRemovePic(p, e.target)}
              >
                <StyledImage src={p.src} key={p.src} />
              {primary && <Chip label="Huvudbild" style={{position: 'absolute', margin: '5px'}} color="success" />}
              </Badge>
            </Grid>
          )
        }
      )
    }
    
  </Grid></>
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
