import { KIND_ADDED, ORDER_ADDED } from "../constants/action-types"
import {bindActionCreators} from 'redux'

export interface OrderActionInterface {
    type: string,
    payload: Record<string, any>
}

export interface KindActionInterface {
    type: string,
    payload: string,
}

// action creators
export const orderAdded = (orderId: number) => {
    return {
        type: ORDER_ADDED,
        payload: {
            orderId
        }
    }
}

export const kindAdded = (name: string) => {
    return {
        type: KIND_ADDED,
        payload: name
    }
}