var template_literals;
let firstname="Ritwik";
let lastname="shukla";
console.log(`your name is ${firstname} ${lastname}`);
console.log("your name is", firstname + lastname);


//-------------------------------------------------------------------------------------//


// var multi_line_string;
//  let poemdata= 
//             `eating sugar?no papa
//             telling a lie? no papa`
// console.log(poemdata);


//-----------------------------------------------------------------------------//


// function calculation(height=67,weidth=87){
//     const area_of_rect  =height*weidth;
//     return area_of_rect;
// } 
// --------------------------------------------------------------------------------//

// function example(height = 50, width = 40) { 
//     const newH = height * 10;
//     const newW = width * 10;
   
//     return newH+newW;
// }
// console.log(example());


//---------------------------------//


// const test = (a='a',b='b',c='c')=>{
//     return a+b+c
// }
 
// console.log(test('A','B','C')) //ABC
// console.log(test('A','B'))     //ABc
// console.log(test('A'))         //Abc

// --------------------------------------------------------------------//


var spread_operator;
let array1=[1,3,50];
var array2=[2,6,4];
var array3=[...array1,...array2];
console.log(array3);

//------------------------------------------------------------------------------//

var obj1={
    foo:"bar",
    x:42,
};
var obj2={
    foo:"baz",
    y:13
};
var clonedobj={...obj1, ...obj2};
console.log(clonedobj);
var mergedobj={...obj1, ...obj2};
console.log(mergedobj);

//var arrayoperations;
// let fruits=["apple","orange","kiwi",2,true]
// fruits.forEach((value) =>{
//     console.log(value)
// });



const fruit=["apple","kiwi","orange"];
fruit.splice(0,0,"banana");
console.log(fruit);

// let text ="hii Ritwik";
// let afterslice=text.slice(0,4);
// console.log(afterslice);

// const fruits=["banana","apple"];
// const fruit1=["kiwi"];
// const fruit2=["pine"];
// const newfruit=fruits.concat(fruit1,fruit2);
// console.log(newfruit);