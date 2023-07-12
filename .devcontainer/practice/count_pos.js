//count positive number from aaray//
var number=[5,4,3,2,-3,-9];
var pos=[];
number.forEach(element=>{
    if(element>0)
    pos.push(element);
});
let sum=0
pos.forEach(element=>{
    sum+=element
});

// console.log(`even numbers:${even}`);
// console.log(`odd numbers:${odd}`);
console.log(`positive numbers:${pos}`);
console.log(`sums are:${sum}`);

