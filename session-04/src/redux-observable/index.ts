import { pingEpic } from "./features/ping/ping-epic"
import { pingFeature } from "./features/ping/ping-slice"
import { store } from "./store"

export function run(){
    console.log('Redux Observable...')
    store.subscribe(() => {
        console.log(store.getState())
    })
    console.log('Subscribed!')
    store.dispatch(pingFeature.actions.ping());
    console.log('Dispatched!!')
}