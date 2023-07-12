//HOSTING:-JavaScript’s behavior of moving declarations (variable and function) to the top of
//their current scope (function or global)
var a;
a = ('hello world'); 
console.log(a);

console.log(a);

var a= 'Hello World!';

// var x=10;
// function call(){
//     console.log("call js");
// }
// call();
// console.log(x);


console.log(call);
console.log(x);
var x=10;
var call=()=>{
    console.log("call js");
}

//__________________________________________________//

//A lexical environment is a data structure that holds identifier-variable mapping
helloWorld();
//function helloWorld(){
//  console.log('Hello World!');
//}

//var helloWorld = function(){
//    console.log('Hello World!');  prints 'Hello World!'
//  }
//helloWorld();

//console.log(a); 
//var a = 3;

//let a;
//console.log(a); // outputs undefined
//
//a = 5;

//function foo () {
//    console.log(a);
//  }
//  let a = 20;
//  foo();  // This is perfectly valid

let Person = class {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  }
let peter = new Person('Peter', 25); 
console.log(peter);