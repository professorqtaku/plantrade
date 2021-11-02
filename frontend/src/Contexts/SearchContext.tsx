import React, { createContext, FC, useContext, useState } from 'react'
import { SearchObject, Status } from '../Utils/types';
import { Auction, Category } from '../Interfaces/Interfaces';

type Props = {
  children?: JSX.Element;
};

const SearchContext = createContext<any>(null);

export const useSearch = () => useContext(SearchContext);

const SearchProvider: FC<Props> = ({ children }: Props) => {
  const [searchText, setSearchText] = useState<string>("");

  const getAuctionsByOptions = async (option: SearchObject) => {
    if (option.title.trim().length <= 0) {
      return [];
    }

    let categoryQuery: string = getCategoryQuery(option.categories);  
    let statusQuery: string = getStatusQuery(option.status);

    let res: Response = await fetch(`/rest/auctions/search?title=${option.title}${categoryQuery}${statusQuery}`);
    if (res.ok && res.status == 200) {
      let newAuctions: Array<Auction> = await res.json();
      return newAuctions;
    }
    return [];
  };

  const getCategoryQuery = (categories: Category[] | any) => {
    let query: string = "";
    if (categories) {
      for (let cat of categories) {
        if (query.length <= 0) {
          query = `&category=${cat.name}`;
        } else {
          query += encodeURI(` ${cat.name}`);
        }
      }
    }
    return query;
  }
  const getStatusQuery = (status: Status | any) => {
    let query: string = "";
    if (status) {
      query = "&status=" + encodeURI(status.status);
    }
    return query;
  }

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
