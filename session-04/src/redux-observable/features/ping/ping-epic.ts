import { Observable } from "rxjs";
import { filter, map, tap } from "rxjs/operators";
import { pingFeature } from "./ping-slice";

export const pingEpic = (action$: Observable<any>) => action$.pipe(
    // tap((data)=>{
    //     console.log('Tapping', data)
    // }),
    filter(pingFeature.actions.ping.match),
    map(() => pingFeature.actions.pong())
);
