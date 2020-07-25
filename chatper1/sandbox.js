// Strings
console.log('hello world');
let email = 'shreyk1999@gmail.com'
console.log(email);

// string concatenation
let firstname = 'Shrey';
let middlename = 'K'
let lastname = 'Sinha';

let fullname = firstname + ' ' + middlename + ' ' + lastname;
console.log(fullname);

// getting characters
console.log(fullname[6]);

// string length
console.log(fullname.length);

// string methods
console.log(fullname.toUpperCase());
let res_lower = fullname.toLowerCase();
console.log(res_lower,fullname);

let index = email.indexOf('@');
console.log('Location of @:' +index,email);
let index1 = email.lastIndexOf('m')
console.log('Last location of m:' + index,email);

//common string methods
let result = email.slice(0,index); 
console.log(result);

let characters_nos = 10;
let  result1 = email.substr(4,characters_nos);
console.log(result1);

let result2 = email.replace('m','#');
console.log(result2);