import AuctionProvider from "./AuctionContext";

interface Props {
  children: JSX.Element;
}

const AllContextProviders: React.FC<Props> = ({ children }) => {
  return (
    <>
      <AuctionProvider>
        {children}
      </AuctionProvider>
    </>
  );
};

export default AllContextProviders;
