import React from 'react';
import Logo from '../../assets/images/burger-logo.png';
import classes from './Logo.module.css';

export const BurgerLogo = ( props ) => {
    return <img src = { Logo } className = {classes.Logo} />
}