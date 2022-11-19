import { orderAdded } from './actions/actions';
import {store, actions} from './store';

console.log(store.getState());

console.log(actions);
actions.orderAdded(1);
actions.kindAdded("kind 1");

const unsubscribe = store.subscribe(() => {
    console.log('New Event ',store.getState(), store.getState());
})

actions.orderAdded(2);
actions.kindAdded("kind 2");

actions.orderAdded(3);
actions.kindAdded("kind 3");
//store.dispatch(orderAdded(3));

// To prevent memory leak
unsubscribe();