import React from 'react';
import { IProduct } from '../../models/Product';
import Product from '../Product';

export interface IShoppingPageProps {
    getProducts(): void;
    products: IProduct[];
    isLoading: boolean;
}

export class ShoppingPage extends React.Component<IShoppingPageProps> {
    componentDidMount() {
        const { getProducts } = this.props;
        getProducts();
    }

    public render() {
        const { isLoading, products } = this.props;
        if (isLoading) {
            return <div>Loading products, please wait...</div>
        }
        return (
            products.map(product =>
                <Product key={product.id} product={product} />
            )
        )
    }
}