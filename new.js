// GIVEN AN ARRAY, CREATE A FUNCTION THAT ITERATE THROUGH AND PRINT ALL THE VALUES IN AN ARRAY

// DEFINING THE FUNCTION
function iteratePrint(arr){
    for(var i = 0; i < arr.length; i++){
        console.log(arr[i])
    }
}

// CALL(EXECUTE) THE FUNCTION
// iteratePrint(["a", "b", "c", "d", "e"])
// console.log("-----------------------------------")
// iteratePrint([9,8,7,6,5,4,3,2,1])

function reverseIterate(arr){
    for(var i = arr.length-1; i >= 0; i--){
        console.log(arr[i])
    }
}
reverseIterate([9,8,7,6,5,4,3,2,1])
console.log("-----------------------------------")
reverseIterate(["a", "b", "c", "d", "e"])
