// WHAT IS AN ARRAY?
// LIST ORDERED DATA STRUCTURE THAT STORES VALUES WITHIN IN

var namesArray = ["Edward", "John", "Jane"]

console.log(namesArray[1])

console.log(namesArray)
namesArray[0] = "Ed"
console.log(namesArray)

// length, push, pop
console.log(namesArray.length)

// push - built-in function that adds a value to the array
namesArray.push("Michael")
namesArray.push("Tania")
console.log(namesArray.length)

// pop = built-in function that removes a value from the array
// var name = namesArray.pop()
// var another_name = namesArray.pop()
console.log(namesArray)

// ITERATING THROUGH AN ARRAY
for(var index = 0; index < namesArray.length; index++ ){
    console.log(namesArray[index])
}

// ITERATING THROUGH AN ARRAY IN REVERSE
for(var index = namesArray.length - 1; index >= 0; index-- ){
    console.log(namesArray[index])
}



// GENERATE AN ARRAY FILLED WITH NUM 1 - 255


// #1 - PRINT ONLY THE EVEN NUMBERS 
var arr1 = [8, 6, 7, 5, 3, 0, 9];
// #2 - GET THE TOTAL SUM OF THE NUMBERS IN THE ARRAY
var arr2 = [4, 7, 13, 13, 19, 37, -2];
// #3 - GET THE AVERAGE OF THE ARRAY
var arr3 = [6, 2, 12, 14, -24, 5, 0];

