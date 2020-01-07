import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';

// Pages
import HomePage from './pages/HomePage';
import AddSnus from './pages/AddSnus';
import Login from './pages/Login';
import AdminPage from './pages/AdminPage';
import About from './pages/About';
import SnusPage from './pages/SnusPage';

function App() {
  return (
    <Router>

      <Switch>

        <Route path="/add-snus">
          <AddSnus />
        </Route>

        <Route path="/login">
            <Login />
        </Route>

        <PrivateRoute path="/admin">
            <AdminPage />
        </PrivateRoute>

        <Route path="/about">
          <About />
        </Route>

        <Route path="/snus/:id">
          <SnusPage />
        </Route>

        <Route path="/">
          <HomePage />
        </Route>



      </Switch>

    </Router>
  );
}

export default App;
