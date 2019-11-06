import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import Store from './store/store';
import Header from './components/Header/index';
import AddUsers from './containers/AddUsers/AddUsers';
import SignIn from './containers/SignIn/SignIn';
import SignUp from './containers/SignUp/SignUp';
import ViewUsers from './containers/ViewUsers/ViewUsers';
import EditUser from './containers/EditUsers';

import * as Routes from './utils/Routes';

import 'bootstrap/dist/css/bootstrap.min.css';

const App: React.FC = () => {
  return (
    <Provider store={Store()}>
      
      <Router>
        <Header />
        <Route  path={Routes.ADD_USER} component={AddUsers} />
          <Route  path={Routes.SIGN_IN} component={SignIn} />
          <Route  path={Routes.SIGN_UP} component={SignUp} />
          <Route  path={Routes.VIEW_USERS} component={ViewUsers} />
        <Switch>
          <Route path={Routes.EDIT_USER} exact component={EditUser} />
        </Switch>  
      </Router>
      
    </Provider>
  );
}

export default App;
