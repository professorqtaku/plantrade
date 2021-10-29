import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AuctionDetailPage from "../Pages/AuctionDetailPage/AuctionDetailPage";
import AuctionPage from "../Pages/AuctionPage/AuctionPage";
import HomePage from "../Pages/HomePage/HomePage";
import MyAuctionsPage from '../Pages/MyAuctionsPage/MyAuctionsPage';
import MyPage from "../Pages/MyPage/MyPage";
import RegisterPage from "../Pages/RegisterPage/RegisterPage";
import CreateAuctionPage from "../Pages/CreateAuctionPage/CreateAuctionPage";

interface Props {
  children: JSX.Element;
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
        <Route path="/register" exact={true} component={RegisterPage} />
        <Route path="/auction/:id" exact={true} component={AuctionDetailPage} />
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
