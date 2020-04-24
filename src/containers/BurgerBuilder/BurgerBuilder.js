import React, { Component } from 'react';
import axios from 'axios';

import {Burger} from "../../components/Burger/Burger/Burger";
import { buildControls as BuildControls } from "../../components/Burger/Burger/BuildControls/BuildControls";
import {OrderSummary} from "../../components/Order/OrderSummary";
import {Modal} from "../../components/UI/Modal/Modal";

const INGREDIENTS_PRICE = {
    meat: 3.3,
    cheese: 2.2,
    salad: 1.1
}

export class BurgerBuilder extends Component {

    state = {
        totalPrice: 4.0,
        purchasable: false,
        showSummary: false
    };

    setStateToDefault = () => {
        this.setState({
            ingredients: {
                meat:0,
                cheese: 0,
                salad: 0
            },
            totalPrice: 4.0,
            purchasable: false,
            showSummary: false});
    }

    componentDidMount() {
        axios.get("https://burger-rampur-bsr.firebaseio.com/ingredients.json")
            .then(response => {
                this.setState({
                    ...this.state,
                    ingredients : response.data
                })
            });
    }


    updatePurchasable = (ingredients) => {
        let sum = Object.keys(ingredients)
            .map(ing => ingredients[ing])
            .reduce((ingredient, el) => {
                return ingredient + el;
            }, 0);
        this.setState({
            ingredients: ingredients,
            purchasable: sum > 0
        });
    }

    addIngredientToBurger = (type) => {
        let oldCount = this.state.ingredients[type];
        const upgradedIngredient = {
            ...this.state.ingredients
        };
        upgradedIngredient[type] = oldCount + 1;
        let updatedPrice = this.state.totalPrice + INGREDIENTS_PRICE[type];
        this.setState({
            totalPrice: updatedPrice,
            ingredients: upgradedIngredient
        });
        this.updatePurchasable(upgradedIngredient);
    }

    removeIngredientFromBurger = (type) => {
        let oldCount = this.state.ingredients[type];
        if( oldCount < 1 ) {
            return;
        }
        const upgradedIngredient = {
            ...this.state.ingredients
        };
        upgradedIngredient[type] = oldCount - 1;
        let updatedPrice = this.state.totalPrice - INGREDIENTS_PRICE[type];
        this.setState({
            totalPrice: updatedPrice,
            ingredients: upgradedIngredient
        });
        this.updatePurchasable(upgradedIngredient);
    }

    orderHandler = () => {
        this.setState({showSummary : true});
    }

    confirmOrderHandler = () => {
        /**
         * the issue is that BurgerBuilder component is routed through <Route> and not its child components,
         * so the child components will not have the route or history information. But using withRouter from
         * react-router-dom we can push the history object to Burger component (which is a child component
         * to BurgerBuilder) as well !!!
         */
        //this.props.history.push("/checkout"); // can do it using withRouter too...

        const queryParams = [];
        for(let i in this.state.ingredients) {
            queryParams.push(encodeURIComponent(i) + "=" + encodeURIComponent(this.state.ingredients[i]));
        }
        const queryString = queryParams.join('&');
        this.props.history.push({
           pathname: '/checkout',
           search: '?' + queryString
        });
    }

    submitBurgerOrder = () => {
        let order = {
            ingredients : this.state.ingredients,
            price: this.state.totalPrice.toFixed(2)
        };
        axios.post("https://burger-rampur-bsr.firebaseio.com/orders.json", order)
            .then(response => {
                console.log(response);
                this.setStateToDefault();
            });
    }

    cancelOrderHandler = () => {
        this.setState({showSummary : false});
    }

    render() {
        if(this.state.ingredients) {
            return (
                <div>
                    <Burger ingredients={this.state.ingredients}/>
                    <Modal show={this.state.showSummary} cancelOrder={this.cancelOrderHandler}>
                        <OrderSummary
                            ingredients={this.state.ingredients}
                            totalPrice={this.state.totalPrice}
                            confirmOrder={this.confirmOrderHandler}
                            cancelOrder={this.cancelOrderHandler}/>
                    </Modal>
                    <p style={{'text-align': 'center'}}> Total Price :
                        <strong> ${this.state.totalPrice.toFixed(2)} </strong>
                    </p>
                    <BuildControls
                        addIngredient={this.addIngredientToBurger}
                        removeIngredient={this.removeIngredientFromBurger}
                        purchasable={this.state.purchasable}
                        orderHandler={this.orderHandler}
                    />
                </div>
            );
        } else {
            return null;
        }
    }
}
