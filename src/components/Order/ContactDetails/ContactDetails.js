import React from 'react';
import classes from './ContactDetails.module.css';
import {Button} from "../../UI/Button/Button";

export const ContactDetails = ( props ) => {
    return (
      <div className = {classes.ContactDetails}>
          <h4>Please fill your contact details : </h4>
          <label htmlFor="emailId">Email ID:</label><br/>
          <input type="text" id="emailId" name="emailId"/><br/>
          <Button type="Success" clicked = {props.placeOrder}>PLACE ORDER</Button>
      </div>
    );
}