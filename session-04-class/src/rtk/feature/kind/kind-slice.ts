import {createSlice} from "@reduxjs/toolkit";
import {orderFeature, OrderInterface, OrderItemInterface} from "../order/order-slice";
import {actions} from "../../../redux/store";
import {ajax} from "rxjs/ajax";

export interface KindInterface {
    id: number;
    name: string;
}

export interface StoreItemInterface {
    kind: KindInterface;
    quantity: number;
}

export interface StoreInterface {
    kinds: StoreItemInterface[];
}

const initialState: StoreInterface = {
    kinds: []
}

function removeFromStore(state: StoreInterface, action: { type: string, payload: StoreItemInterface }) {

    state.kinds.map(kind => {
        if (kind.kind.id === action.payload.kind.id) {
            kind.quantity = kind.quantity - action.payload.quantity
        } else {
            throw Error
            "not enough this kind in the store"
        }
    })
}

const slice = createSlice({
    name: 'store',
    initialState,
    reducers: {
        storeAdded: (state, action: {
            payload: StoreItemInterface,
            type: string
        }) => {
            const item = state.kinds.find(item => item.kind.id === action.payload.kind.id);
            if (item) {
                item.quantity += action.payload.quantity;
            } else {
                state.kinds.push(action.payload);
            }
        },
        storeRemoved: (state, action: {
            payload: StoreItemInterface,
            type: string
        }) => {


            removeFromStore(state, action)

        }
    },
    extraReducers: builder => {
        builder.addCase(orderFeature.actions.orderAdded, (state, action: {
                payload: OrderInterface,
                type: string
            }) => {
                action.payload.items.map(item => {
                        state.kinds.map(kind => {
                            if (kind.kind.id == item.kindId) {

                              kind.quantity = kind.quantity - item.quantity
                            }
                            else {
                                throw Error('this kind is not enough in store')
                            }

                        })
                    }
                )
            }
        )
    }
})

export const kindFeature = {
    reducers: slice.reducer,
    actions: slice.actions
}