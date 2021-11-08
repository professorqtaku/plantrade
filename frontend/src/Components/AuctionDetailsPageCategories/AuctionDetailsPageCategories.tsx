import Grid from '@mui/material/Grid';
import {  StyledChip } from "./StyledAuctionDetailsPageCategories";
import { Category } from "../../Interfaces/Interfaces";
interface Props {
  categories: Category[];
  auctionId: Number;
}

const AuctionDetailsPageCategories = ({ categories, auctionId }: Props) => {

  return (
  <Grid item xs={12} md={12}>
    {categories
    ? categories.map(category => (
    <StyledChip
     key={`${auctionId}-${category.name}`}
     label={`#${category.name}`}
     />
     ))
     : null}
     </Grid>
  )
}

export default AuctionDetailsPageCategories;