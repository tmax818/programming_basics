// DEFINE THE FUNCTION
function print1to50(){
    for(var x = 1; x < 51; x++){
        console.log(x)
    }
}

// CALL THE FUNCTION
// print1to50()
// print1to50()
// print1to50()

// DEFINE THE FUNCTION
function add(num1, num2){
    return num1 + num2
}
// CALL THE FUNCTION
// var somethingFromFunction = add(3,4)
// console.log(somethingFromFunction)

// console.log(add(7,7))

// DEFINE THE FUNCTION
function greeting(name){
    console.log("THIS IS THE GREETING FUNCTION")
    if(name === "Edward"){
        return "Hello Edward"
    }
    else{
        return "Hello anyone else"
    }
}

// CALLING THE FUNCTION
// console.log(greeting("Edward"))






// DEFINE THE FUNCTION
function test(){
    console.log("this is a print statement")
    return "hello world"
}

// CALL THE FUNCTION
// console.log(test())



// DEFINING THE FUNCTION
function test(){
    for(var i = 1; i < 50; i++){
        return i
    }
}

// CALL THE FUNCTION
console.log(test())