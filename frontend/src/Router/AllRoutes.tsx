import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AuctionDetailPage from "../Pages/AuctionDetailPage/AuctionDetailPage";
import AuctionPage from "../Pages/AuctionPage/AuctionPage";
import HomePage from "../Pages/HomePage/HomePage";
import MyAuctionsPage from '../Pages/MyAuctionsPage/MyAuctionsPage';
import MyWonAuctionsPage from '../Pages/MyWonAuctionsPage/MyWonAuctionsPage';
import MyPage from "../Pages/MyPage/MyPage";
import CreateAuctionPage from "../Pages/CreateAuctionPage/CreateAuctionPage";

interface Props {
  children:
    | JSX.Element
    | JSX.Element[]
    | (false | Element)[];
}

const AllRoutes: React.FC<Props> = ({ children }) => {
  return (
    <Router>
      {children}
      <Switch>
        <Route path="/" exact={true} component={HomePage} />
        <Route path="/auctions" exact={true} component={AuctionPage} />
        <Route path="/my-page" exact={true} component={MyPage} />
        <Route path="/my-page/my-auctions" exact={true} component={MyAuctionsPage} />
        <Route path="/my-page/my-won-auctions" exact={true} component={MyWonAuctionsPage} />
        {/* <Route path="/register" exact={true} component={RegisterPage} /> */}
        <Route path="/auctions/:id" exact={true} component={AuctionDetailPage} />
        <Route
          path="/createAuction"
          exact={true}
          component={CreateAuctionPage}
        />
      </Switch>
    </Router>
  );
};

export default AllRoutes;
