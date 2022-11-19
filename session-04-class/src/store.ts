import { create, reduce } from 'lodash'
import { createStore, bindActionCreators, combineReducers, applyMiddleware } from 'redux'
import { kindAdded, orderAdded } from './actions/actions';
import { kindReducer } from './reducers/kind-reducer';
import { orderReducer } from './reducers/order-reducer';
import {createLogger} from 'redux-logger'

export interface OrderInterce {
    orders: { [key: string]: any }
}

export interface KindInterface {
    kinds: string[];
}

export interface StoreInterce extends OrderInterce, KindInterface { }

const reducer = combineReducers({
    orderState: orderReducer,
    kindState: kindReducer, 
});

const logger = createLogger();
const store = createStore(reducer, applyMiddleware(logger));

const actions = bindActionCreators({ orderAdded, kindAdded }, store.dispatch);

export { store, actions };