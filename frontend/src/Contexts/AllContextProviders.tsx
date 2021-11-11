import AuctionContextProvider from "./AuctionContext";
import AuthContextProvider from "./AuthContext";
import ModalContextProvider from "./ModalContext";
import SearchContextProvider from "./SearchContext";
import CategoryContextProvider from "./CategoryContext";
import BidContextProvider from "./BidContext";
import NavigationContextProvider from "./NavigationContext";
import SnackBarContextProvider from "./SnackBarContext";
import SocketContextProvider from "./SocketContext";
import DrawerContextProvider from "./DrawerContext";
import MessageContextProvider from "./MessageContext";
import NotificationContextProvider from "./NotificationContext";
import { SnackbarProvider } from "notistack";

interface Props {
  children: JSX.Element;
}

const AllContextProviders: React.FC<Props> = ({ children }) => {
  return (
    <>
      <SnackbarProvider preventDuplicate>
        <SnackBarContextProvider>
          <CategoryContextProvider>
            <AuthContextProvider>
              <AuctionContextProvider>
                <ModalContextProvider>
                  <NavigationContextProvider>
                    <DrawerContextProvider>
                      <BidContextProvider>
                        <NotificationContextProvider>
                          <SocketContextProvider>
                            <MessageContextProvider>
                              <SearchContextProvider>
                                {children}
                              </SearchContextProvider>
                            </MessageContextProvider>
                          </SocketContextProvider>
                        </NotificationContextProvider>
                      </BidContextProvider>
                    </DrawerContextProvider>
                  </NavigationContextProvider>
                </ModalContextProvider>
              </AuctionContextProvider>
            </AuthContextProvider>
          </CategoryContextProvider>
        </SnackBarContextProvider>
      </SnackbarProvider>
    </>
  );
};

export default AllContextProviders;
