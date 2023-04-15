import React from "react";
import '../styles/navitems.css';
import { useState } from "react";


function NavItem(props) {
    const [open, setOpen] = useState(false);

    return (
        <li className="nav-item">
            <a className="menu-btn" onClick={() => setOpen(!open)}>
                {props.icon}
            </a>

            {open && props.children}
        </li>
        );
    }



export default NavItem;