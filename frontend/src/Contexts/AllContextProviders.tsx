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
import ChatContextProvider from "./ChatContext";

interface Props {
  children: JSX.Element;
}

const AllContextProviders: React.FC<Props> = ({ children }) => {
  console.log("---1. ALL CONTEXT----");
  
  return (
    <>
      <SnackBarContextProvider>
        <CategoryContextProvider>
          <AuthContextProvider>
            <AuctionContextProvider>
              <ModalContextProvider>
                <NavigationContextProvider>
                  <DrawerContextProvider>
                    <BidContextProvider>
                      <NotificationContextProvider>
                        <ChatContextProvider>
                          <MessageContextProvider>
                            <SearchContextProvider>
                              <SocketContextProvider>
                                {children}
                              </SocketContextProvider>
                            </SearchContextProvider>
                          </MessageContextProvider>
                        </ChatContextProvider>
                      </NotificationContextProvider>
                    </BidContextProvider>
                  </DrawerContextProvider>
                </NavigationContextProvider>
              </ModalContextProvider>
            </AuctionContextProvider>
          </AuthContextProvider>
        </CategoryContextProvider>
      </SnackBarContextProvider>
    </>
  );
};

export default AllContextProviders;
