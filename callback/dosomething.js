function doSomthing(callback) {
    setTimeout(() => {
        console.log("step one")
        callback()
    })
}

function doSomthingElse(callback) {
    setTimeout(() => {
        console.log("step two")
        callback()
    })
}

function doThirdThing(callback) {
    setTimeout(() => {
        console.log("step third")

    })
}


doSomthing(function () {
    doSomthingElse(function () {
        doThirdThing()
    })
})




async function one() {

    return new Promise((resole, reject) => {
        setTimeout(() => {
            resole("hi")
        })
    })


   }

// async function two() {
//     return new Promise((resole, reject) => {
//         setTimeout(() => {
//             resole("hello from two")
//         })
//     })
// }

// async function three() {
//     return new Promise((resole, reject) => {
//         setTimeout(() => {
//             resole("hello from three")
//         })
//     })
// }


// one()
//     .then((data) => {
//         console.log("done with one", data)
//         return two()
//     })
//     .then((data) => {
//         console.log("done with two", data)

//     })
//     .catch((error) => {
//         console.log("error")

//     })

//async function fncall() {
//    let result = await one()

//    console.log("done with one------->", result)
//    let resultTwo = await two()

//    console.log("done with two---------->", resultTwo)
//}

//fncall()