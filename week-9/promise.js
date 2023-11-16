// let doPromise = new Promise((resolve, reject) => {
//     setTimeout(() =>{
//         let skills = ["HTML","CSS", "JavaScript"]
//         if (skills.includes("Node")){
//             resolve('full-stack developer')
//         } else {
//             reject("Not a full-stack developer")
//         }
//     }, 2000)
// })

// doPromise
// .then(result => {
//     console.log(result)
// })
// .catch(error => console.log(error))


// async and await an elegant way to handle promises. 

// let square = async function(n) {
//     let result = await n * n;
//    return result;
//    }
//    square(2)
//    .then(result => {
//    console.log(result)
//    })



// then() catch() and finally()

// let asyncOperation = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Success")
//     }, 1000)
// })

// asyncOperation.then(
//     result => {
//         console.log("Resolved", result);
//     }, 
//     error => {
//         console.log("Rejected", error)
//     }
// )

// Catch

let asyncOperation = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject(new Error("An error occured"))
    }, 1000)
})

asyncOperation.then(result => {
    console.log("Resolved", result);
})
.catch(error => {
    console.log("rejected", error);
})



