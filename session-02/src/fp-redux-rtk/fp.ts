import { wrap } from 'lodash';
import { compose, pipe } from 'lodash/fp'
import { produce } from 'immer'

export function runFP() {
    // composition
    const wrapInDix = (str: string) => `<div>${str}</div>`;
    const trim = (str: string) => str.trim();
    const toLowerCase = (str: string) => str.toLowerCase();

    const input = '         Session 04        ';

    const output = wrapInDix(toLowerCase(trim(input)));

    console.log(output);

    // compose, pipe
    const nc = compose(wrapInDix, toLowerCase, trim);
    console.log(nc(input));

    const np = pipe(trim, toLowerCase, wrapInDix);
    console.log(np(input));

    // currying
    const wrapInSomethign = (type: string, str: string) => `<${type}>${str}</${type}>`;
    const curryWrap = (type: string) => (str: string) => `<${type}>${str}</${type}>`;

    const curry = pipe(trim, toLowerCase, curryWrap('h1'));
    console.log(curry(input));

    // Immutability
    const update = (obj: any) => {
        return produce(obj, (draftObj: any) => {
            draftObj.test = 'fasdfasdf'
        })
    }

    const obj = { name: 'ali' }
    console.log(update(obj))
    console.log(obj)
}