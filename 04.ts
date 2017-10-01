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
// class Person {
//     protected name: string;
//     constructor(name: string) { this.name = name; }
// }
// class Employee extends Person {
//     private department: string;
//     constructor(name: string, department: string) {
//         super(name);
//         this.department = department;
//     }

//     public getDepartment() {
//         return `Hello, my name is ${this.name} and I work in ${this.department}`;
//     }
// }
// let howard = new Employee("Howard", "Sales");
// console.log(howard.getDepartment());
// console.log(howard.name);

// example 7
// class Person {
//     protected name: string;
//     protected constructor(theName: string) {  this.name = theName; }
// }
// class Employee extends Person {
//     private department: string;

//     constructor(name: string, departmet: string) {
//         super(name);
//         this.department = departmet;
//     }

//     public getElevatorPitch() {
//         return `Hello, my name is ${this.name} and I work in ${this.department}`;
//     }
// }
// let howard = new Employee("Howard", "Sales");
// console.log(howard.getElevatorPitch());
// let john = new Person("John");

// example 8
// class Octopus {
//     readonly name: string;
//     readonly numberOfLegs: number = 8;
//     constructor(theName: string) {
//         this.name = theName;
//     }
// }
// let dad = new Octopus("Man with the 8 strong legs");
// dad.name = "Man with the 3-piece suit";

// example 9
// class Octopus {
//     readonly numberOflegs: number = 8;
//     constructor(readonly name: string) {
//         console.log(name)
//     }
// }
// let dad = new Octopus('numberOflegs');

// example 10
// class Employee {
//     fullName: string;
// }

// let employee = new Employee();
// employee.fullName = "Bob Smith";
// if(employee.fullName) {
//     console.log(employee.fullName);
// }

// example 11
// let passcode = "secret passcode";

// class Employee {
//     private _fullName: string;

//     get fullName(): string {
//         return this._fullName;
//     }

//     set fullName(newName: string) {
//         if (passcode && passcode == "secret passcode") {
//             this._fullName = newName;
//         }
//         else {
//             console.log("Error: Unauthorized update of employee!");
//         }
//     }
// }

// let employee = new Employee();
// employee.fullName = "Bob Smith";
// if (employee.fullName) {
//     console.log(employee.fullName);
// }

// example 12
// class Grid {
//     static origin = {x: 0, y: 0};
//     calculateDistanceFromOrigin(point: {x: number; y: number;}) {
//         let xDist = (point.x - Grid.origin.x);
//         let yDist = (point.y - Grid.origin.y);
//         return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale;
//     }
//     constructor(public scale: number){}
// }

// let grid1 = new Grid(1.0);
// let grid2 = new Grid(5.0);

// console.log(grid1.calculateDistanceFromOrigin({x: 10, y: 10}));
// console.log(grid2.calculateDistanceFromOrigin({x: 10, y: 10}));

// example 13
// abstract class Animal {
//     abstract makeSound(): void;
//     move(): void{
//         console.log("roaming the earth...");
//     }
// }

// example 14
// abstract class Department {
//     constructor(public name: string) {

//     }

//     printName(): void {
//         console.log("Department name: " + this.name);
//     }

//     abstract printMeeting(): void;
// }

// class AccountingDepartment extends Department {
//     constructor() {
//         super("Accounting and Auditing");        
//     }

//     printMeeting(): void {
//         console.log("The Accounting Department meets each Monday at 10am.");
//     }

//     generateReports(): void {
//         console.log("Generating accounting reports...");
//     }
// }

// let department: Department;
// department = new Department();
// department = new AccountingDepartment();
// department.printName();
// department.printMeeting();
// department.generateReports();

// example 15
// class Greeter {
//     greeting: string;
//     constructor(message: string) {
//         this.greeting = message;
//     }
//     greet() {
//         return "Hello, " + this.greeting;
//     }
// }

// let greeter: Greeter;
// greeter = new Greeter("world");
// console.log(greeter.greet());

// example 16
// let Greeter = (function(){
//     function Greeter(message) {
//         this.greeting = message;
//     }
//     Greeter.prototype.greet = function() {
//         return "Hello, " + this.greeting;
//     }
//     return Greeter;
// })();

// let greeter;
// greeter = new Greeter("world");
// console.log(greeter.greet());

// example 17
// class Greeter {
//     static standardGreeting = "Hello, there";
//     greeting: string;
//     greet() {
//         if (this.greeting) {
//             return "Hello, " + this.greeting;
//         }
//         else {
//             return Greeter.standardGreeting;
//         }
//     }
// }

// let greeter1: Greeter;
// greeter1 = new Greeter();
// console.log(greeter1.greet());

// let greeterMaker: typeof Greeter = Greeter;
// greeterMaker.standardGreeting = "Hey there";

// let greeter2: Greeter = new greeterMaker();
// console.log(greeter2.greet());

// example 18
class point {
    x: number;
    y: number;
}

interface Piont3d extends Point {
    z: number;
}

let point3d: Point3d = {x: 1, y: 2, z: 3};


