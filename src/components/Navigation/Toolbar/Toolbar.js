import React from 'react';

import classes from './Toolbar.module.css';
import { BurgerLogo } from "../../Logo/Logo";
import { NavigationItems } from "../NavigationItems/NavigationItems";

export const Toolbar = ( props ) => {
    return (
        <header className={classes.Toolbar}>
            <BurgerLogo />
            <NavigationItems />
        </header>
    );
}