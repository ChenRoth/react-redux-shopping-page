import { connect } from "react-redux";
import { ShoppingPage } from "./ShoppingPage";
import { IState } from "..";
import { IProduct } from "../models/Product";

const mapStateToProps = (state: IState) => ({
    isLoading: state.isLoading,
    products: state.products,
});

const mapDispatchToProps = (dispatch: any) => ({
    getProducts: () => {
        dispatch({
            type: 'GET_PRODUCTS_START'
        });

        // this simulates a fetch call to an API
        setTimeout(() => {
            dispatch({
                type: 'GET_PRODUCTS_COMPLETE',
                payload: {
                    products: [
                        {id: '1', price: 5, name: 'basketball'},
                        {id: '2', price: 3, name: 'fishing net'},
                        {id: '3', price: 500, name: 'scuba gear'},
                    ] as IProduct[]
                }
            })
        }, 2000);
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingPage);
