// WHAT CAN WE STORE INSIDE OF AN ARRAY 
// 1. All values inside of an array should be the same data type
// 2. All values inside of an array should be of the similar information
var namesArr = ["Edward", "John", "Jane"]
var numberArr = [34, 1, 8, 56, 13, 9, 29]

console.log(numberArr[1], numberArr[4])

// BIG NO NO
var auntsContact = ["Jayne", "Smithe", "123 Main Street", "Springfield", "MO", 12345]
var numberArr = [34, 1, 8, 56, 13, 9, 29]




var namesArr = ["Edward", "John", "Jane", "Steve", "Bob", "Jessica"]
// namesArr.pop()

// ITERATING THROUGH AN ARRAY
for(var index = 0; index < namesArr.length; index++){
    console.log(namesArr[index])
}

// ITERATING THROUGH AN ARRAY BACKWARDS
for(var index = namesArr.length-1; index >= 0; index--){
    console.log(namesArr[index])
}


function normalIterate(paramArray){
    for(var index = 0; index < paramArray.length; index++){
        console.log(paramArray[index])
    }
}


var auntsContact = ["Jayne", "Smithe", "123 Main Street", "Springfield", "MO", 12345]
normalIterate(auntsContact)

// normalIterate(["Edward", "John", "Jane", "Steve", "Bob", "Jessica"])
// normalIterate([1,2,3,4,5,5,6,7,78,8,9,9,6,5,43,7,45,43,3265,67,23,4,437,124,46,78])



function reverseIterate(paramArray){
    for(var index = paramArray.length-1; index >= 0; index--){
        console.log(paramArray[index])
    }
}

// reverseIterate(["Edward", "John", "Jane", "Steve", "Bob", "Jessica"])
reverseIterate([1,2,3,4,5,5,6,7,78,8,9,9,6,5,43,7,45,43,3265,67,23,4,437,124,46,78])



// ---------------------------------------------------------------------------------------------------------//
// ---------------------------------------------------------------------------------------------------------//
// ---------------------------------------------------------------------------------------------------------//
// ---------------------------------------------------------------------------------------------------------//
// ---------------------------------------------------------------------------------------------------------//
// COPY BY REFERNCE OR VALUE

var a = 5
var b = a

b--

console.log("a: ", a)
console.log("b: ", b)

// COPY BY REFERENCE
var arr1 = ["Ed", "Jane", "John"]
var arr2 = arr1

console.log("Arr 1: ", arr1)
console.log("Arr 2: ", arr2)

arr2.pop()

console.log("Arr 1: ", arr1)
console.log("Arr 2: ", arr2)