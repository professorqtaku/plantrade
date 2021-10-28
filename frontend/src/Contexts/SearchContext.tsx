import React, { createContext, FC, useContext, useState } from 'react'

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
    const [searchText, setSearchText] = useState("");

  const getAuctionsByTitles = async (search: string) => {
    if (search.trim().length > 0) {
      let res: Response = await fetch(`/rest/auctions/search?title=${search}`);  
      if (res.ok && res.status == 200) {
        let newAuctions: Array<Auction> = await res.json();
        return newAuctions;
      }
    }
    return [];
  };

  const value = {
    searchText,
    setSearchText,
    getAuctionsByTitles,
  };


  return (
    <SearchContext.Provider value={value}>
      {children}
    </SearchContext.Provider>
  )
}

export default SearchProvider
