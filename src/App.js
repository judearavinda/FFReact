import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './components/Login'
import Register from './components/Register'
import SubmitPrediction from './components/SubmitPrediction'
import "./styles.css";
import PrivateRoute from './functions/PrivateRoute'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Router>
          <div>
            <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/register">Register</Link>
                </li>
                <li>
                  <Link to="/login">Login</Link>
                </li>

                <li>
                  <Link to="/dashboard">Dashboard</Link>
                </li>
              </ul>
            </nav>

            {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
            <Switch>
              <Route path="/register">
                <Register />
              </Route>
              <Route path="/login">
                <Login />
              </Route>
              <PrivateRoute path="/dashboard">
                <SubmitPrediction />
              </PrivateRoute>
            </Switch>
          </div>
        </Router>
      </header>
    </div>
  );
}

export default App;
