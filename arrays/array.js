// WHAT IS AN ARRAY?
// ORDERED DATA STRUCTURE


var firstName = "Edward"
var lastName = "Im"
var email = "ed@gmail.com"

var user = ["Edward", "Im", "ed@gmail.com"] // INITIALIZED AN ARRAY WITH VALUES INSIDE

console.log("USER BEFORE THE PUSH: ", user)
// TO ADD DATA
user.push("123-456-7890")
user.push(31)
console.log("USER AFTER THE PUSH: ", user)


// TO REMOVE DATA
user.pop()
var removedValue = user.pop()
console.log("REMOVED VALUE FROM POP: ", removedValue)
console.log("USER AFTER THE POP: ", user)

// ACCESS DATA
console.log("LAST NAME:",user[1])
console.log(user[0], user[1])


// UPDATE DATA
user[0] = "Ed"
user[2] = "edd@gmail.com"
console.log("USER AFTER NAME CHANGE",user)

// LENGTH OF THE ARRAY
console.log("LENGTH OF ARRAY",user.length)
user.push("Something")
console.log("LENGTH OF ARRAY",user.length)


// ACCESS THE LAST VALUE IN AN ARRAY
console.log(user[user.length - 1])



// ACCESS THE FIRST VALUE IN AN ARRAY
console.log(user[0])
