let fullName: string = `Bob Bobbington`;
let age: number = 37;
let sentence: string = `Hello, my name is ${ fullName }.I'll be ${ age + 1 } years old next month.`;

let list: number[] = [1, 2, 3];
let list2: Array<number> = [1, 2, 3];

let x: [string, number];
x = ["hello", 10];

x[3] = "world";

enum Color {Red = 1, Green, Blue}
let c:Color = Color.Green;

// enum Color2 {Red = 1, Green, Blue}
// let colorName: string = Color2[1];

let notSure: any = 4;
notSure.toFixed();

let u:undefined


function warnUser(): void{
    console.log('this is my warning message')
}

warnUser();

let unusable: void = undefined;

//console.log(unusable);

let n: null = null;

//console.log(n);

function error(message: string): never{
    throw new Error(message);
}

function fail(){
    return error('Something failed');
}

function infiniteLoop(): never{
    while(true){
        error('infiniteLoop')
    }
}

let someValue: any = "this is a string";

let strLength: number = (someValue as string).length;

console.log(strLength);