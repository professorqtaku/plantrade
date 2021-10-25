import AuctionProvider from "./AuctionContext";
import { AuthProvider } from "./AuthContextProvider";
import ModalProvider from "./ModalContext";

interface Props {
  children: JSX.Element;
}

const AllContextProviders: React.FC<Props> = ({ children }) => {
  return (
    <>
      <AuthProvider>
        <AuctionProvider>
          <ModalProvider>
            {children}
          </ModalProvider>
        </AuctionProvider>
      </AuthProvider>
    </>
  );
};

export default AllContextProviders;
