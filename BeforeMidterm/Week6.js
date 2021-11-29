
let std1={id:1, name:"Susan"}
let std2= {id:2, name:"John"}
std2 = std1;
std2.name = "Peter"
console.log(std1)
console.log(std2)


function do1(num){
    num = 555;
    return num
}

let num1 = 1;
do1(num1);
console.log(num1);



//กูทำเอง
let array1 = [20, 'Hello', true, 1];

console.log(array1[0]);
console.log(array1.length);
console.log(array1 [array1[array1.length-1]] );

//ก้อปจากจาร
let arr1 = [10, 'in progress', true, 1];

console.log(arr1[0]); // [integer expression]

console.log(arr1.length);

console.log(arr1 [arr1[arr1.length-1]] );



let color = [["red","blue"], ["yellow","black","White"]];
console.log(color[0][color[0].length - 1]);
console.log(color[color.length - 1][color[1].length - 1]);

let students = [

    { id: 1, name: 'Ann' },
  
    { id: 2, name: 'Peter' },
  
    { id: 3, name: 'Mary' }
  
  ];
  
  console.log(students[0]);
  
  students[students.length - 1].name = 'Umaporn';
  
  console.log(students[students.length - 1]);

  let testArr = [1, 2, ...array1, ...color, ...students];
  console.log(testArr);
  console.log(testArr.length);

  delete array1[3];
  console.log(array1);