import React from 'react';
import { isLoggedIn, Logout } from '../functions/PrivateRoute'
import { Link } from "react-router-dom";


export default class NavBar extends React.Component {
    render() {
        if (props.isAuthenticated) {
            return <NavbarLoggedIn {...props.changeAuthentication}/>
        } else {
            return <NavbarLoggedOut/>
        }
    }
}

class NavbarLoggedIn extends React.Component() {
    //function logout() {
    //    console.log("Logout Pressed Navbar")
    //    Logout();
    //}
    render() {
        return 
        (<nav>
            <button>
                <Link to="/">Home</Link>
            </button>
            <button>
                <Link to="/dashboard">Dashboard</Link>
            </button>
            <button onClick={() => props.changeAuthentication(false)}>+</button>
            <button onClick={logout}>
                Logout
            </button>
        </nav>);
    }
}

function NavbarLoggedOut(props) {
    return (<nav>
        <button>
            <Link to="/">Home</Link>
        </button>
        <button>
            <Link to="/register">Register</Link>
        </button>
        <button>
            <Link to="/login">Login</Link>
        </button>

    </nav>);
}

