console.log('test')

const observable = new rxjs.Observable(subscribe => {
    subscribe.next(1000),
    // time passes
    subscribe.next(2000),
    // ....
    subscribe.complete()
});

const subscriber = observable.subscribe({
    next: (input) => {
        console.log('Recevived change: ', input);
    },
    complete: () => {
        console.log('End!')
    }
})