import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { createEpicMiddleware } from "redux-observable";
import { pingEpic } from "./features/ping/ping-epic";
import { pingFeature } from "./features/ping/ping-slice";
import { createLogger } from 'redux-logger'

const epicMiddleware = createEpicMiddleware();

const store = configureStore({
    reducer: pingFeature.reducers,
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(epicMiddleware, createLogger()),
})

epicMiddleware.run(pingEpic);

export { store }