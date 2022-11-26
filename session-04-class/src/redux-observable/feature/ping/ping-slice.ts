import { createSlice } from "@reduxjs/toolkit";
import { PingPongAction } from "../../interfaces/action.interface";

interface PingInterface {
    isPinging: boolean;
    pongReceived: boolean;
}

const initialState: PingInterface = {
    isPinging: false,
    pongReceived: false
}

const slice = createSlice({
    name: 'ping',
    initialState,
    reducers: {
        ping: (state: PingInterface, action: PingPongAction) => {
            state.isPinging = true;
        },
        pong: (state: PingInterface, action: PingPongAction) => {
            state.pongReceived = true;
        }
    }
})

export default {
    reducers: slice.reducer,
    actions: slice.actions
}