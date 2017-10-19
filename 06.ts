// example 1
// function identity<T>(arg: T) {
//     return arg;
// }
// let output = identity<string>('myString');
// console.log(output)

// example 2
// function loggingIdentity<T>(arg: T[]): T[] {
//     console.log(arg.length);
//     return arg;
// }

// example 3
// function loggingIdentity<T>(arg: Array<T>): Array<T> {
//     console.log(arg.length);
//     return arg;
// }

// example 4
// function identity<T>(arg: T): T {
//     return arg;
// }
// let myIdentity: <T>(arg: T) => T = identity;
// let myIdentity2: <U>(arg: U) => U = identity;

// example 5
// interface GenericIdentityFn {
//     <T>(arg: T): T;
// }
// function identity<T>(arg: T): T {
//     return arg;
// }
// let myIdentity: GenericIdentityFn = identity;

// eample 6
// interface GenericIdentityFn<T> {
//     (arg: T): T;
// }
// function identity<T>(arg: T): T {
//     return arg;
// }
// let myIdentity: GenericIdentityFn<number> = identity;

// example 7
class GenericNumber<T> {
    zeroValue: T;
    add: (x: T, y: T) => T
}
let myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function(x, y) { return x + y; };

let stringNumberic = new GenericNumber<string>();
stringNumberic.zeroValue = '';
stringNumberic.add = function(x, y) { return x + y };
console.log(stringNumberic.add(stringNumberic.zeroValue, "test"))