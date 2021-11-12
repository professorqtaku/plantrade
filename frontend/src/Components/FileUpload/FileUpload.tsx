import Badge from '@mui/material/Badge';
import Chip from '@mui/material/Chip';
import Button from "@mui/material/Button";
import { StyledImage } from "../../Pages/CreateAuctionPage/StyledCreateAuctionPage";
import { Dispatch, SetStateAction, useState } from 'react';
import Grid from '@mui/material/Grid';
import { styled } from "@mui/material/styles";

const Input = styled("input")({
  display: "none"
});

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


function FileUpload({formDataPreview, setFormDataPreview, errorMsg, setErrorMsg}: Props) {
  const [preview, setPreview] = useState<PreviewProps[]>([]);

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
      {errorMsg && <p style={{textAlign: 'center'}}>Du måste välja minst en bild</p>}
    </label>
  );

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

    // check if pic is unique, dont push dublicates
    for (let i = previewArr.length - 1; i >= 0; i--){
      preview.map((p: PreviewProps) => {
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

  const renderImagePreview = () => (
  <>{preview.length > 0 && <p style={{textAlign: 'center'}}>Klicka på den bild du vill ha som huvudvy</p>}
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
          )
        }
      )
    }
    
  </Grid></>
  )

  return (
    <>
      {renderUploadFiles()}
      {renderImagePreview()}
    </>
  )
}

export default FileUpload;