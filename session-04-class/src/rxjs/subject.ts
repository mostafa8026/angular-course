import { BehaviorSubject, Subject } from 'rxjs';

const subject = new Subject();

subject.subscribe({
    next: (data) => {
        console.log(data)
    }
})

subject.next(1);
subject.next(2);

console.log('init')

const observable = subject.asObservable();

export {observable}