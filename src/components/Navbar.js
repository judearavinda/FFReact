import React from 'react';
import { isLoggedIn } from '../functions/PrivateRoute'
import { Link } from "react-router-dom";

export default function Navbar() {

    if (isLoggedIn()){
        return <NavbarLoggedIn />
    } else {
        return <NavbarLoggedOut />
    }

}



function NavbarLoggedIn(props){
    return (<nav>
    <ul>
        <li>
            <Link to="/">Home</Link>
        </li>
        <li>
            <Link to="/logout">Logout</Link>
        </li>
        <li>
            <Link to="/dashboard">Dashboard</Link>
        </li>
    
    </ul>
    </nav>);
}

function NavbarLoggedOut(props){
return (<nav>
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
</ul>
</nav>);
}
