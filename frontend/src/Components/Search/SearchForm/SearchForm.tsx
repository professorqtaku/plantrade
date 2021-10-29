import { BaseSyntheticEvent, useState } from 'react'
import { useHistory } from 'react-router-dom';
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

type Props = {
  searchWord?: string;
}

const SearchForm = ({searchWord}: Props) => {
  const { getAuctionsByTitles, searchText, setSearchText } = useSearch();
  const { setAuctions, getAllAuctions } = useAuction();
  const history = useHistory();

  const search = async (e: BaseSyntheticEvent) => {    
    e.preventDefault();
    await history.push('/auctions')
    if (searchText.trim().length > 0) {
      let auctions: Array<Auction> = await getAuctionsByTitles(searchText ? searchText : searchWord);
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
