import React from 'react';
import classes from './BurgerIngredient.module.css';

export const BurgerIngredient = ( props ) => {

    let ingredient = null;

    switch(props.type) {
        case ('meat') :
            ingredient = <div className = {classes.Meat} />;
            break;
        case ('bread-top') :
            ingredient = <div className = {classes.BreadTop} />;
            break;
        case ('bread-bottom') :
            ingredient = <div className = {classes.BreadBottom} />;
            break;
        case ('cheese') :
            ingredient = <div className = {classes.Cheese} />;
            break;
        case ('salad') :
            ingredient = <div className = {classes.Salad} />;
            break;
        default :
            ingredient = null;
    }

    return ingredient;
}