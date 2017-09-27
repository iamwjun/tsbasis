function f(shouldInitialize: boolean) {
    if (shouldInitialize) {
        var x = 10;
    }

    return x;
}

// function sumMatrix(matrix: number[][]) {
//     var sum = 0;
//     for (var i = 0; i < matrix.length; i++) {
//         var currentRow = matrix[i];
//         for (var i = 0; i < currentRow.length; i++) {
//             sum += currentRow[i];
//         }
//     }

//     return sum;
// }

let list: number[][] = [[1, 10], [2, 20], [3, 30]];

// console.log(sumMatrix(list));

// for (var i = 0; i < 10; i++) {
//     (function(i){
//         setTimeout(function() {
//             console.log(i.toString(16))
//         }, 100 * i);
//     })(i)
// }

function gg(input: boolean){
    let a = 100;
    if(input){
        let b = a + 1;
        return b;
    }

    return a;
}

try {
    throw "oh no!";
} catch (error) {
    console.log("oh well.");
}

function ig(condition, x){
    if(condition){
        let x = 100;
        return x;
    }
    return x
}

function sumMatrix(matrix: number[][]) {
    let sum = 0;
    for (let i = 0; i < matrix.length; i++) {
        var currentRow = matrix[i];
        for (let i = 0; i < currentRow.length; i++) {
            sum += currentRow[i];
        }
    }

    return sum;
}

function theCityThatAlwaysSleeps() {
    let getCity;

    if (true) {
        let city = "Seattle";
        getCity = function() {
            return city;
        }
    }

    return getCity();
}

//console.log(theCityThatAlwaysSleeps());

// for (let i = 0; i < 10; i++) {
//     setTimeout(function() {
//         console.log(i.toString(2))
//     }, 100 * i);    
// }

const numLivesForCat = 9;
const kitty = {
    name: "Aurora",
    numLives: numLivesForCat,
}

kitty.name = "Rory";
kitty.numLives--;

let input = [12000, 13000];
let [first, second] = input;

[first, second] = [second, first];

function dd([first, second]: [number, number]){
    //console.log(first);
    //console.log(second);
}

dd([1,2]);

let [num, ...rest] = [1, 2, 3, 4];


let o = {
    a: "foo",
    b: 12,
    c: "bar"
};

// let { a, b } = o;

// ({ a, b } = { a: "baz", b: 101 });

// let { a, ...passthrough } = o;
// let total = passthrough.b + passthrough.c.length;
// console.log(total);

// let { a: newName1, b: newName2 } = o;
// console.log(newName1);

// let { a, b }: { a: string, b: number } = o;

// console.log(a, b);

function keepWholeObject(wholeObject: { a: string, b?: number }) {
    let { a, b = 1001 } = wholeObject;
}

// console.log(keepWholeObject({a: 'string1', b: 22}));

type C = {a: string, b?: number};

function HH({ a, b }: C) :void{
    //console.log(a, b)
}

HH({a: "demo", b: 2});

let one = [1, 2];
let two = [3, 4];
let bothPlus = [0, ...one, ...two, 5];

//console.log(bothPlus);

let defaults = { food: "spicy", price: "$$", ambiance: "noisy" };
let search = { ...defaults, food: "rich" };

class M{
    p = 12;
    m(){

    }
}

let m = new M();
let clone = { ...m };
console.log(clone.p);
//console.log(clone.m());