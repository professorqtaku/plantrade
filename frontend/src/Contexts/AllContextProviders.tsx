import AuctionProvider from "./AuctionContext";
import { AuthProvider } from "./AuthContext";
import ModalProvider from "./ModalContext";
import SearchProvider from "./SearchContext";
import CategoryProvider from "./CategoryContext";
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
      <CategoryProvider>
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
        </CategoryProvider>
      </SnackBarProvider>
    </>
  );
};

export default AllContextProviders;
