import React, { Component } from 'react';
import {ContactDetails} from "../../components/Order/ContactDetails/ContactDetails";

export class Contact extends Component {

    placeOrder = () => {
        console.log("placed!!!");
    }

    render() {
        return (
            <ContactDetails placeOrder = {this.placeOrder} />
        )
    }
}