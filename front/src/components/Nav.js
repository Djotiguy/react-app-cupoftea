import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
    return (
        <div className="Navigation">
            <ul>
                <NavLink 
                to="/" 
                className={(nav) => (nav.isActive ? "nav-active" : "")}>
                    <li>HOME</li>
                </NavLink>
                <NavLink to="/descrition"
                 className={(nav) => (nav.isActive ? "nav-active" : "")}>
                    <li>Description</li>
                </NavLink>
            </ul>
        </div>
    );
};

export default Nav;