import React, { createContext, FC, useContext, useState } from "react";
import { SearchObject, Status, status } from "../Utils/types";
import { Auction, Category } from "../Interfaces/Interfaces";
import { HOUR_IN_DAY } from "../Components/AuctionCard/auctionUtils";

type Props = {
  children?: JSX.Element;
};

const SearchContext = createContext<any>(null);

export const useSearch = () => useContext(SearchContext);

const SearchContextProvider: FC<Props> = ({ children }: Props) => {
  const [searchText, setSearchText] = useState<string>("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedHours, setSelectedHours] = useState<number>(HOUR_IN_DAY);
  const [selectedStatus, setSelectedStatus] = useState<Status>(status[0]);
  const [isRerender, setIsRerender] = useState(false);

  const clearFilter = () => {
    setSearchText("");
    setSelectedCategories([]);
    setSelectedHours(HOUR_IN_DAY);
    setSelectedStatus(status[0]);
    setIsRerender(!isRerender);
  };

  const getAuctionsByOptions = async (option: SearchObject) => {
    if (option.title.trim().length <= 0) {
      return [];
    }

    let categoryQuery: string = getCategoryQuery(option.categories);
    let statusQuery: string = getStatusQuery(option.status);

    let res: Response = await fetch(
      `/api/auctions/search?title=${option.title}${categoryQuery}${statusQuery}`
    );
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
  };

  const getStatusQuery = (status: Status | any) => {
    let query: string = "";
    if (status) {
      query = "&status=" + encodeURI(status.status);
    }
    return query;
  };

  const value = {
    clearFilter,
    searchText,
    setSearchText,
    selectedCategories,
    setSelectedCategories,
    selectedHours,
    setSelectedHours,
    selectedStatus,
    setSelectedStatus,
    getAuctionsByOptions,
    isRerender,
  };

  return (
    <SearchContext.Provider value={value}>{children}</SearchContext.Provider>
  );
};

export default SearchContextProvider;
