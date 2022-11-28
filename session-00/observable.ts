import { Observable, Subscriber } from 'rxjs'

const obs = new Observable(subscriber => {
    subscriber.next(5),
        subscriber.complete()
})

obs.subscribe({
    next(x) {
        console.log('next: ', x)
    },
    complete() {
        console.log('completed!')
    }
})