import React from 'react';
import classes from './BuildControls.module.css';
import { buildControl as BuildControl } from "./BuildControl/BuildControl";
import Aux from "../../../../hoc/Aux";
import {Button} from "../../../UI/Button/Button";

export const buildControls = ( props ) => {

    const ingredients = [
        {label: "MEAT", type: "meat"},
        {label: "SALAD", type: "salad"},
        {label: "CHEESE", type: "cheese"}
    ];

    let buildControllers = [];
    ingredients.map( ing =>
        buildControllers.push(
            <BuildControl
                label = { ing.label }
                addIngredient = {() => props.addIngredient(ing.type)}
                removeIngredient = {() => props.removeIngredient(ing.type)}/>
        )
    );

    return (
        <Aux>
            <div className= {classes.BuildControls}>
                {buildControllers}
                <Button
                    disabled={!props.purchasable}
                    clicked={props.orderHandler}
                    type = "Success"> ORDER NOW </Button>
            </div>
        </Aux>
    );
}