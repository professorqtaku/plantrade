import AuctionProvider from "./AuctionContext";
import { AuthProvider } from "./AuthContext";
import ModalProvider from "./ModalContext";
import SearchProvider from "./SearchContext";
import BidProvider from "./BidContext"
import NavigationProvider from "./NavigationContext";

interface Props {
  children: JSX.Element;
}

const AllContextProviders: React.FC<Props> = ({ children }) => {
  return (
    <>
      <AuthProvider>
        <AuctionProvider>
          <ModalProvider>
            <NavigationProvider>
              <BidProvider>
                <SearchProvider>{children}</SearchProvider>
              </BidProvider>
            </NavigationProvider>
          </ModalProvider>
        </AuctionProvider>
      </AuthProvider>
    </>
  );
};

export default AllContextProviders;
