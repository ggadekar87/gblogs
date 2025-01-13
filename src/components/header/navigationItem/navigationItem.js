import React from "react";
import { NavLink } from "react-router-dom";
import "./navigationItem.css";
const NavigationItem = (props) => (
    <li className="NavigationItem" onClick={props.close} >
        <NavLink
            to={props.link}
            exact={props.exact}
            activeClassName="active"
        >
            {props.children}
        </NavLink>
    </li>
);

export default NavigationItem;
