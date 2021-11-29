/*
//destructuring assignment + rest parameter
[subject, students, ...listOfStudents] = ['INT201', 50, 'A', 'B', 'C'];
console.log(subject);
console.log(students);
console.log(listOfStudents);
// ...listOfStudents ทำการเก็บelement ทุกตัวที่อยู่อีกฝั่งและยังไม่ได้ถูกassignค่า

//object destructuring assignment + rest parameter
// ถ้าเป็นobj ต้องมี ()
({ productId, productName, ...rest } = {

    productName: 'Coke',
  
    productId: 111,

    productPrice: 10,
  
    productStock: 5
  
  });
  
  console.log(productId);
  
  console.log(productName);
  
  console.log(rest);
  
  rest.productPrice = 200;
  
  console.log(rest);
//เราไม่จำเป็นต้องใส่ให้ถูกลำดับ ตราบใดที่เราใส่key ถูก

//function declaration

function sum(numbers) {
    let total = 0; //local variable
    for (let num of numbers) total += num;
    return total;
  }
  
  console.log(sum([1, 2, 3]));
  
  //calling function, function execution
    sum([1, 2, 5, 10]);

  //function expression
const myFunc = function (numbers) {
    let total = 0; //local variable
    for (let num of numbers) total += num;
    return total;
  };
  
  //calling function, function execution
  
  console.log(myFunc([1, 2, 3]));
  */

/* Assignment change to arrow function
//1.

function getCourse() {

  return 'INT201 Client Side Programming I';}

//2.

function echo(text) {

  return text;}

//3.

function isKMUTTStudent(student) {

  if (student.id.length == 13) return true;

  else return false;}

//4.

function sum(num1, num2, num3) {

  return num1 + num2 + num3;}

//5.

function greetingSomeOne(name) {

  const greeting = ['hi', 'hello', 'hey'];

  return `${greeting[Math.floor(Math.random(3))]}, ${name}`;

}*/ 
// 1.
const getCourse = () => 'INT201 Client Side Programming I';
// 2.
const echo = text => text;
// 3.
const isKMUTTStudent = student => student.id.length == 13 ? true : false;
// 4.
const sum = (num1, num2, num3) => num1 + num2 + num3 ;
// 5.
const greetingSomeone = name => {
    const greeting = ['hi', 'hello', 'hey'];
  return `${greeting[Math.floor(Math.random(3))]}, ${name}`;
}

students = {id:[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13], name: ['a','b','c','d','e','f','g','h','i','j']}
console.log(getCourse());
console.log(echo(1));
console.log(echo('A'));
console.log(isKMUTTStudent(students));
console.log(sum(1,2,3));
console.log(greetingSomeone('Phuchit'));