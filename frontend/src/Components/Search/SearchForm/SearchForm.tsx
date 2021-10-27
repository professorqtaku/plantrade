import { BaseSyntheticEvent, useState } from 'react'
import SearchField from '../SearchField/SearchField';

const SearchForm = () => {
  const [searchText, setSearchText] = useState('');

  const search = (e: BaseSyntheticEvent) => {    
    e.preventDefault();
    console.log(searchText);
    
  }

  return (
    <form onSubmit={search}>
      <SearchField searchText={searchText} setSearchText={setSearchText} />
    </form>
  )
}
export default SearchForm;
