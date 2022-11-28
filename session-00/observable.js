"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rxjs_1 = require("rxjs");
const obs = new rxjs_1.Observable(subscriber => {
    subscriber.next(5),
        subscriber.complete();
});
obs.subscribe({
    next(x) {
        console.log('next: ', x);
    },
    complete() {
        console.log('completed!');
    }
});
