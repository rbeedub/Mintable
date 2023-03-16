import React from "react";
import LogOutButton from './LogOutButton'

function NavBar({ setUser }) {

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