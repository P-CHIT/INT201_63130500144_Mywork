class Dice {
    constructor(gameTitle) {
      console.log('constructor is working');
      this._diceName =  gameTitle;
      this._faceValue = 0;
    }

    constructor(){
        this._diceName = 'Unknown';
    }
  
    roll() {
      return Math.floor(Math.random() * 6) + 1;
    }
  }
  
  //#1
  let dice1 = new Dice();
  console.log(dice1);
  console.log(dice1.roll());
  
  let dice2 = new Dice();
  console.log(dice2);
  console.log(dice2.roll());

  let numArray = [];

function randomNum(){

    for(i=0;i<3;i++){
      number = Math.floor(Math.random() * 100) + 1;
        numArray[i] = number;
    }
    return numArray;
}

var arrayLen = randomNum().length;

console.log(arrayLen)

//console.log(`Random Number = ${randomNum()}`);

let sum;

for(i=0;i<numArray.length;i++){
  
    factor1 = numArray[i];
    sum += factor1;
}