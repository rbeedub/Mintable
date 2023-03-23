import React from "react";
import { UserContext } from "../context/user";
import { useContext } from "react"; 
import LogOutButton from './LogOutButton'

function NavBar() {

const [user, setUser] = useContext(UserContext)

    function handleLogOutClick() {
        fetch("/logout", { method: "DELETE" }).then((r) => {
            if (r.ok) {
            setUser(null);
            }
        });
    }

return (
    
    <LogOutButton handleLogOutClick={handleLogOutClick}/>
)

}

export default NavBar;