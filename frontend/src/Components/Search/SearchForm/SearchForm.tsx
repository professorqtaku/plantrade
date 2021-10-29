import { BaseSyntheticEvent, useState } from 'react'
import { useAuction } from '../../../Contexts/AuctionContext';
import { useSearch } from '../../../Contexts/SearchContext';
import SearchField from '../SearchField/SearchField';
import FilterCollapse from '../FilterCollapse/FilterCollapse';
import { StyledForm } from './StyledSearchForm';

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
  const [ showFilter, setShowFilter ] = useState<boolean>(false);
  const toggleFilter = () => setShowFilter(!showFilter)

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
    <StyledForm onSubmit={search}>
      <div>
        <SearchField
          searchText={searchText}
          setSearchText={setSearchText}
          setShowFilter={setShowFilter}
          showFilter={showFilter}
          />
        <FilterCollapse isOpen={showFilter} toggle={toggleFilter} />
      </div>
    </StyledForm>
  );
}
export default SearchForm;
