import {createSlice} from '@reduxjs/toolkit'

export interface OrderItemInterface {
    kindId: number;
    quantity: number;
    price: number;
}

export interface OrderInterface {
    id: number;
    userId: number;
    items: OrderItemInterface[];
}

export interface OrdersInterface {
    orders: OrderInterface[]
}

const initialState: OrdersInterface = {
    orders: []
}

const slice = createSlice({
    name: 'order',
    initialState,
    reducers: {
        // order/orderAdded
        orderAdded: (state, action: {
            payload: OrderInterface,
            type: string
        }) =>{
            state.orders.push(action.payload);
        }
    }
})

export const orderFeature = {
    reducers: slice.reducer,
    actions: slice.actions
}