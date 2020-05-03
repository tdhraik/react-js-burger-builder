import React from 'react';

import {Button} from "../UI/Button/Button";

export const OrderSummary = ( props ) => {

    let ingredientsSummary = Object.keys( props.ingredients )
        .map( ingKey => {
                return <li key={ingKey}>{ingKey} : {props.ingredients[ingKey]}</li>
            });
    return (
        <div>
            <p> Please review your order : </p>
            <ul>
                {ingredientsSummary}
            </ul>
            <p> Total Price : <strong>${props.totalPrice.toFixed(2)}</strong> </p>
            <Button clicked={props.cancelOrder} type="Danger">CANCEL</Button>
            <Button clicked={props.confirmOrder} type="Success">CONFIRM</Button>
        </div>
    );
}
