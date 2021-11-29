//กรณีที่ต้องการให้แสดง
var y = 5;
var z = 'A';
console.log(`y type is ${typeof y}`);
console.log(`z type is ${typeof z}`);
console.log(typeof y);
console.log(typeof z);

//ทดลองสร้างloopแบบมีcondition
for(i=0; i<10; i++){
    if(i%2==0){
        console.log(`Even number: ${i}`)
    }else{
        console.log(`Odd number: ${i}`)
    }
}

//zodiac Switch v.1
  var year = 1990;

switch(year % 12){
    case 0:
        console.log("monkey");
        break;
    case 1:
        console.log("rooster");
        break;
    case 2:
        console.log("dog");
        break;
    case 3:
        console.log("pig");
        break;
    case 4:
        console.log("rat");
        break;
    case 5:
        console.log("ox");
        break;
    case 6:
        console.log("tiger");
        break;
    case 7:
        console.log("rabbit");
        break;
    case 8:
        console.log("dragon");
        break;
    case 9:
        console.log("snake");
        break;
    case 10:
        console.log("horse");
        break;
    case 11:
        console.log("sheep");
        break;
}

//zodiac Switch v.2
var year = 1990;
const findZodiac = year % 12;

switch(findZodiac){
    case 0:
        console.log("monkey");
        break;
    case 1:
        console.log("rooster");
        break;
    case 2:
        console.log("dog");
        break;
    case 3:
        console.log("pig");
        break;
    case 4:
        console.log("rat");
        break;
    case 5:
        console.log("ox");
        break;
    case 6:
        console.log("tiger");
        break;
    case 7:
        console.log("rabbit");
        break;
    case 8:
        console.log("dragon");
        break;
    case 9:
        console.log("snake");
        break;
    case 10:
        console.log("horse");
        break;
    case 11:
        console.log("sheep");
        break;
}
    console.log(`Your Zodiac is ${findZodiac}`);

//zodiac Function ver.
function zodiacCal(years){
    return['monkey', 'rooster', 'dog',

    'pig', 'rat', 'ox',

    'tiger', 'rabbit', 'dragon',

    'snake', 'horse', 'sheep' ]
    [Number(year) % 12];
}

console.log(zodiacCal('1900'));


//for loop of/in
    // of can use to array / in can use to object
/*

    let products = ["coke", "water", "soda"];
     for (let product of products){​
 console.log(product.charAt(0));
 }
 ​
    let student={​id: 1, name: "Somchai"}​
for(let key in student){​
 console.log(key);
 console.log(student[key])
 }​
*/

const MAX_STUDENT = 50;

// MAX_STUDENT = 100;

let maxStudent = 50;



let player2 = { id: 2, name: 'John' };

const player1 = { id: 1, name: 'Adam' };

// player1 = player2; //memory address, cannot re-assign value

player2 = player1; //player1 address assigns to player2



//setter-mutator methods/mutated (modified property) syntax

//player1.id = 5; or

//player1["id"]=5;



//getter-accessor method/read property

//player.id or

//player["id"]



player1.name = 'Mary';

console.log(player1);

console.log(player2); //?


//#0 variable with single value

let product1 = 'Coke';
let product2 = 'Pepsi';
let price1 = 15;
let price2 = 13;

//#1 array set of mutiple values
let products1 = ['Coke', 'Pepsi'];
let prices1 = [15, 13];

//#2
let products = [
  { product: 'Coke', price: 15 },
  { product: 'Pepsi', price: 13 }
];

//#3
let product2 = {
  products: ['Coke', 'Pepsi'],
  prices: [15, 13]
};