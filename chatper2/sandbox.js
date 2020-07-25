// template strings
const title = 'Best reads of 2019';
const author = 'Mario';
const likes = 30;

// concatenation way

// let result = 'The blog called ' + title + ' by ' + author + ' has ' + likes + ' likes';
// console.log(result);

// template string way

let result1 = `The blog called ${title} by ${author} has ${likes} likes`;
console.log(result1);

//creating html templates

let html = `
    <h2>${title}</h2>
`;
console.log(html);

//----------------------------------------------------------------
//Array 
let ninjas = ['shrey','mahima','ronak'];
console.log(ninjas[1]);

let random = ['shrey','21','IT'];
console.log(random);
console.log(random=random.concat(['CakeSoft']))

let  result2 = ninjas.join('_');
console.log(result2);

//Destructive method(change original array)

let result3 = ninjas.push('abhinav');
console.log(ninjas,`The length is ${result3}`);

let result4 = ninjas.pop();
console.log(ninjas,`The pop value is ${result4}`);