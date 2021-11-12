import { BaseSyntheticEvent, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useAuction } from "../../../Contexts/AuctionContext";
import { useSearch } from "../../../Contexts/SearchContext";
import SearchField from "../SearchField/SearchField";
import FilterCollapse from "../FilterCollapse/FilterCollapse";
import { StyledForm } from "./StyledSearchForm";
import { SearchObject } from "../../../Utils/types";
import { Auction } from "../../../Interfaces/Interfaces";

type Props = {
  searchWord?: string;
};

const SearchForm = ({ searchWord }: Props) => {
  const {
    auctions,
    setAuctions,
    getAuctionsByOptions,
    searchText,
    setSearchText,
    selectedCategories,
    setSelectedCategories,
    setSelectedSortTime,
    selectedSortTime,
    selectedStatus,
    setSelectedStatus,
  } = useSearch();
  const history = useHistory();
  const [showFilter, setShowFilter] = useState<boolean>(false);

  const toggleFilter = () => setShowFilter(!showFilter);

  const search = async (e: BaseSyntheticEvent) => {
    e.preventDefault();
    await setAuctions([]);
    await getAuctionsByOptions(0);
    setShowFilter(false);
    toggleFilter();
    history.push("/auctions");
  };

  return (
    <StyledForm autoComplete="off" onSubmit={search}>
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
          selectedSortTime={selectedSortTime}
          setSelectedSortTime={setSelectedSortTime}
          selectedStatus={selectedStatus}
          setSelectedStatus={setSelectedStatus}
          selectedCategories={selectedCategories}
          setSelectedCategories={setSelectedCategories}
        />
      </div>
    </StyledForm>
  );
};

export default SearchForm;
