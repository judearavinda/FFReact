import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './components/Login'
import Register from './components/Register'
import SubmitPrediction from './components/SubmitPrediction'
import "./styles.css";
import { PrivateRoute, isLoggedIn }from './functions/PrivateRoute'
import Navbar from './components/Navbar'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

var isAuthenticated;
class App extends React.Component {
  constructor(props) {
    super(props);
    //var isLoggedIn = isLoggedIn();
    this.state = {isAuthenticated : true};
  }


render() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Router>
          <div>
            <Navbar count={this.state.isAuthenticated} changeAuthentication={(isAuthenticated) => this.setState({isAuthenticated})}/>
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
}

export default App;
