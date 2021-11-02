import { BaseSyntheticEvent, useState } from 'react'
import { useAuction } from '../../../Contexts/AuctionContext';
import { useSearch } from '../../../Contexts/SearchContext';
import SearchField from '../SearchField/SearchField';
import FilterCollapse from '../FilterCollapse/FilterCollapse';
import { StyledForm } from './StyledSearchForm';
import { HOUR_IN_DAY } from '../../AuctionCard/auctionUtils';
import { Status, status, Auction, SearchObject } from '../../../Utils/types'

const SearchForm = () => {
  
  const { getAuctionsByOptions, searchText, setSearchText } = useSearch();
  const { setAuctions, getAllAuctions } = useAuction();

  const [ selectedCategories, setSelectedCategories ] = useState<string[]>([]);
  const [ hours, setHours ] = useState<number>(HOUR_IN_DAY);
  const [ selectedStatus, setSelectedStatus ] = useState<Status>(status[0]);
  const [ showFilter, setShowFilter ] = useState<boolean>(false);
  
  const toggleFilter = () => setShowFilter(!showFilter)

  const search = async (e: BaseSyntheticEvent) => {
    e.preventDefault();
    let option: SearchObject = {
      title: searchText,
      categories: selectedCategories,
      hours: hours,
      status: selectedStatus,
    };
    
    if (searchText.trim().length > 0) {
      let auctions: Array<Auction> = await getAuctionsByOptions(option);
      
      setAuctions(auctions);
    }
    else {
      await getAllAuctions();
    }
    setShowFilter(false);
  }

  return (
    <StyledForm onSubmit={search}>
      <div>
        <SearchField
          searchText={searchText}
          setSearchText={setSearchText}
          showFilter={showFilter}
          setShowFilter={setShowFilter}
        />
        <FilterCollapse
          isOpen={showFilter}
          toggle={toggleFilter}
          hours={hours}
          setHours={setHours}
          selectedStatus={selectedStatus}
          setSelectedStatus={setSelectedStatus}
          selectedCategories={selectedCategories}
          setSelectedCategories={setSelectedCategories}
        />
      </div>
    </StyledForm>
  );
}
export default SearchForm;
