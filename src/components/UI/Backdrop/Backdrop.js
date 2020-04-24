import React from 'react';
import classes from './Backdrop.module.css';

export const Backdrop= ( props ) => {
    // let backDropDiv = <div/>;
    // if(props.show) {
    //     backDropDiv = <div className={classes.Backdrop} onClick={props.cancelOrder} />;
    // }
    // return (
    //     <div>
    //         {backDropDiv}
    //     </div>
    // );

    return props.show
        ? <div className={classes.Backdrop} onClick={props.cancelOrder} />
        : null;

};