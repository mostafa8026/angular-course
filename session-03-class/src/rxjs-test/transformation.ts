import { concatMap, of, delay, mergeMap, tap, fromEvent, switchMap, interval } from 'rxjs';

export function runConcatMap() {
    console.log('run')
    // concat 
    const source = of(5000, 1000)
    const observable = source.pipe(
        concatMap(data => of(`delay with concatMap the ${data}`).pipe(
            tap(data => {
                console.log(new Date().toTimeString())
                console.time(data);
            }),
            delay(data)
        ))
    )
    observable.subscribe({
        next(data) {
            console.timeEnd(data);
            console.log(new Date().toTimeString())
        }
    })
}

export function runMergeMap() {
    const source = of(5000, 3000)
    const mergeMapExample = source
        .pipe(
            // just so we can log this after the first example has run
            mergeMap(val => of(`Delayed by: ${val}ms`).pipe(
                tap(data => {
                    console.log(new Date().toTimeString())
                    console.time(data);
                }),
                delay(val)
            ))
        )
        .subscribe({
            next(val) {
                console.timeEnd(val);
                console.log(new Date().toTimeString())

            },
            complete() {
                console.log('the merge map is completed')
            }
        });
}

export function runSwitchMap() {
    const clicks = fromEvent(document, 'click');
    clicks.subscribe({
        next() {
            console.log('new clicked !')
        }
    })
    const result = clicks.pipe(switchMap(() => interval(1000)));

    result.subscribe({
        next(val) {
            console.log(val)
        }
    })
}