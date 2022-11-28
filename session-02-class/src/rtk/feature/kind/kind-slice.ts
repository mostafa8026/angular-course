import {createSlice, createAsyncThunk, Store} from "@reduxjs/toolkit";
import {orderFeature, OrderInterface, OrderItemInterface} from "../order/order-slice";

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

//this function has changed beacause should use in diffrent reducers
function removeFromStore(state: StoreInterface, action: { type?: string, payload: any | StoreItemInterface | OrderInterface }) {
    if (action.payload.items) {
        action.payload.items.map((item: { kindId: number; quantity: number; }) => {
                state.kinds.map(kind => {
                    if (kind.kind.id == item.kindId) {

                        kind.quantity = kind.quantity - item.quantity
                    } else {
                        throw Error('this kind is not enough in store')
                    }

                })
            }
        )
    }
    if (action.payload.kind) {
        state.kinds.map(kind => {
            if (kind.kind.id === action.payload.kind.id) {
                kind.quantity = kind.quantity - action.payload.quantity
            } else {
                throw Error
                "not enough this kind in the store"
            }
        })
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
            removeFromStore(state, action)
        }
    },
    extraReducers: builder => {
        builder.addCase(orderFeature.actions.orderAdded, (state, action: {
                payload: OrderInterface,
                type: string
            }) => {
                //in this space used the function for remove the kinds in orderAdded action based on the reviewer commnets in the reviewing the pull request
                removeFromStore(state, action)
            }
        );
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