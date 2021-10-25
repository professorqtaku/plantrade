import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
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
      </Switch>
    </Router>
  );
}

export default AllRoutes;