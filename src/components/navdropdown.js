import React from "react";
import '../styles/navdropdown.css';

function DropdownMenu () {
    function DropdownItem(props) {
        return (
            <a href="#" className="menu-item">
                <span className="icon-button">{props.leftIcon}</span>

                {props.text}

                <span className="icon-right">{props.rightIcon}</span>
            </a>
        );
    }

    return (
        <div className="dropdown">
            <DropdownItem text="About me" />
            <DropdownItem text="Projects" />

        </div>
    );
}

export default DropdownMenu;