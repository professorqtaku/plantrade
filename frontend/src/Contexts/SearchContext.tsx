import React, { createContext, FC, useContext, useState } from 'react'
import { SearchObject } from '../Utils/types';

type Props = {
  children?: JSX.Element;
};

type Auction = {
  id: Number;
  host: { id: Number; username: String };
  title: String;
  description: String;
  startPrice: Number;
  endDate: Date;
  status: Object;
};

const SearchContext = createContext<any>(null);

export const useSearch = () => useContext(SearchContext);

const SearchProvider: FC<Props> = ({ children }: Props) => {
  const [searchText, setSearchText] = useState<string>("");

  const getAuctionsByOptions = async (option: SearchObject) => {
    if (option.title.trim().length <= 0) {
      return [];
    }

    let categoryQuery: string = '';
    if (option.categories && option.categories.length > 0) {
      categoryQuery = '&category=' + encodeURI(option.categories.join(" "));
    }
    
    let statusQuery: string = '';
    if (option.status) {
      statusQuery = '&status=' + encodeURI(option.status.status)
    }

    let res: Response = await fetch(`/rest/auctions/search?title=${option.title}${categoryQuery}${statusQuery}`);
    if (res.ok && res.status == 200) {
      let newAuctions: Array<Auction> = await res.json();
      return newAuctions;
    }
    return [];
  };

  const value = {
    searchText,
    setSearchText,
    getAuctionsByOptions,
  };


  return (
    <SearchContext.Provider value={value}>
      {children}
    </SearchContext.Provider>
  )
}

export default SearchProvider
