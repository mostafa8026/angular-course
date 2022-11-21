import produce from "immer";
import { OrderActionInterface } from "../actions/actions";
import { ORDER_ADDED } from "../actions/constants/action-types";
import { OrderInterce, StoreInterce } from "../store";

export const orderReducer = (state: OrderInterce = {
    orders: []
}, action: OrderActionInterface) => {
    switch (action.type) {
        case ORDER_ADDED:
            return produce(state, (draftState: StoreInterce) => {
                draftState.orders.push(action.payload);
            });
        default:
            return state;
    }
}