import React, {Component} from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router';
import './App.css';

import { Layout } from './components/Layout/Layout'
import { BurgerBuilder } from "./containers/BurgerBuilder/BurgerBuilder";
import {Checkout} from "./containers/Checkout/Checkout";
import {Contact} from "./containers/Contact/Contact";

class App extends Component {
  render() {
      return (
          <BrowserRouter>
              <div>
                  <Layout>
                      <Route path="/checkout" exact component = { Checkout } />
                      <Route path="/contact" exact component = { Contact } />
                      <Route path="/" exact component = { BurgerBuilder } />
                  </Layout>
              </div>
          </BrowserRouter>
      );
  }
}

export default App;
