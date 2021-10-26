import AuctionProvider from "./AuctionContext";
import ModalProvider from "./ModalContext";

interface Props {
  children: JSX.Element;
}

const AllContextProviders: React.FC<Props> = ({ children }) => {
  return (
    <>
      <AuctionProvider>
          <ModalProvider>
            {children}
          </ModalProvider>
      </AuctionProvider>
    </>
  );
};

export default AllContextProviders;
