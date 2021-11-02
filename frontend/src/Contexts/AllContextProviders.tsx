import AuctionProvider from "./AuctionContext";
import { AuthProvider } from "./AuthContext";
import ModalProvider from "./ModalContext";
import SearchProvider from "./SearchContext";
import BidProvider from "./BidContext";
import NavigationProvider from "./NavigationContext";
import SnackBarProvider from "./SnackBarContext";

interface Props {
  children: JSX.Element;
}

const AllContextProviders: React.FC<Props> = ({ children }) => {
  return (
    <>
      <SnackBarProvider>
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
      </SnackBarProvider>
    </>
  );
};

export default AllContextProviders;
