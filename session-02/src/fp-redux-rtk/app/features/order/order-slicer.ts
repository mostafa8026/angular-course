import { createSlice } from "@reduxjs/toolkit";

export interface OrderInterface {
    orders: Record<string, any>[];
}

const initialState: OrderInterface = {
    orders: []
}

const orderSlice = createSlice({
    name: 'orders',
    initialState,
    reducers: {
        orderAdded: (state, action) => {
            state.orders.push(action.payload);
        }
    }
})

export const orderFeature = {
    orderReducer: orderSlice.reducer,
    orderActions: orderSlice.actions
}