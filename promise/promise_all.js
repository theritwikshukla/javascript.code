// const promise1 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 500, 'one');
//   });
  
//   const promise2 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 100, 'two');
//   });
  
//   Promise.race([promise1, promise2]).then((value) => {
//     console.log(value);
//   });

//----------                                                 -------------//

const promise1 = new Promise((resolve,reject)=>{
    setTimeout(resolve,1000,9);
});
const promise2 = new Promise((resolve,reject)=>{
   resolve("print me first");
});
const promise3 = new Promise((resolve,reject)=>{
    setTimeout(resolve,2000,"in last");
});
Promise.race([promise1 ,promise2, promise3])
    .then((resolve)=>{
    console.log(resolve);
    });