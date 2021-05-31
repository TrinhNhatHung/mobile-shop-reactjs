import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import Menu from "./Menu";
import { routes } from "../routes/routes";
import { menus } from "../routes/menus";

function App() {
  return (
    <div className="App">
      <Router>
        <Menu menus={menus} />
        <Switch>
          <Route
            exact
            path="/"
            render={() => {
              return <Redirect to="/home" />;
            }}
          />
          {routes.map((route) => {
            return (
              <Route
                exact={route.exact}
                path={route.path}
                component={route.page}
              />
            );
          })}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
