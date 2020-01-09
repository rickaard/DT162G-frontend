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

        <Route path="/snusdatabasen/add-snus">
          <AddSnus />
        </Route>

        <Route path="/snusdatabasen/login">
            <Login />
        </Route>

        <PrivateRoute path="/snusdatabasen/admin">
            <AdminPage />
        </PrivateRoute>

        <Route path="/snusdatabasen/about">
          <About />
        </Route>

        <Route path="/snusdatabasen/snus/:id">
          <SnusPage />
        </Route>

        <Route path="/snusdatabasen/">
          <HomePage />
        </Route>



      </Switch>

    </Router>
  );
}

export default App;
