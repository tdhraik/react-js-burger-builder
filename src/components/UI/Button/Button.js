import React from 'react';

import classes from './Button.module.css';

export const Button = ( props ) => {
    let buttonStyle = [classes.Button];
    if(props.type === "Success") {
        buttonStyle.push(classes.Success);
    } else if(props.type === "Danger") {
        buttonStyle.push(classes.Danger);
    }
    return (
        <button className={buttonStyle.join(' ')}
                onClick={props.clicked}
                disabled={props.disabled}>
            {props.children}
        </button>
    );
}