// example 1
// let myAdd: (baseVaule: number, incremet: number) => number =
//     function(x: number, y: number) : number { return x + y; }

// function buildName(firstName: string, lastName?: string) {
//     if(lastName)
//         return firstName + " " + lastName;
//     else
//         return firstName;
// }

// example 2
// let result1 = buildName("Bob");
// // let result2 = buildName("Bob", "Adams", "Sr.");
// let result3 = buildName("Bob", "Admas");

// example 3
// function buildName(firstName: string, lastName = "Smith") {
//     return firstName + " " + lastName;
// }
// let result1 = buildName("Bob");

// example 4
// function buildName(firstName: string, ...restOfName: string[]) {
//     return firstName + " " + restOfName.join(" ");
// }
// let employeeName = buildName("Joseph", "Samuel", "Lucas", "MacKinzie");
// console.log(employeeName);

// example 5
// function buildName(firstName: string, ...restOfName: string[]) {
//     return firstName + " " + restOfName.join(" ");
// }
// let buildNameFun: (fname: string, ...rest: string[]) => string = buildName;
// console.log(buildNameFun("Joseph", "Samuel", "Lucas", "MacKinzie"));

// example 6
// let deck = {
//     suits: ["hearts", "spades", "clubs", "diamonds"],
//     cards: Array(52),
//     createCardPicker: function() {
//         return () => {
//             let num = Math.floor(Math.random() * 52);
//             console.log(num);
//             let pickedCard = num;
//             let pickedSuit = Math.floor(pickedCard / 13);

//             return {suit: this.suits[pickedCard], card: pickedCard % 13};
//         }
//     }
// }

// let cardPicker = deck.createCardPicker();
// let pickedCard = cardPicker();

// console.log("card: " + pickedCard.card + " of " + pickedCard.suit);

// example 7
// interface Card {
//     suit: string;
//     card: number;
// }
// interface Deck {
//     suits: string[];
//     cards: number[];
//     createCardPicker(this: Deck): () => Card;
// }
// let deck = {
//     suits: ["hearts", "spades", "clubs", "diamonds"],
//     cards: Array(52),
//     createCardPicker: function() {
//         return () => {
//             let pickedCard = Math.floor(Math.random() * 52);
//             let pickedSuit = Math.floor(pickedCard / 13);

//             return {suit: this.suits[pickedCard], card: pickedCard % 13};
//         }
//     }
// }

// let cardPicker = deck.createCardPicker();
// let pickedCard = cardPicker();

// console.log("card: " + pickedCard.card + " of " + pickedCard.suit); 

// example 8
// interface UIElment{
//     addClickListerner(onclick: (this: void, e: Event) => void): void;
// }
// class Handler {
//     info: string;
//     onClickGood = (e: Event) => { this.info = e.message }
// }
// let h = new Handler();
// uiElement.addClickListerner(h.onClickBad);

// example 9
let suits = ["hearts", "spades", "clubs", "diamonds"];
function pickedCard(x): any {
    if(typeof x == "object"){
        let pickedCard = Math.floor(Math.random() * x.length);
        return pickedCard;
    } else if(typeof x == "number") {
        let pickedSuit = Math.floor(x / 13);
        return { suit: suits[pickedSuit], card: x % 13 };
    }
}

let myDeck = [{ suit: "diamonds", card: 2 }, { suit: "spades", card: 10 }, { suit: "hearts", card: 4 }];
let pickedCard1 = myDeck[pickedCard(myDeck)];
console.log("card: " + pickedCard1.card + " of " + pickedCard1.suit);
let pickedCard2 = pickedCard(15);
console.log("card: " + pickedCard2.card + " of " + pickedCard2.suit);
