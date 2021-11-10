import { BaseSyntheticEvent, useState } from "react";
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
  // const { setAuctions, getAuctionsByOptions, auctions, pageNumber, setPageNumber } = useSearch();
  const history = useHistory();
  const [showFilter, setShowFilter] = useState<boolean>(false);
  // let [pageNumber, setPageNumber] = useState(0);

  const toggleFilter = () => setShowFilter(!showFilter);

  const search = async (e: BaseSyntheticEvent) => {
    e.preventDefault();
    await history.push("/auctions");
    if (searchText.trim().length > 0) {
      // let option: SearchObject = {
      //   title: searchText ? searchText : searchWord,
      //   categories: selectedCategories,
      //   sort: selectedSortTime,
      //   status: selectedStatus,
      //   page: pageNumber
      // };
      await getAuctionsByOptions(0);

      // if (searchText.trim().length > 0) {
      //   await getAuctionsByOptions();

      //   // setAuctions(auctionsFromSearch);
      // } else {
      //   await getAuctionsByOptions();
      // }
      setShowFilter(false);
    }
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
