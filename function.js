// DEFINING A FUNCTION
// function addNum(num1, num2){ // 2 parameters
//     return num1 + num2
// }
// // CALL A FUNCTION
// console.log( addNum(2,3) )
// addNum(10,7)


// console.log VS return
function calcuateHypotenuse(legA, legB){
    var answer = Math.sqrt((legA * legA) + (legB * legB) )
    return answer
    console.log("Hey am I printing")
}
// var hypotenuse = calcuateHypotenuse(4,5)
// var hypotenuse_cm = hypotenuse * 2.2
// console.log("Hypotenuse in CM:" , hypotenuse_cm)


function test(){
    for(var i = 0; i < 21; i++){
        if(i == 7){
            return "seven"
        }
        else if(i == 5){
            return "five"
        }
    }
}
// console.log("OUTSIDE:",  test())

function what(greeting){
    if(greeting == "hello"){
        return "How are you?"
    }
    else if(greeting == "goodbye"){
        return "goodbye to you as well"
    }
    else{
        return "i'm not sure"
    }
}

console.log( what("goodbye") )
