// var promise;
// let abc=new promise((resole , reject)=>{

// })
// abc()
//      .then((data)=>{

//      })
//      .catch((data)=>{

//      })

// ----------------------------------------------------------------------------//

const count = true;

let countValue = new Promise(function (resolve, reject) {
    if (count) {
        resolve("There is a count value.");
    } else {
        reject("There is no count value");
    }
});

console.log(countValue);


// -------------------------------------------------------------------------//

// let countValue = new Promise(function (resolve, reject) {
//      resolve("Promise resolved");
//    });
   
//    // executes when promise is resolved successfully
   
//    countValue
//      .then(function successValue(result) {
//        console.log(result);
//      })
   
//      .then(function successValue1() {
//        console.log("You can call multiple functions this way.");
//      });

// a promise
// let promise = new Promise(function (resolve, reject) {
//      setTimeout(function () {
//      resolve('Promise resolved')}, 4000); 
//  });
 
//  // async function
//  async function asyncFunc() {
//      try {
//          // wait until the promise resolves 
//          let result = await promise; 
 
//          console.log(result);
//      }   
//      catch(error) {
//          console.log(error);
//      }
//  }
 
 // calling the async function
// asyncFunc(); // Promise resolved