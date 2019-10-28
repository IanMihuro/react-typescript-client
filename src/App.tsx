import React from 'react';
import { Route, BrowserRouter as Router, Link, match } from 'react-router-dom';
import { Provider } from 'react-redux';
import Store from './store/store';
import Header from './components/Header/index';
import AddUsers from './containers/AddUsers/AddUsers';
import SignIn from './containers/SignIn/SignIn';
import SignUp from './containers/SignUp/SignUp';
import ViewUsers from './containers/ViewUsers/ViewUsers';

const App: React.FC = () => {
  return (
    <Provider store={Store()}>
      
      <Router>
      <Header />
        <Route  path="/addusers" component={AddUsers} />
        <Route  path="/signin" component={SignIn} />
        <Route  path="/signup" component={SignUp} />
        <Route  path="/viewusers" component={ViewUsers} />
      </Router>
      
    </Provider>
  );
}

export default App;
