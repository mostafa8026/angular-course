import {produce} from 'immer'

export function runImmutableObject() {
    const obj: { name: string, address?: string, passportInfo?: {
        id?: number,
        issueDate?: string
    } } = {
        name: 'ali',
        passportInfo: {
            id: 123
        }
    }

    console.log(obj);

    const f = (input: any) => {
        // const output = Object.assign({}, input);
        // output.address = 'tehran'
        // const output = {
        //     ...input,
        //     address: 'tehran',
        //     passportInfo: {
        //         ...input.passportInfo,
        //         issueDate: '2022'
        //     }
        // }

        const output = produce(input, (draftInput: any) => {
            draftInput.passportInfo.issueDate = '2022';
        });
        return output;
    }

    const obj2 = f(obj);

    console.log(obj);
    console.log(obj2)
}

export function runImmutableArray() {
    const arr = [1, 2, 3];

    // add
    // first
    let newArr = [4, ...arr]
    console.log(newArr);

    // last
    newArr = [...arr, 4]
    console.log(newArr);

    // middle (index = 2)
    newArr = [
        ...arr.slice(0, 2),
        4,
        ...arr.slice(2)
    ]
    console.log(newArr);

    // remove
    newArr = arr.filter(item => item !== 2);
    console.log(newArr);

    // update
    newArr = arr.map(item => item === 2 ? 4 : item)
    console.log(newArr);
}