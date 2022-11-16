function plus(a: number, b: number) {
    return a + b;
}

const plus2 = (a: number) => (b: number) => a + b;

console.log(plus(1, 2))
console.log(plus2(1)(2))