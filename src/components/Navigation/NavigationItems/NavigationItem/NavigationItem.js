import React from 'react';
import classes from './NavigationItem.module.css';
import { NavLink }  from "react-router-dom";

export const NavigationItem = ( props ) => {
    return (
        <li className={classes.NavigationItem}>
            <NavLink to = {props.link}
               active = {props.active}
                exact>
                {props.children}
            </NavLink>
        </li>
    );
}