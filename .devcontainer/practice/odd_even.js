var numbers = [86, 41, 55, 85, 90, 24];
  

var even = [];
   var odd=[];
numbers.forEach(element => {
    if( element%2 == 0 )
    even.push(element);
    else
    odd.push(element);
     
});
  
// Printing output
console.log(`Even numbers in an array are: ${even}`);

// var odd=[];
// numbers.forEach(element=>{
//     if (element%2 ==!0)
//     odd.push(element);
// });
console.log(`odd numbers: ${odd}`);
        