import { store } from "./store";
import pingFeature from './feature/ping/ping-slice'

export function run (){
    console.log('Dispatching ping')
    store.dispatch(pingFeature.actions.ping())
}