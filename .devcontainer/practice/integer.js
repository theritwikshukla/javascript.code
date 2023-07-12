//number is interger or not//
function isint(arry){
    const int=[];
    arry.forEach(element=>{
      if(Number.isInteger(element)){
      int.push(element);
      }
      });
      return int;
    };
const arry=[2,3.9,9,8,5.4,3.4];
const int=isint(arry);
console.log(int);

// function getIntegers(array) {
//     const integerArray = [];
  
//     array.forEach(element => {
//       if (Number.isInteger(element)) {
//         integerArray.push(element);
//       }
//     });
  
//     return integerArray;
//   }
  
//   const array = [1, 2, 'three', 4, 5.6, 6, 'seven', 8];
//   const integerArray = getIntegers(array);
  
//   console.log(integerArray);
  
