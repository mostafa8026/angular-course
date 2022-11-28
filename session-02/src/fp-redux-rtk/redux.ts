import { bind } from 'lodash';
import {createStore, bindActionCreators} from 'redux'

function somthingPushed(theThing: string) {
    return {
        type: 'push',
        payload: {
            name: theThing
        }
    }
}

function reducer(store: any = [], action: any){
    
    switch(action.type){
        case 'push':
            return [...store, action.payload];
    }

    return store;
}

export function runRedux() {
    console.log('Hey, redux')

    const store = createStore(reducer);
    store.subscribe(()=>{
        console.log('oh, something happened! my new state is: ', store.getState());
    })
    const actions = bindActionCreators({somthingPushed}, store.dispatch);

    actions.somthingPushed('1');

    console.log('State: ', store.getState());
}