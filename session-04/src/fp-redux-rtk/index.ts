import produce from "immer";
import { orderFeature } from "./app/features/order/order-slicer";
import { fetchUserInfo, userFeature } from "./app/features/user/user-slice";
import { store } from "./app/store";
import * as _ from 'lodash'

const x = { a: { a: 1 } }
const y = { a: { b: 1 } }
const z = { ...x, ...y }
console.log(z)
console.log(_.merge(x, y))

const option:{
    test: any
} = {test: 0}

const n = produce(option, draft => {
    draft.test = draft.test || {
        ali: 50
    }
})

console.log('before', option)
console.log('after', n)

// store.subscribe(()=>{
//     console.log(store.getState())
// })
// store.dispatch(orderFeature.orderActions.orderAdded(1));

// store.dispatch(fetchUserInfo(45))