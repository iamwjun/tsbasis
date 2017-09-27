// // example 1
// interface LabelledValue {
//     label: string;
// }
// function printLabel(labelledObj: LabelledValue){
//     console.log(labelledObj.label);
// }

// let myObj = {size: 10, label: "Size 10 Object"};
// printLabel(myObj);

// example 2
// interface SquareConfig {
//     color?: string,
//     width?: number;
// }
// function createSquare(config: SquareConfig): {color: string, area: number}{
//     let newSquare = {color: "white", area: 100};
//     if(config.color){
//         newSquare.color = config.color;
//     }
//     if(config.width){
//         newSquare.area = config.width * config.width;
//     }
//     return newSquare;
// }

// let mySquare = createSquare({color: "black", width: 20});
// console.log(mySquare);

// example 3
// interface Point {
//     readonly x: number,
//     readonly y: number;
// }

// let p1: Point = { x: 10, y: 20 };
// console.log(p1.x);

// example 4
// let a: number[] = [1, 2, 3, 4];
// let ro: ReadonlyArray<number> = a;
// ro[0] = 12;
// ro.push(5);
// ro.length = 100;
// a = ro;

// a = ro as number[];
// console.log(a);

// example 5
// interface SquareConfig {
//     color?: string,
//     width?: number,
//     [propName: string]: any;
// }
// function createSquare(config: SquareConfig): { color: string, area: number }{
//     let newSquare = {color: "white", area: 100};
//     if(config.color){
//          newSquare.color = config.color;
//     }
//     if(config.width){
//         newSquare.area = config.width * config.width;
//     }
//     return newSquare;
// }
// let mySquare = createSquare({ color: "red", width: 100 });
// let mySquare = createSquare({ width: 100, opacity: 0.5 } as SquareConfig);
// let squareOptions = { colour: "red", width: 100 };
// let mySquare = createSquare(squareOptions);
// console.log(mySquare)


// example 6
// interface SearchFunc {
//     (source: string, subString: string): boolean;
// }
// let mySearch: SearchFunc;
// mySearch = function(source: string, subString: string){
//     let result = source.search(subString);
//     return result > -1;
// }
// let mySearch:SearchFunc;
// mySearch = function(src: string, sub: string) {
//     let result = src.search(sub);
//     return result > -1;
// }
// console.log(mySearch("demo", "test"));

// example 7
// interface StringArray {
//     [index: number]: string;
// }
// let myAarray: StringArray;
// myAarray = ["Bob", "Fred"];
// let myStr: string = myAarray[0];
// console.log(myStr);

// example 8
// class Animal {
//     name: string;
// }
// class Dog extends Animal{
//     breed: string;
// }
// interface NotOkay {
//     [x: number]: Animal;
//     [y: string]: Dog
// }

// example 9
// interface NumberDictionary {
//     [index: string]: number;
//     length: number;
//     name: string;
// }

// exmaple 10
// interface ReadonlyStringArray {
//     readonly [index: number]: string;
// }
// let myAarray: ReadonlyStringArray = ["Alice", "Bob"];
// myAarray[2] = "Mallory";

// example 11
// interface ClockInterface {
//     currentTime: Date;
//     setTime(d: Date);
// }
// class Clock implements ClockInterface {
//     currentTime: Date;
//     setTime(d: Date) {
//         this.currentTime = d;
//     }
//     constructor(h: number, m: number) {

//     }
// }

// example 12
// interface ClockInterface {
//     new (hour: number, minute: number);
// }
// class Clock implements ClockInterface {
//     currentTime: Date;
//     constructor(h: number, m: number) { }
// }

// example 13
// interface ClockConstructor {
//     new (hour: number, minute: number): ClockInterface;
// }
// interface ClockInterface {
//     tick();
// }
// function createClock(ctor: ClockConstructor, hour: number, minute: number): ClockInterface {
//     return new ctor(hour, minute);
// }

// class DigitalClock implements ClockInterface {
//     h: number;
//     m: number;
//     constructor(h: number, m: number) {
//         this.h = h;
//         this.m = m;
//     }
//     tick() {
//         console.log("beep beep "+ this.h);
//     }
// }

// class AnalogClock implements ClockInterface {
//     h: number;
//     m: number;
//     constructor(h: number, m: number) {
//         this.h = h;
//         this.m = m;
//     }
//     tick() {
//         console.log("tick tick "+ this.m);
//     }
// }

// let digital = createClock(DigitalClock, 12, 17);
// let analog = createClock(AnalogClock, 7, 32);
// digital.tick();
// analog.tick();

// example 14
// interface Shape {
//     color: string;
// }

// interface PenStroke {
//     penWidth: number;
// }

// interface Square extends Shape, PenStroke {
//     sideLength: number;
// }
// let square = <Square>{};
// square.color = "blue";
// square.sideLength = 10;
// square.penWidth = 5.0;
// console.log(square);

// example 15
// interface Counter {
//     (start: number): string;
//     interval: number;
//     reset(): void;
// }

// function getCounter(): Counter {
//     let counter = <Counter>function (start: number) {  };
//     counter.interval = 123;
//     counter.reset = function() { };
//     return counter;
// }

// let c = getCounter();
// c(10);
// c.reset();
// c.interval = 5.0;
// console.log(c);

// example 16
class Control {
    private state: any;
}

interface SelectableControl extends Control {
    select(): void;
}

class Button extends Control implements SelectableControl {
    select() { }
}

class TextBox extends Control {
    
}

class Image implements SelectableControl {
    select() { }
}

class Location  extends Control{

}