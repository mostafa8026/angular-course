import { delay, filter, map, Observable } from "rxjs"
import pingFeature from './ping-slice'

export const pingEpic = (action$: Observable<any>): Observable<any> => {
    return action$.pipe(
        filter(pingFeature.actions.ping.match),
        delay(5000),
        map(() => {
            return pingFeature.actions.pong();
        })
    )
}