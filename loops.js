// FOR LOOPS

// 1 => 255
for(var number = 0; number < 256; number++){
    console.log(number)
}

// 255 => 1
for(var number = 255; number > 0; number--){
    console.log(number)
}

// PRINT ALL THE EVEN NUMBERS FROM 0 => 255
for(var num = 0; num <= 255; num += 2){
    console.log(num)
}

for(var num = 0; num <= 255; num++){
    if(num % 2 === 0){
        console.log(num)
    }
}



// PRINT ALL THE ODD NUMBERS FROM 1 => 255
for(var num = 0; num <= 255; num++){
    if(num % 2 === 1){
        console.log(num)
    }
}


// WHILE LOOPS
var roll = Math.ceil(Math.random() * 20) // GENEARTING A NUMBER BETWEEN 1- 20
while(roll !== 20){
    console.log("ROLL: ", roll)
    roll = Math.ceil(Math.random() * 20)
}
console.log("OUTSIDE THE LOOP: ", roll)




var listening = true
while(listening){
    Music.play()
}