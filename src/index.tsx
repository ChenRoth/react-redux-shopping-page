import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { string, number } from 'prop-types';
import { IProduct } from './models/Product';

export interface IState {
    isLoading: boolean;
    products: IProduct[];
}

const reducer = (state: IState = {isLoading: false, products: []}, action: any) => {
    switch (action.type) {
        case 'GET_PRODUCTS_START': {
            return {
                ...state,
                isLoading: true
            };
        }
        case 'GET_PRODUCTS_COMPLETE': {
            return {
                ...state,
                isLoading: false,
                products: action.payload.products,
            };
        }
        default: { 
            return state;
        }
    }
};


const store = createStore(reducer, composeWithDevTools(
    applyMiddleware(logger, thunkMiddleware),
  ));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
