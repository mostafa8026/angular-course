import produce from "immer";
import { KindActionInterface, OrderActionInterface } from "../actions/actions";
import { KIND_ADDED } from "../actions/constants/action-types";
import { KindInterface } from "../store";

export const kindReducer = (state: KindInterface = {
    kinds: []
}, action: KindActionInterface): KindInterface => {
    switch (action.type) {
        case KIND_ADDED:
            return produce(state, (draftKind: KindInterface) => {
                draftKind.kinds.push(action.payload);
            });
        default:
            return state;
    }
}