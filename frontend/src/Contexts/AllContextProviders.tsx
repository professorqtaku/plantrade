import AuctionProvider from "./AuctionContext";
import { AuthProvider } from "./AuthContext";
import ModalProvider from "./ModalContext";
import SearchProvider from "./SearchContext";
import NavigationProvider from "./NavigationContext";

interface Props {
  children: JSX.Element;
}

const AllContextProviders: React.FC<Props> = ({ children }) => {
  return (
    <>
      <AuctionProvider>
        <ModalProvider>
          <NavigationProvider>
            <SearchProvider>{children}</SearchProvider>
          </NavigationProvider>
        </ModalProvider>
      </AuctionProvider>
    </>
  );
};

export default AllContextProviders;
