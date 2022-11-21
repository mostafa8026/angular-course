import { createSlice, createAsyncThunk, Store } from "@reduxjs/toolkit";
import { orderFeature, OrderInterface, OrderItemInterface } from "../order/order-slice";

export interface KindInterface {
    id: number;
    name: string;
}

export interface StoreItemInterface {
    kind: KindInterface;
    quantity: number;
}

export interface StoreInterface {
    loading?: boolean;
    kinds: StoreItemInterface[];
    error?: string;
}

const initialState: StoreInterface = {
    loading: false,
    kinds: [],
    error: ''
}

const initStore = createAsyncThunk('store/fetch', () => {
    // todo: check why we can't return it directly
    const promise = new Promise((resolve, rejct) => {
        setTimeout(() => {
            resolve(<StoreItemInterface[]>[{
                kind: {
                    id: 1,
                    name: 'kind 1'
                },
                quantity: 50
            }])
        }, 5000);
    });

    return promise;
})

function removeFromStore(kinds: StoreItemInterface[], storeItem: StoreItemInterface) {
    const item = kinds.find(item => item.kind.id === item.kind.id);
    if (storeItem) {
        if (storeItem.quantity < storeItem.quantity) {
            throw new Error("Quantity is higer than the item count");
        }
        storeItem.quantity -= storeItem.quantity;
    } else {
        throw new Error("We don't have this item")
    }
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
            removeFromStore(state.kinds, action.payload);
        }
    },
    extraReducers: builder => {
        builder.addCase(orderFeature.actions.orderAdded, (state, action: {
            payload: OrderInterface,
            type: string
        }) => {
            action.payload.items.map(orderItem => {
                const kind = state.kinds.find(item => item.kind.id === orderItem.kindId);
                if (!kind) {
                    throw new Error("Kind not found");
                }
                removeFromStore(state.kinds, {
                    kind: kind?.kind,
                    quantity: orderItem.quantity
                })
            })
        });
        builder.addCase(initStore.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(initStore.fulfilled, (state, action) => {
            state.loading = false;
            state.kinds = action.payload as StoreItemInterface[];
        });
    }
})

export const kindFeature = {
    reducers: slice.reducer,
    actions: slice.actions,
    initStore
}