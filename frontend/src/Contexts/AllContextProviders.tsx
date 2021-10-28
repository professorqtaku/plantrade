import AuctionProvider from "./AuctionContext";
import ModalProvider from "./ModalContext";
import SearchProvider from "./SearchContext";
import BidProvider from "./BidContext"

interface Props {
  children: JSX.Element;
}

const AllContextProviders: React.FC<Props> = ({ children }) => {
  return (
    <>
      <AuctionProvider>
        <ModalProvider>
          <BidProvider>
              <SearchProvider>
                {children}
              </SearchProvider>
            </BidProvider>
          </ModalProvider>
      </AuctionProvider>
    </>
  );
};

export default AllContextProviders;
