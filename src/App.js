import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

// Pages
import AdminPage from './pages/AdminPage'
import HomePage from './pages/HomePage';
import AddSnus from './pages/AddSnus';

function App() {
  return (
    <Router>

      <Switch>

        <Route path="/admin">
          <AdminPage />
        </Route>

        <Route path="/add-snus">
          <AddSnus />
        </Route>

        <Route path="/">
          <HomePage />
        </Route>



      </Switch>

    </Router>
  );
}

export default App;
