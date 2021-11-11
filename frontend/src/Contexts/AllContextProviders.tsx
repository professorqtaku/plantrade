import AuctionProvider from "./AuctionContext";
import { AuthProvider } from "./AuthContext";
import ModalProvider from "./ModalContext";
import SearchProvider from "./SearchContext";
import CategoryProvider from "./CategoryContext";
import BidProvider from "./BidContext";
import NavigationProvider from "./NavigationContext";
import SnackBarProvider from "./SnackBarContext";
import SocketProvider from "./SocketContext";
import DrawerProvider from "./DrawerContext";
import MessageProvider from "./MessageContext";
import NotificationProvider from "./NotificationContext";

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
                  <DrawerProvider>
                    <BidProvider>
                      <NotificationProvider>
                        <SocketProvider>
                          <MessageProvider>
                            <SearchProvider>{children}</SearchProvider>
                          </MessageProvider>
                        </SocketProvider>
                      </NotificationProvider>
                    </BidProvider>
                  </DrawerProvider>
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
