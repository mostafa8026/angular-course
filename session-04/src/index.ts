import { orderFeature } from "./app/features/order/order-slicer";
import { store } from "./app/store";

store.subscribe(()=>{
    console.log(store.getState())
})
store.dispatch(orderFeature.orderActions.orderAdded(1));