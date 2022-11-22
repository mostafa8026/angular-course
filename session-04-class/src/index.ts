import {store} from './rtk/app/store'
import { kindFeature } from './rtk/feature/kind/kind-slice';
import { orderFeature } from './rtk/feature/order/order-slice'

store.subscribe(()=>{
    // console.log(store.getState());
})

store.dispatch(kindFeature.initStore());

store.dispatch(kindFeature.actions.storeAdded({
    kind: {
        id: 1,
        name: 'kind 1'
    },
    quantity: 50
}))

store.dispatch(kindFeature.actions.storeRemoved({
    kind: {
        id: 1,
        name: 'kind 1'
    },
    quantity: 4
}))

store.dispatch(orderFeature.actions.orderAdded({
    id: 1,
    items: [
        {kindId: 1, quantity: 5, price: 5000}
    ],
    userId: 1
}))
