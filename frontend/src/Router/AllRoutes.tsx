import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AuctionPage from "../Pages/AuctionPage/AuctionPage";
import HomePage from "../Pages/HomePage/HomePage";

interface Props {
  children: JSX.Element[]
}

const AllRoutes: React.FC<Props> = ({children}) => {

  return (
    <Router>
      {children}
      <Switch>
        <Route path="/" exact={true} component={HomePage} />
        <Route path="/auctions" exact={true} component={AuctionPage} />
      </Switch>
    </Router>
  );
}

export default AllRoutes;