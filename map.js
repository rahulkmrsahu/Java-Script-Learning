//1.

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// let newArr = arr.map(myFunction)

// function myFunction(arr) {
//     return arr * 2
// }

// console.log(newArr)


//2.

let namesArray = ["Rahul Sahu", "Piyush Mondal", "Shashi Ranjan"]

function someFun(a) {
    const arr = a.map(name => {
        const [firstName, lastName] = name.split(' ')
        return { firstName, lastName }
    })
    return arr
}
let r = someFun(namesArray)
console.log(r)