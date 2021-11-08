import AuctionProvider from "./AuctionContext";
import { AuthProvider } from "./AuthContext";
import ModalProvider from "./ModalContext";
import SearchProvider from "./SearchContext";
import CategoryProvider from "./CategoryContext";
import BidProvider from "./BidContext";
import NavigationProvider from "./NavigationContext";
import SnackBarProvider from "./SnackBarContext";
import SocketProvider from "./SocketProvider";

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
                    <SocketProvider>
                      <SearchProvider>{children}</SearchProvider>
                    </SocketProvider>
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
