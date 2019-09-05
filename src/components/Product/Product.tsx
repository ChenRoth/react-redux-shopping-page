import React from 'react';
import { IProduct } from '../../models/Product';

export interface IProductProps {
    product: IProduct;
    addToCart(productId: string, quantity: number): void;
}

interface IProductState {
    quantity: number;
}

export class Product extends React.Component<IProductProps, IProductState> {
    state: IProductState = {
        quantity: 0,
    }

    public render() {
        const { product } = this.props;
        const { quantity } = this.state;
        return (
            <div>
                <h6>{product.name}</h6>
                <p>{product.price}</p>
                <div>
                    <button onClick={this.decrementQuantity}>-</button>
                    <span>{quantity}</span>
                    <button onClick={this.increaseQuantity}>+</button>
                </div>
                <button onClick={this.onAddToCartClick}>ADD TO CART</button>
            </div>
        );
    }

    onAddToCartClick = () => {
        const {addToCart, product} = this.props;
        const {quantity} = this.state;
        addToCart(product.id, quantity);
    }

    decrementQuantity = () => {
        this.setState({
            quantity: Math.max(this.state.quantity - 1, 0),
        })
    }

    increaseQuantity = () => {
        this.setState({
            quantity: this.state.quantity + 1,
        })
    }
}