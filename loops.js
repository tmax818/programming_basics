// DRY - Don't Repeat Yourself



// FOR LOOPS
// 1. CREATING A VARIABLE i and setting value of 0
// 2. SETTING A CONDTION FOR THE LOOP
// 3. ADDING ONE TO i
// 4. EXECUTING THE CODE BODY

// 1 -> 2 -> 4 -> 3 -> 2 -> 4 -> 3 -> 2 -> 4 -> 3

//     1         2      3
// for(var i = 0; i < 11; i++){
//     // 4
//     console.log(i)
// }


// for(var i = 255; i >= 0; i--){
//     console.log(i)
// }

// USING A FOR LOOP PRINT ALL EVEN NUMBERS FROM 0 - 255
for(var i = 0; i < 255; i++){
    if(i % 4 == 0){
        console.log(i)
    }
}

// D20
var roll = Math.floor(Math.random() * 21)
while(roll != 20){
    roll = Math.floor(Math.random() * 21)
    console.log(`You rolled a ${roll}`)
}
console.log("Congrats you rolled Nat 20")






// WHILE LOOPS

// // PREDICT 1
for(var num = 0; num < 15; num++){
    console.log(num);
}



// // PREDICT 2
for(var i = 1; i < 10; i+=2){
    if(i % 3 == 0){
        console.log(i);
    }
}

// // PREDICT 3
for(var j = 1; j <= 15; j++){
    if(j % 2 == 0){
        j+=2;
    }
    else if(j % 3 == 0){
        j++;
    }
    console.log(j);
}
console.log(j)



