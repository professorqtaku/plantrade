import AuctionProvider from "./AuctionContext";
import { AuthProvider } from "./AuthContextProvider";
import ModalProvider from "./ModalContext";
import SearchProvider from "./SearchContext";

interface Props {
  children: JSX.Element;
}

const AllContextProviders: React.FC<Props> = ({ children }) => {
  return (
    <>
      <AuthProvider>
        <AuctionProvider>
          <ModalProvider>
            <SearchProvider>
              {children}
            </SearchProvider>
          </ModalProvider>
        </AuctionProvider>
      </AuthProvider>
    </>
  );
};

export default AllContextProviders;
