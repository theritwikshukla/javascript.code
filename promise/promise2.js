// const p1 = new Promise((resolve,reject)=>{
//     setTimeout(() => resolve("one"),1000);
// });
// const p2 = new Promise((resolve,reject)=>{
//     setTimeout(() => resolve("two"),2000);
// });
// const p3 = new Promise((resolve,reject)=>{
//     setTimeout(() => resolve("one"),3000);
// });
// const p4 = new Promise((resolve,reject)=>{
//     setTimeout(() => resolve("one"),4000);
// });

// Promise.all([p1,p2,p3,p4])
//     .then((values)=>{
//         console.log(values);
//     })
//     .catch((error)=>{
//         console.log(error);
//     });


// ------------------------------------------------------------------------------//
// ------------------------------------------------------------------------------//

// var anypromise;

// const promise1 = promise.reject(0);
// const promise2 = new promise((resolve) => setTimeout(resolve,100,'quick'));
// const promise3 = new promise((resolve) => setTimeout(resolve,500,'slow'));

// const promise =[promise1,promise2,promise3];

// promise.any(promise).then((value) => console.log(value));

// ------------------------------------------------------------------------------//
// ------------------------------------------------------------------------------//

// var racepromise;
// const promise1 = new promise((resolve,reject) => {
//     setTimeout(resolve,100,'one');
// });


// const promise2 = new promise((resolve,reject) => {
//     setTimeout(resolve,100,'two');
// });

// const promise3=promise.reject(0);

// promise.race([promise1,promise2,promise3]).then((value)=>{
//     console.log(value);
// }).catch((error)=>{
//     console.log(error)
// })

// ------------------------------------------------------------------------------//
// ------------------------------------------------------------------------------//

var promisefinally;
function checkmail(){
    return new promise((resolve,reject)=>{
    if (Math.random()>0.5){
        resolve("mail arrived");
    }else{
        reject(new Error("failed"));
    }
    });
}
checkmail()
    .then((mail)=>{
        console.log(mail);
    })  
    .catch((error)=>{
        comsole.error(error);
    })
    .finally(()=>{
        console.log("completed");
    })
