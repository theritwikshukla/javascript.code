// var callbackfctn;
// //in call back function we passes argument to another function
// function abc(name,cb){
//     console.log("hello abc",name)
//     console.log(cb)
//     cb()
// }
// function pqr(){
//     console.log("hello pqr")
// }
// abc("smita",pqr)

// _____________________________________________________________________________________________________//

// function greet(name, callback) {
//     console.log('Hi' + ' ' + name);
//     callback();
// }

// //this is a callback function
// function callMe() {
//     console.log('I am callback function');
// }

// // passing function as an argument
// greet('Peter', callMe);

// _____________________________________________________________________________________________________//

function add(a,b){
    return a+b;
}
function divide(a,b){
    return a/b;
}
function calculate (x,y,operation){
    return operation(x,y);
}
console.log(calculate(2,2,add));

//2......//

function greet(name,callback){
    console.log('hi' + " " +name);
    
    callback();
}
function callme(){
    console.log("i am callback");
}
greet("preeti",callme);
