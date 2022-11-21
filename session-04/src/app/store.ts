import { configureStore } from "@reduxjs/toolkit";
import { orderFeature } from "./features/order/order-slicer";
import {createLogger} from 'redux-logger'
import { create } from "lodash";

export const store = configureStore({
    reducer: orderFeature.orderReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(createLogger())
})