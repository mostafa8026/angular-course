import { configureStore } from "@reduxjs/toolkit";
import { orderFeature } from "./features/order/order-slicer";
import {createLogger} from 'redux-logger'
import { create } from "lodash";
import { userFeature } from "./features/user/user-slice";

export const store = configureStore({
    reducer: {
        order: orderFeature.orderReducer,
        user: userFeature.reducer
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(createLogger())
});