import React, { Component } from 'react';
import {CheckoutSummary} from "../../components/Order/CheckoutSummary/CheckoutSummary";


export class Checkout extends Component {

    state = {
        ingredients: {
            'salad': 2,
            'meat': 0,
            'cheese': 1
        }
    }

    componentDidMount = () => {
        const query = new URLSearchParams(this.props.location.search);
        const ingredients = {};
        for(let param of query.entries()) {
            // entries would be like ['salad', '1']
            ingredients[param[0]] = +param[1];
        }
        this.setState({
            ingredients: ingredients
        })
    }

    cancelOrder = () => {
        this.props.history.push("/");
    }

    continue = () => {
        this.props.history.push("/contact");
    }

    render() {
        return (
            <div>
                <CheckoutSummary
                    ingredients={this.state.ingredients}
                    cancel = {this.cancelOrder}
                    continue = {this.continue} />
            </div>
        )
    }
}