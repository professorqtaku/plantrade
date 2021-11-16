import Badge from '@mui/material/Badge';
import Chip from '@mui/material/Chip';
import Button from "@mui/material/Button";
import { StyledImage } from "../../Pages/CreateAuctionPage/StyledCreateAuctionPage";
import { Dispatch, SetStateAction, useState } from 'react';
import Grid from '@mui/material/Grid';
import { styled } from "@mui/material/styles";

interface Props {
  formDataPreview: any[],
  setFormDataPreview: Dispatch<SetStateAction<any[]>>,
  errorMsg: boolean,
  setErrorMsg: Dispatch<SetStateAction<boolean>>,
}

interface PreviewProps {
  name: string,
  src: string
}

const Input = styled("input")({
  display: "none"
});

function FileUpload({formDataPreview, setFormDataPreview, errorMsg, setErrorMsg}: Props) {
  const [preview, setPreview] = useState<PreviewProps[]>([]);
  const maxPics = 5;

  async function onFileLoad(e: any) {
    const files = e.target.files;
    let previewArr: PreviewProps[] = [];
    let formDataArr: any[] = [];

    // add files to formData
    for (let file of files) {
      const src = URL.createObjectURL(file);
      formDataArr.push(file);
      previewArr.push({name: file.name, src}) 
    }

    const { previewArrCheck, formDataArrCheck } = checkUniquePics(previewArr, formDataArr);
    addMaxAmountPics(previewArrCheck, formDataArrCheck);
    setErrorMsg(!files.length)
    e.target.value = '';
    previewArr = [];
    formDataArr = [];
  }
  
  const checkUniquePics = (previewArrCheck: PreviewProps[], formDataArrCheck: any[]) => {
    for (let i = previewArrCheck.length - 1; i >= 0; i--){
      preview.map((p: PreviewProps) => {
        if (p && p.name === previewArrCheck[i].name) {
          previewArrCheck.splice(i, 1);
          formDataArrCheck.splice(i, 1);
        }
      });
    }
    return { previewArrCheck, formDataArrCheck }
  }

  const addMaxAmountPics = (previewArr: PreviewProps[], formDataArr: any[]) => {
    if (preview.length < maxPics) {
      if (preview.length + previewArr.length > maxPics) {
        previewArr = previewArr.slice(0, maxPics - preview.length);
        formDataArr = formDataArr.slice(0, maxPics - preview.length);
      }
      setPreview([...preview, ...previewArr]);
      setFormDataPreview([...formDataPreview, ...formDataArr]);
    } else {
      setPreview(previewArr.slice(0, maxPics + 1));
      setFormDataPreview(formDataArr.slice(0, maxPics + 1));
    }
  }
  
  const handleRemovePic = (previewObject: PreviewProps, e: any) => {
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

  const handlePrimaryPic = (copyOfPreview: PreviewProps[], copyOfFormData: any[], index: number) => {
    let primaryImg = copyOfPreview.splice(index, 1);
    let primaryFormData = copyOfFormData.splice(index, 1);
    copyOfPreview.unshift(primaryImg[0]);
    copyOfFormData.unshift(primaryFormData[0]);
    setPreview([...copyOfPreview]);
    setFormDataPreview([...copyOfFormData]);
  }

  return (
    <>
      <label htmlFor="contained-button-file">
        <Input
          accept="image/*"
          onChange={onFileLoad}
          id="contained-button-file"
          multiple
        type="file"
        />
        <Button variant="contained" component="span" style={{width: '100%', marginTop: '10px'}}>
          Ladda upp bilder (max {maxPics} st)
        </Button>
        {errorMsg && <p style={{textAlign: 'center'}}>Du måste välja minst en bild</p>}
      </label>
      {preview.length > 0 && <p style={{textAlign: 'center'}}>Klicka på den bild du vill ha som huvudvy</p>}
      <Grid container>
        {preview.map((p: PreviewProps, index: number) => {
          const primary = index == 0 ? true : false;
          return (
          <Grid item xs={6} md={2} key={index + 'a'}>
            <Badge badgeContent={'-'}
                color="error"
                key={index}
                onClick={(e) => handleRemovePic(p, e.target)}
              >
                <StyledImage src={p.src} key={p.src} />
              {primary && <Chip label="Huvudbild" style={{position: 'absolute', margin: '5px'}} color="success" key={p.name} />}
              </Badge>
            </Grid>
          )})}
      </Grid>
    </>
  )
}

export default FileUpload;