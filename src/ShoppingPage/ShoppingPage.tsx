import React from 'react';

export interface IShoppingPageProps {
    getProducts(): void;
    products: any[];
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
            <ul>
                {products.map(product =>
                    <li key={product.id}>{product.name} {product.price}</li>
                )}
            </ul>
        )
    }
}