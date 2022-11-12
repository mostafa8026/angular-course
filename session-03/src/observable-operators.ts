import { from, pipe, map, tap, Observable, filter, timeout, throwError } from "rxjs";

export function runCreation() {

    const arr = [1, 2, 3, 4];

    // creation
    const arrObservable = from(arr);

    arrObservable.subscribe({
        next: (input) => {
            console.log(`Recevied: ${input}`);
        },
        complete: () => {
            console.log('Completed!')
        }
    });
}

export function runPipe() {
    const arr = [1, 2, 3, 4];

    // creation
    const arrObservable =
        from(arr).pipe(
            map(input => {
                return input + 5;
            }),
            tap(input=>{
                console.log(`after mapping the input is: ${input}`);
            }),
            filter(input => {
                if(input === 8) {
                    return throwError(()=>{
                        new Error('Exception, you send 8');
                    })
                }
                return input > 7;
            }));



    arrObservable.subscribe({
        next: (input) => {
            console.log(`Received: ${input}`);
        },
        complete: () => {
            console.log('Completed!')
        },
        error: (err) => {
            console.error(`An error occured, `, err);
        }
    });
}