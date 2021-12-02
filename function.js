
// // DEFINING THE FUNCTION
function print1to50(){
    for(var x = 1; x < 51; x++){
        console.log(x)
    }
}

// // CALL/EXECUTE THE FUNCTION
// print1to50()
// print1to50()

// -----------------------------------------------------------------------------//

// DEFINE THE FUNCTION
function add(num1, num2){
    return num1 + num2
}
// CALL THE FUNCTION
// console.log(add(5,10))
// console.log(add(3,7))

// The number of parameters HAS TO MATCH the number of arguments

// DEFINE THE FUNCTION
function multiply(num1,num2){
    return num1 * num2
}
// CALL THE FUNCTION
// console.log(multiply(232,132))



// console.log() VS return
function divide(num1, num2){
    return num1 / num2
}

// console.log(divide(15,3))


// -----------------------------------------------------------------------------//
function greetSomeone(person) {
    if (person == "Martin") {
        return "Yo dawg, howz it goin?"
    }
    else {
        return "Greetings, Earthling!"
    }
}

// console.log(greetSomeone("Martin"))
// console.log(greetSomeone("Zibzarb"))


function test(){
    for(var i = 1; i < 50; i++){
        if(i % 5 == 0){
            return i
        }
    }
}

console.log(test())