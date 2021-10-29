import { BaseSyntheticEvent, useState } from 'react'
import { useAuction } from '../../../Contexts/AuctionContext';
import { useSearch } from '../../../Contexts/SearchContext';
import SearchField from '../SearchField/SearchField';
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";

// shall be removed and type shall be imported from extern file
type Auction = {
  id: Number;
  host: { id: Number; username: String };
  title: String;
  description: String;
  startPrice: Number;
  endDate: Date;
  status: Object;
};

const SearchForm = () => {
  const { getAuctionsByTitles, searchText, setSearchText } = useSearch();
  const { setAuctions, getAllAuctions } = useAuction();

  const search = async (e: BaseSyntheticEvent) => {
    console.log("Submit form");
    
    e.preventDefault();
    if (searchText.trim().length > 0) {
      let auctions: Array<Auction> = await getAuctionsByTitles(searchText);
      setAuctions(auctions);
    }
    else {
      await getAllAuctions();
    }
  }

  return (
    <>
      <form onSubmit={search}>
        <SearchField searchText={searchText} setSearchText={setSearchText} />
      </form>
    </>
  );
}
export default SearchForm;
