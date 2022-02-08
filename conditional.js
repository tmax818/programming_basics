// WHEN A USER VISITS A WEBSITE CHECK TO SEE IF THE USER IS LOGGED IN

var loggedUser = false

if(loggedUser){
    console.log("The user is logged in, here is your personalized web page")
    console.log("Check the cookies to see if the cookies did not expire")
}
else{
    console.log("Direct them to the register/login page")
}


// AGE CHECKER

var age = 19
var hasLicense = false
// Alcohol, tobacco customer has to be older than 21
if(age >= 21){
    console.log("You can purchase some alcohol and tobacoo")
    console.log("You can purchase lottery tickets and over the counter medicine")
    console.log("Get a driver's license")
}
// Lottery, medication - 18
else if(age >= 18){
    console.log("You can purchase lottery tickets and over the counter medicine")
    console.log("Get a driver's license")
}
// Driver license - 16
else if(age >= 16){
    console.log("Get a driver's license")
}
else{
    console.log("Buy some hot cheetos")
}



if(age >= 16){
    console.log("Get a driver's license")
}
if(age >= 18){
    console.log("You can purchase lottery tickets and over the counter medicine")
}
if(age >= 21){
    console.log("You can purchase some alcohol and tobacoo")
}


