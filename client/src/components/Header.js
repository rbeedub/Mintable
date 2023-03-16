import React from "react";
import NavBar from "./NavBar";
import { NavLink } from "react-router-dom"

function Header( { user, setUser} ) {
return (
<>
    <div class="ui secondary pointing menu">
    <a class="item">
    < NavLink to="/">Home</NavLink> 
    </a>
    <a class="item">
        < NavLink to="/edit-profile"> My Profile </NavLink>
    </a>
    <div class="right menu">
        <a class="ui item active">
        <NavBar
    user={user}
    setUser={setUser}/>
        </a>
    </div>
    </div>

</>
)
}

export default Header;