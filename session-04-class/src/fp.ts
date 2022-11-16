import {compose, pipe} from 'lodash/fp'

const wrap = (type: string) => (str: string) => `<${type}>${str}</${type}>`;
const trim = (str: string) => str.trim();
const toLowerCase = (str: string) => str.toLowerCase();

const isLegal = (age: number, minAge: number): boolean => {
    return age > minAge;
}
const concatWithTest = (str: string) => {
    return (input: string) => {
        return `${str} ${input}`
    }
}

export function runFP() {
    const f = concatWithTest('mostafa');
    console.log(f('mostafavi'))

    //console.log(wrapInDiv(toLowerCase(trim('test'))));

    const wrapInDiv = pipe(trim, toLowerCase, wrap("div"));
    const wrapInH1 = pipe(trim, toLowerCase, wrap("h1"));
    
    console.log(wrapInDiv('pipe test'))
    console.log(wrapInH1('pipe test'))
}