// WHAT IS AN ARRAY?
// ORDERED DATA STRUCUTRE

var letters = []

// push, pop, length

// push - built-in function that adds a value to the array
letters.push("a")
letters.push("b")
letters.push("c")
letters.push("d")
letters.push("e")

// letters.push("a", "b", "c", "d", "e")
console.log(letters)

// pop = built-in function that removes a value from the array
var deletedValue = letters.pop()
console.log("DELETED Value: ", deletedValue)
// letters.pop()
// letters.pop()
console.log(letters)

// ACCESSING VALUES
console.log(letters[2])
console.log(letters[1])
console.log(letters[0])
console.log(letters[3])

// MANIUPATE VALUES
letters[0] = "alpha"
letters[1] = "beta"
letters[2] = "gamma"
letters[3] = "delta"

console.log(letters)

// LENGTH OF THE ARRAY
letters.push("epsilon")

console.log(letters)




// CREATE A FOR LOOP THAT GOES FROM 1 - 50
// for(var i = 1; i < 51; i++){
//     console.log(i)
// }
    
console.log("LENGTH OF THE ARRAY", letters.length)
// CREATE A FOR LOOP THAT GOES FROM BEGINNING OF ARRAY TO END OF ARRAY
for(var index = 0; index < letters.length; index++){
    console.log("INDEX: ", index, " - ", "VALUE: ", letters[index])
}