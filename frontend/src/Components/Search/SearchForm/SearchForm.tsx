import { BaseSyntheticEvent, useState } from 'react'
import { useAuction } from '../../../Contexts/AuctionContext';
import { useSearch } from '../../../Contexts/SearchContext';
import SearchField from '../SearchField/SearchField';

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
  const [searchText, setSearchText] = useState('');
  const { getAuctionsByTitles } = useSearch();
  const { setAuctions, getAllAuctions } = useAuction();

  const search = async (e: BaseSyntheticEvent) => {    
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
    <form onSubmit={search}>
      <SearchField searchText={searchText} setSearchText={setSearchText} />
    </form>
  )
}
export default SearchForm;
