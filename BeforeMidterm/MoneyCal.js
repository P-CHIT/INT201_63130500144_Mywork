var price = 0;
var cost = 0;

function calculate(x,y){
    let cal = x-y;
    let NumberOfBanks = 0;
    if(cal >= 500){
        this.NumberOfBanks = Math.floor(cal/500);
        cal -= this.NumberOfBanks*500;
        console.log(`Bank 500 : ${this.NumberOfBanks} pcs`);
    }
    if(cal >= 100){
        this.NumberOfBanks = Math.floor(cal/100);
        cal -= this.NumberOfBanks*100;
        console.log(`Bank 100 : ${this.NumberOfBanks} pcs`);
    }
    if(cal >= 50){
        this.NumberOfBanks = Math.floor(cal/50);
        cal -= this.NumberOfBanks*50;
        console.log(`Bank 50 : ${this.NumberOfBanks} pcs`);
    }
    if(cal >= 20){
        this.NumberOfBanks = Math.floor(cal/20);
        cal -= this.NumberOfBanks*20;
        console.log(`Bank 20 : ${this.NumberOfBanks} pcs`);
    }
    if(cal >= 10){
        this.NumberOfBanks = Math.floor(cal/10);
        cal -= this.NumberOfBanks*10;
        console.log(`Bank 10 : ${this.NumberOfBanks} pcs`);
    }
    if(cal >= 5){
        this.NumberOfBanks = Math.floor(cal/5);
        cal -= this.NumberOfBanks*5;
        console.log(`Bank 5 : ${this.NumberOfBanks} pcs`);
    }
    if(cal >= 2){
        this.NumberOfBanks = Math.floor(cal/2);
        cal -= this.NumberOfBanks*2;
        console.log(`Bank 2 : ${this.NumberOfBanks} pcs`);
    }
    if(cal >= 1){
        this.NumberOfBanks = Math.floor(cal/1);
        cal -= this.NumberOfBanks*1;
        console.log(`Bank 1 : ${this.NumberOfBanks} pcs`);
    }
}

function test(x,y){
    price = x;
    cost = y;
    console.log('Your changes:');
    calculate(price , cost);
}

test(200,100);