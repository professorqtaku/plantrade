import AuctionProvider from "./AuctionContext";
import ModalProvider from "./ModalContext";
import SearchProvider from "./SearchContext";

interface Props {
  children: JSX.Element;
}

const AllContextProviders: React.FC<Props> = ({ children }) => {
  return (
    <>
      <AuctionProvider>
        <ModalProvider>
            <SearchProvider>
              {children}
            </SearchProvider>
          </ModalProvider>
      </AuctionProvider>
    </>
  );
};

export default AllContextProviders;
