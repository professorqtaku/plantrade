import AuctionProvider from "./AuctionContext";
import ModalProvider from "./ModalContext";
import SearchProvider from "./SearchContext";
import CategoryProvider from "./CategoryContext";

interface Props {
  children: JSX.Element;
}

const AllContextProviders: React.FC<Props> = ({ children }) => {
  return (
    <>
      <CategoryProvider>
        <AuctionProvider>
          <ModalProvider>
              <SearchProvider>
                {children}
              </SearchProvider>
            </ModalProvider>
        </AuctionProvider>
      </CategoryProvider>
    </>
  );
};

export default AllContextProviders;
