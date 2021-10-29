import React, { createContext, FC, useContext, useState } from 'react'
import { HOUR_IN_DAY } from '../Components/AuctionCard/auctionUtils';

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
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [hours, setHours] = useState<number>(HOUR_IN_DAY);

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
    selectedCategories,
    hours,
    setHours,
    setSelectedCategories,
    getAuctionsByTitles,
  };


  return (
    <SearchContext.Provider value={value}>
      {children}
    </SearchContext.Provider>
  )
}

export default SearchProvider
