// T-Diagrams

var num1 = 20;
var num2 = 5;
if (num1 < num2) {
    num2 = num2 * num1;
}
else {
    num1 = num1 / num2;
}
if (num1 < num2) {
    num1 = num1 * 2;
}
else if (num1 == num2) {
    num2 = num1 * num2;
}
else {
    num2 = num2 * 2;
}
console.log(num1);
console.log(num2);


// ---------------------------------------------------------------- //
x = 15
y = 30
z = 0

if (x >= 20 && y <= 15) {
    z = x * y
}
else if (x == 15 && y < 20) {
    z = x + y
}
else if (x == 15 && y == 20) {
    z = x * y
}
else {
    z = z + x / y
}
console.log(z)

// ---------------------------------------------------------------- //

var isSunny = true;
var temperature = 45; // let's assume degrees Fahrenheit
var isRaining = false;
var whatToBring = "I should bring: ";

if (isSunny) {
    whatToBring += "sunglasses, ";
}
if (temperature < 50) {
    whatToBring += "a coat, ";
}
if (isRaining) {
    whatToBring += "an umbrella, ";
}
whatToBring += "and a smile!";

console.log(whatToBring);


// ---------------------------------------------------------------- //
// ---------------------------------------------------------------- //
// ---------------------------------------------------------------- //

for(var i=0; i<10; i++) {
    console.log(i);
    i = i + 3; 
}
    
console.log("outside of the loop " + i);
// ---------------------------------------------------------------- //

for (var j = 1; j <= 15; j++) {
    if (j % 2 == 0) {
        j += 2;
    }
    else if (j % 3 == 0) {
        j++;
    }
    console.log(j);
}

// ---------------------------------------------------------------- //

for(var i=10; i>0; i--) {
    if(i != 2) {
        console.log(i);
    } else {
        console.log("ignition!");
    }
}
console.log("liftoff!");