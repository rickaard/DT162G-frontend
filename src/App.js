import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';

// Pages
import HomePage from './pages/HomePage';
import AddSnus from './pages/AddSnus';
import Login from './pages/Login';
import AdminPage from './pages/AdminPage'

function App() {
  return (
    <Router>

      <Switch>

        {/* <Route path="/admin">
          <AdminPage />
        </Route> */}

        <Route path="/add-snus">
          <AddSnus />
        </Route>

        <Route path="/login">
            <Login />
        </Route>

        <PrivateRoute path="/admin">
            <AdminPage />
        </PrivateRoute>


        <Route path="/">
          <HomePage />
        </Route>



      </Switch>

    </Router>
  );
}

export default App;
