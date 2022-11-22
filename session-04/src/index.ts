import { orderFeature } from "./app/features/order/order-slicer";
import { fetchUserInfo, userFeature } from "./app/features/user/user-slice";
import { store } from "./app/store";

store.subscribe(()=>{
    console.log(store.getState())
})
store.dispatch(orderFeature.orderActions.orderAdded(1));

store.dispatch(fetchUserInfo(45))