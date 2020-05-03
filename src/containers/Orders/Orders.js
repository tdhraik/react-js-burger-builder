import React, { Component } from React;
import axios from 'axios';

export class Orders extends Component {

    state = {
        orders : null
    }

    constructor( props ) {
        super(props);
        axios.get("https://burger-rampur-bsr.firebaseio.com/orders.json")
            .then(response => {
                console.log(response);
            });
    }

    render() {
        return (
            <div> ORDERS PAGE </div>
        )
    }
}