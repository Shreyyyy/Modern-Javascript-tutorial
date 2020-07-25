let age = 25;

//loose comparison (different types can still be equal)

// console.log(age == 25); //true
// console.log(age=='25'); //true
// console.log(age != 25); //false
// console.log(age != '25');  //false

//strict comparison (different types cannot be equal)

console.log(age === 25); //true
console.log(age === '25'); //false
console.log(age !== 25); //false
console.log(age !== '25');  //true

//type conversion

let score = '100';
score = Number(score);
console.log(score + 1);
console.log(typeof score)

let result = Number('hello');
console.log(result); //NaN

let result1 = String(50);
console.log(result1,typeof result1); //50 string

let  result2 = Boolean('0'); 
console.log(result2); //true - String of any length  than 0 is true.