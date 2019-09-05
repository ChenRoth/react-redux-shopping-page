import { IProduct } from "./Product";

export interface ILineItem {
    product: IProduct;
    quantity: number;
}