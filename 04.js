// example 1
// class Greeter {
//     greeting: string;
//     constructor(message: string) {
//         this.greeting = message;
//     }
//     greet() {
//         return "Hello, " + this.greeting;
//     }
// }
// let greeter = new Greeter("world");
// console.log(greeter.greet());
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// example 2
// class Animal {
//     name: string;
//     constructor(theName: string) { this.name = theName; }
//     move(distanceInMeters: number = 0) {
//         console.log(`${this.name} moved ${distanceInMeters}m.`);
//     }
// }
// class Snake extends Animal {
//     constructor(name: string) { super(name); }
//     move(distanceInMeters = 5) {
//         console.log("Slithering...");
//         super.move(distanceInMeters);
//     }
// }
// class Horse extends Animal {
//     constructor(name: string) { super(name); }
//     move(distanceInMeters = 45) {
//         console.log("Galloping...");
//         super.move(distanceInMeters);
//     }
// }
// let sam = new Snake("Sammy the Python");
// let tom: Animal = new Horse("Tommy the Palomino");
// sam.move();
// tom.move(34);
// example 3
// class Animal {
//     public name: string;
//     public constructor(theName: string) { this.name = theName };
//     public move(distanceInMeters: number) {
//         console.log(`${this.name} moved ${distanceInMeters}m.`);
//     }
// }
// let de = new Animal("Wujun");
// de.move(2);
// console.log(de.name);
// example 4
// class Animal {
//     private name: string;
//     constructor(theName: string) { this.name = theName; }
// }
// new Animal("Cat").name;
// example 5
// class Animal {
//     private name: string;
//     constructor(theName: string) { this.name = theName; }
// }
// class Rhino extends Animal {
//     constructor() { super('Rhino'); }
// }
// class Employee {
//     private name: string;
//     constructor(theName: string) { this.name = theName; }
// }
// let animal = new Animal('Goat');
// let rhino = new Rhino();
// let employee = new Employee('Bob');
// animal = rhino;
// animal = employee;
// example 6
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    return Person;
}());
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(name, department) {
        var _this = _super.call(this, name) || this;
        _this.department = department;
        return _this;
    }
    Employee.prototype.getDepartment = function () {
        return "Hello, my name is " + this.name + " and I work in " + this.department;
    };
    return Employee;
}(Person));
var howard = new Employee("Howard", "Sales");
console.log(howard.getDepartment());
// console.log(howard.name);
