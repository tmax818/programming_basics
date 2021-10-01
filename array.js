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




// DEFINING A FUNCTION
function add(a,b){
    return a + b
}
// CALLING A FUNCTION
add(4,5)