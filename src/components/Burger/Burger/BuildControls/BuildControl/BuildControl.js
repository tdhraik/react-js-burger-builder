import React from 'react';
import classes from './BuildControl.module.css';

export const buildControl = ( props ) => (
    <div className={classes.BuildControl}>
        <div className={classes.Label}>{ props.label }</div>
        <button
            className={classes.More}
            onClick={props.addIngredient}>
            More
        </button>
        <button
            className={classes.Less}
            onClick={props.removeIngredient}>
            Less
        </button>
    </div>
)
