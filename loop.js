
// 0 => 255
for (var number = 0; number < 256; number++) {
    console.log(number)
}

var number = 0
while (number < 256) {
    console.log(number)
    number++
}



// 255 => 0
for (var number = 255; number >= 0; number--) {
    console.log(number)
}


// PRINT ALL THE EVEN NUMBERS FROM 0 => 255
for (var num = 2; num < 256; num += 2) {
    console.log(num)
}

// PRINT ALL THE ODD NUMBERS FROM 0 => 255
for (var num = 1; num < 256; num += 2) {
    console.log(num)
}


// PRINT ALL THE MULTIPLES OF 3 FROM 0 => 255
for (var num = 0; num < 256; num++) {
    // MODULOUS GET THE REMAINDER OF THE DIVISION
    if (num % 3 == 0) {
        console.log(num)
    }
}


var roll = Math.ceil(Math.random() * 20) // GENEARTING A RANDOM NUMBER BETWEEN 1-20
while (roll != 20) {
    console.log("ROLL: ", roll)
    roll = Math.ceil(Math.random() * 20)
}
console.log("ROLL: ", roll)