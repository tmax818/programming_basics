// WHAT CAN WE STORE INSIDE OF AN ARRAY
var user = ["Edward", "Im", 31, '213-222-2222', true]


// WHAT SHOULD WE STORE INSIDE OF AN ARRAY
// 1. All values inside of an array should be of the same data type
// 2. All values inside of an array should be of the similar information
var numberArray = [4,3,6,9,3,0,1]
var namesArray = ["Edward Im", "John Doe", "Jane Doe"]


// ARRAYS AND LOOPS

// ITERATING THROUGH AN ARRAY (numberArray)
for(var i = 0; i < numberArray.length; i++){
    console.log(i) // PRINT THE INDEX
    console.log(numberArray[i]) // PRINT THE VALUE
}

// ITERATING THROUGH AN ARRAY (namesArray)
for(var i = 0; i < namesArray.length; i++){
    console.log(i) // PRINT THE INDEX
    console.log(namesArray[i]) // PRINT THE VALUE
}


var namesArray = ["Edward Im", "John Doe", "Jane Doe"]

// ITERATE THROUGH namesArray BACKWARDS
for(var i = namesArray.length - 1; i >= 0; i--){
    console.log(i) // PRINT THE INDEX
    console.log(namesArray[i]) // PRINT THE VALUE
}




function normalIterate(array){
    for(var i = 0; i < array.length; i++){
        console.log(`INDEX: ${i} VALUE: ${array[i]}`)
    }
}
var alphabets = ['a','b','c','d','e']

// normalIterate([4,3,6,9,3,0,1])
// normalIterate(["Edward Im", "John Doe", "Jane Doe"])
// normalIterate(alphabets)
normalIterate("ABCDEFGHIJKLMNOPQRSTUVWXYZ")


function reverseIterate(array){
    for(var i = array.length - 1; i >= 0; i--){
        console.log(`INDEX: ${i} VALUE: ${array[i]}`)
    }
}

// reverseIterate([4,3,6,9,3,0,1])
// reverseIterate(["Edward Im", "John Doe", "Jane Doe"])
// reverseIterate(alphabets)
