
// let a="uu"
// let y="ghg"
// let e={...y}
// console.log(e)

// let a = [1, 2, 4]
// y = a

// // let o=a.push(5)
// y = [...a, 5]
// console.log(y)


//How can you concatenate two arrays using the spread operator?

// let a = [1, 2, 3, 4, 5]
// let b = [6, 7]
// let c = [...a, ...b]
// console.log(c)

// Explain how you can create a shallow copy of an array using the spread operator.

// let origianl = [1, "Rahul", "Delhi", 713101]

// let shallowCopy = [...origianl]

// console.log(shallowCopy)

//Use the spread operator to merge two objects into a new one.

// let obj1 = [{
//     name: "Rahul",
//     age: 85,
//     location: "kolkata"
// }]

// let obj2 = [{
//     name: "Flash",
//     age: 25,
//     location: "kolkata"
// }]

// let newObj = [...obj1, ...obj2]

// console.log(newObj)


//In what scenario would you use the spread operator to pass arguments to a function?



//Use the forEach method to iterate over an array and log each element to the console.

// const a = [1, 2, 3, 4, 5, 6, 7]

// a.forEach(function (number) {
//     console.log(number)

//     for (let i = 0; i < a.length; i++) {
//         console.log(i)

//     }


// })

//Can you use forEach to update each element of an array in place?

let a = [1, 2, 3, 4, 5, 6, 7, 8]

a.forEach(function (update) {
    let b = []
    count = 0
    for (let i = 0; i < update.length; i++) {
        if (update[i] == 7) {

            count++

        }

        else {
            b = b + update[i]
        }


    }

    console.log(b)




})


