import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import pingFeature from './feature/ping/ping-slice'
import {logger} from 'redux-logger'
import { createEpicMiddleware } from "redux-observable";
import { pingEpic } from "./feature/ping/ping-epic";

const epicMiddleware = createEpicMiddleware();

const store = configureStore({
    reducer: pingFeature.reducers,
    middleware: getDefaultMiddleware=> getDefaultMiddleware().concat(logger, epicMiddleware)
})

epicMiddleware.run(pingEpic);

export {store};