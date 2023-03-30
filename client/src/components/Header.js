import React from "react";
import NavBar from "./NavBar";
import { NavLink } from "react-router-dom"

function Header() {
return (
<>
    <img class="ui fluid image" src="./images/MBanner.svg" />
    <div class="ui secondary pointing menu">
    <a class="item">
    < NavLink to="/">Home</NavLink> 
    </a>
    <a class="item">
        < NavLink to="/five-dimensions"> Leadership Dimensions </NavLink>
    </a>
    <a class="item">
    < NavLink to="/activities"> 

        Activities </NavLink>
    </a>

    <a class="item">
        < NavLink to="/edit-profile"> My Profile </NavLink>
    </a>

    <div class="right menu">
        <a class="ui item active">
        <NavBar/>
        </a>
    </div>
    </div>

</>
)
}

export default Header;