// GENERATE AN ARRAY FILLED WITH NUMBERS 1 - 255
var numArr = []
for(var i = 1; i < 256; i++){
    numArr.push(i)
}
// console.log(numArr)

// INDEX 0    1    2    3    4    5      6
// VALUE 8    6    7    5    3    0      9

// #1 - PRINT ONLY THE EVEN NUMBERS 
// var arr1 = [8, 6, 7, 5, 3, 0, 9, 11, 12, 13, 14, 15];
// for(var i = 0; i < arr1.length; i++){
//     if(arr1[i] % 2 === 0){
//         console.log(arr1[i])
//     }
// }

// #2 - GET THE TOTAL SUM OF THE NUMBERS IN THE ARRAY
var arr2 = [4, 7, 13, 13, 19, 37, -2];
// ITERATE THROUGH ARRAY
var sum = 0
for(var i = 0; i < arr2.length; i++){
    // ADD THE VALUES AS WE ITERATE THROUGH THE ARRAY
    sum += arr2[i] // sum = sum + arr2[i]
}
// console.log(sum)


// #3 - GET THE AVERAGE OF THE ARRAY
var arr3 = [6, 2, 12, 14, -24, 5, 0];
var sum = 0
for(var i = 0; i < arr3.length; i++){
    sum += arr3[i]
}
// console.log(sum / arr3.length)



// COPY BY REFERENCE OR VALUE

var a = 5
var b = a
b--
console.log("a: ", a)
console.log("b: ", b)

// var a = 5
// var b = 5


var arr1 = ["Ed", "Jane", "John"] // 2@feiwoa543018f
var arr2 = arr1 // 2@feiwoa543018f
arr2.push("Adam")
console.log("Arr 1: ", arr1)
console.log("Arr 2: ", arr2)



// arr1 = 2@feiwoa543018f
// arr2 = 2@feiwoa543018f