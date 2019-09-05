import { connect } from "react-redux";
import { Product } from "./Product";
import { ActionType } from "../../actionTypes";
import { ILineItem } from "../../models/LineItem";

const mapDispatchToProps = (dispatch: any) => ({
    addToCart(productId: string, quantity: number) {
        dispatch({
            type: ActionType.ADD_TO_CART,
            payload: {
                productId,
                quantity,
            } as ILineItem
        })
    }
});

export default connect(undefined, mapDispatchToProps)(Product);
