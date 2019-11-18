import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import Store from "./store/store";
import Header from "./components/Header/index";
import AddUsers from "./containers/AddUsers";
import SignIn from "./containers/SignIn";
import SignUp from "./containers/SignUp";
import ViewUsers from "./containers/ViewUsers";
import EditUser from "./containers/EditUsers";

import * as Routes from "./utils/Routes";

import "bootstrap/dist/css/bootstrap.min.css";

const App: React.FC = () => {
  return (
    <Provider store={Store()}>
      <Router>
        <div>
          <Header />
          <div className="auth-wrapper">
            <div className="auth-inner">
              <Route
                path={Routes.VIEW_USERS}
                exact={true}
                component={ViewUsers}
              />
              <Route path={Routes.ADD_USER} component={AddUsers} />
              <Route path={Routes.SIGN_IN} component={SignIn} />
              <Route path={Routes.SIGN_UP} component={SignUp} />
              <Switch>
                <Route path={Routes.EDIT_USER} exact component={EditUser} />
              </Switch>
            </div>
          </div>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
