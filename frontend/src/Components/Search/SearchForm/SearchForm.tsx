import { BaseSyntheticEvent, useState } from 'react'
import { useHistory } from 'react-router-dom';
import { useAuction } from '../../../Contexts/AuctionContext';
import { useSearch } from '../../../Contexts/SearchContext';
import SearchField from '../SearchField/SearchField';
import FilterCollapse from '../FilterCollapse/FilterCollapse';
import { StyledForm } from './StyledSearchForm';
import { HOUR_IN_DAY } from '../../AuctionCard/auctionUtils';
import { Status, status, SearchObject } from '../../../Utils/types'
import { Auction} from '../../../Interfaces/Interfaces'

type Props = {
  searchWord?: string;
}

const SearchForm = ({searchWord}: Props) => {

  const { getAuctionsByOptions, searchText, setSearchText } = useSearch();
  const { setAuctions, getAllAuctions } = useAuction();
  const history = useHistory();

  const [ selectedCategories, setSelectedCategories ] = useState<string[]>([]);
  const [ hours, setHours ] = useState<number>(HOUR_IN_DAY);
  const [ selectedStatus, setSelectedStatus ] = useState<Status>(status[0]);
  const [ showFilter, setShowFilter ] = useState<boolean>(false);
  
  const toggleFilter = () => setShowFilter(!showFilter)

  const search = async (e: BaseSyntheticEvent) => {
    e.preventDefault();
    await history.push('/auctions')
    if (searchText.trim().length > 0) {
      let option: SearchObject = {
        title: (searchText ? searchText : searchWord),
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
