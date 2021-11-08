import { useState } from "react";
import Grid from '@mui/material/Grid';
import ButtonComp from "../Button/ButtonComp";
import { Category } from "../../Interfaces/Interfaces";
interface Props {
  categories: Category[];
  auctionId: Number;
}
import {  StyledChip } from "./StyledAuctionDetailsPageCategories";
import AddIcon from "@mui/icons-material/Add";
import { borderRadius } from "@mui/system";


const AuctionDetailsPageCategories = ({ categories, auctionId }: Props) => {
  const [toggleShowMore, setToggleShowMore ] = useState(false);
  const size = 2;
  const categoriesLimited = categories.slice(0, size)

  const mapThroughAndRender = (_categories: Category[]) => {
    return _categories.map(category => (
      <StyledChip
       key={`${auctionId}-${category.name}`}
       label={`#${category.name}`}
       />
       ))
  }

  return (
  <Grid item xs={12} md={12}>
   {!toggleShowMore ? mapThroughAndRender(categoriesLimited) :
     mapThroughAndRender(categories)
     }
     <ButtonComp label={!toggleShowMore ? "Visa mer" : "Dölj"} callback={() => setToggleShowMore(!toggleShowMore)} />
     
     </Grid>
  )
}

export default AuctionDetailsPageCategories;