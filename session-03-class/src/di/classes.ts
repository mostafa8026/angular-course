import { inject, injectable } from "inversify";
import { Driver, Lawyer, Navigator } from "./interfaces";
import types from './inversify/types'

@injectable()
export class SnappDriver implements Driver {
    constructor(@inject(types.navigator) private navigator: Navigator){}

    name = 'Snapp'
    drive(start:string, end:string): string {
        return `Driving by ${this.name}, ${this.navigator.navigate(start, end)}`;
    }
}

@injectable()
export class TapsiDriver implements Driver {
    constructor(@inject(types.navigator) private navigator: Navigator){}

    name = 'Tap30'
    drive(start:string, end:string): string {
        return `Driving by ${this.name}, ${this.navigator.navigate(start, end)}`;
    }
}

@injectable()
export class NeshanNavigator implements Navigator {
    navigate(start: string, end: string): string {
        return `Navigating from ${start} to ${end} by neshan`
    }
}

@injectable()
export class BaladNavigator implements Navigator {
    navigate(start: string, end: string): string {
        return `Navigating from ${start} to ${end} by balad`
    }
}

@injectable()
export class MarriageLawyer implements Lawyer {
    constructor(@inject(types.driver) private driver: Driver) {}

    goToCourt(end: string): void {
        console.log(`Marriage Lawyer going to court, ${this.driver.drive('here', end)}`)
    }
}