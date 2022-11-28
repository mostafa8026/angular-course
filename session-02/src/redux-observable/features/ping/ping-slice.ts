import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    pingCount: 0,
    pongCount: 0
}

const slice = createSlice({
    name: 'ping',
    initialState,
    reducers: {
        ping: (state: any) => {
            console.log('ping');
            state.pingCount++;
        },
        pong: (state: any) => {
            console.log('pong');
            state.pongCount++;
        }
    }
});

export const pingFeature = {
    reducers: slice.reducer,
    actions: slice.actions
}