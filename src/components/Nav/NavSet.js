import React from "react";


const NavSet = () => {

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <ul className="navbar-nav mr-auto">
                <li className="nav-link"><a className="nav-link" href="/">Scoreboard</a></li>
                <li className="nav-link active"><a className="nav-link" href="/settings">Game Settings</a></li>
            </ul>
        </nav>
    )
};

export default NavSet;

