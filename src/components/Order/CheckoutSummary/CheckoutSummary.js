import React from 'react';
import {Button} from "../../UI/Button/Button";
import {Burger} from "../../Burger/Burger/Burger";
import classes from './CheckoutSummary.module.css';

export const CheckoutSummary = ( props ) => {
    return (
      <div className={classes.CheckoutSummary}>
          <h1> We hope it tastes well!</h1>
          <div style={{width: '420px', height: '300px', margin: 'auto'}}>
              <Burger ingredients = {props.ingredients} />
          </div>
          <Button
              type = "Danger"
              clicked = { props.cancel} >CANCEL
          </Button>
          <Button
              type="Success"
              clicked = { props.continue }>CONTINUE
          </Button>
      </div>
    );
}