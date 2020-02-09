import React from 'react';
import Cookies from 'universal-cookie';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
} from "react-router-dom";


export function PrivateRoute({ children, ...rest }) {
    return (
        <Route
            {...rest}
            render={({ location }) =>
            isLoggedIn() ? (
                    children
                ) : (
                        <Redirect
                            to={{
                                pathname: "/login",
                                state: { from: location }
                            }}
                        />
                    )
            }
        />
    );
}

export function isLoggedIn() {
    const cookies = new Cookies();
    console.log(cookies.get('tokenLogin'))
    //this.setState({ isAuthenticated: true });
    return cookies.get('tokenLogin')
}

export function Logout() {
      console.log("Logout Pressed PrivateRoute");
      const cookies = new Cookies();
      //this.setState({ isAuthenticated: false });
      cookies.set('tokenLogin', null);
      console.log(cookies.get('tokenLogin'))
    return (
      <p>You've been logged out</p>
    );
  }
  