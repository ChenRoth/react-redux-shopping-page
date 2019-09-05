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
import { ILineItem } from './models/LineItem';
import { ActionType } from './actionTypes';



export interface IState {
    isLoading: boolean;
    products: IProduct[];
    cart: ILineItem[];
}

const initialState: IState = {
    isLoading: false,
    products: [],
    cart: [],
}

const reducer = (state: IState = initialState, action: any) => {
    switch (action.type) {
        case ActionType.GET_PRODUCTS_START: {
            return {
                ...state,
                isLoading: true
            };
        }
        case ActionType.GET_PRODUCTS_COMPLETE: {
            return {
                ...state,
                isLoading: false,
                products: action.payload.products,
            };
        }
        case ActionType.ADD_TO_CART: {
            const item: ILineItem = action.payload;
            return {
                ...state,
                cart: state.cart.concat(item)
            }
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
