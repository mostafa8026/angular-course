import {configureStore} from "@reduxjs/toolkit";
import {kindFeature} from "../feature/kind/kind-slice";
import {orderFeature} from "../feature/order/order-slice";
import {createLogger} from 'redux-logger'

export const store = configureStore({
    reducer: {
        orders: orderFeature.reducers,
        kinds: kindFeature.reducers
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(createLogger())
});