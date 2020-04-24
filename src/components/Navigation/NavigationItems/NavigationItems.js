import React from 'react';
import classes from './NavigationItems.module.css';
import { NavigationItem } from './NavigationItem/NavigationItem';

export const NavigationItems = ( props ) => {
    return (
        <ul className={classes.NavigationItems}>
            <NavigationItem link = "/" active = {true}>Burger Builder </NavigationItem>
            <NavigationItem link = "/checkout" active = {false}> Orders </NavigationItem>
        </ul>
    );
}