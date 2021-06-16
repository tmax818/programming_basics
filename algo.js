/* 
'||    ||'  ..|''||   '|.   '|' '||''|.       |     '||' '|' 
 |||  |||  .|'    ||   |'|   |   ||   ||     |||      || |   
 |'|..'||  ||      ||  | '|. |   ||    ||   |  ||      ||    
 | '|' ||  '|.     ||  |   |||   ||    ||  .''''|.     ||    
.|. | .||.  ''|...|'  .|.   '|  .||...|'  .|.  .||.   .||. 

Countdown by Fours
Print positive numbers starting with 2020, counting down by fours (excluding 0)
    Challenge:Do this with a FOR loop first and then do it using a WHILE loop afterwards

Level Up: Flexible Countdown
Based on Countdown by fours, write a function that, given parameters of "lowNum", "highNum", and "mult", 
print all multiples of "mult" from "highNum" to "lowNum" using a for loop
Example: flexCount(2,9,3), it will print 9 6 3 on succesive lines.
Example: flexCount(2,16,3), it will print 15 12 9 6 3 on succesive lines.
Example: flexCount(1, 18, 4) => 16, 12, 8, 4

function flexCount(lowNum, highNum, mult){
    // YOUR CODE GOES
    // For loop that iterates from highNum to lowNum
        // Use the modulous operator to find multiples
}

flexCount(2, 9, 3)


Sensei Bonus:
This is based on "Flexible Countdown." The parameter names are not as helpful, but the problem is essentially identical; don't be trown off! 
Given 4 parameters (param1, param2, param3, param4), print the multiples of param1, starting at param2, and extending to parm3.
There's one exception: if a multiple is equal to param4, then  skip it (don't print it). Do this using a while loop.
Example: Given (3,5,17,9), the output should be 6,12,15 on succesive lines, because 6,12, and 15 are multiples of 3, 
between 5 and 17, and excludes the value of 9.
*/

function flexCountdown(param1, param2, param3, param4){
    var start = param2
    var end = param3
    var mult = param1
    // CREATE A WHILE LOOP THAT STARTS AT PARAM2 TO PARAM3
    while(start < end){
        // PRINT MULITPLES OF PARAM1
        // IF THE MULTIPLE IS EQUAL TO PARAM4, DO NOT PRINT MULTIPLE
        if(start % mult == 0){
            if(start != param4){
                console.log(start)
            }
        }
        start++
    }
}

// flexCountdown(3, 5, 18, 12)



/* 

|''||''| '||'  '|' '||''''|   .|'''.|  '||''|.       |     '||' '|' 
   ||     ||    |   ||  .     ||..  '   ||   ||     |||      || |   
   ||     ||    |   ||''|      ''|||.   ||    ||   |  ||      ||    
   ||     ||    |   ||       .     '||  ||    ||  .''''|.     ||    
  .||.     '|..'   .||.....| |'....|'  .||...|'  .|.  .||.   .||.   

GREATER THAN SECOND
Create a function that accepts an array filled with numbers, find the SECOND LARGEST number and
return that number

Example: [1,2,3,4,5,6] => 5
Example: [6,4,8,10, 34, 14] => 14
Example: [-6,-9,5,-2,0] => 0
*/

function secondLargest(array){
    // ITERATE THROUGH THE ARRAY (FOR LOOP)
    // FIND THE LARGEST NUMBER IN THE ARRAY
    var max = array[0]
    for(var i = 0;i < array.length; i++ ){
        if(array[i] > max){
            // WE FOUND A BIGGER NUMBER THAN MAX, SO WE REPLACE MAX WIHT THE BIGGER NUMBER
            max = array[i]
        }
    }
    // THEN ITERATE THROUGH AND FIND THE SECOND LARGEST
    var secondMax = array[0]
    for(var i = 0; i < array.length; i++){
        if(array[i] > secondMax && array[i] != max ){
            secondMax = array[i]
        }
    }
    // RETURN THAT NUMBER
    return secondMax
}
console.log(secondLargest([-6,-9,5,-2,0]))
console.log(secondLargest([6,4,8,10, 34, 14]))
console.log(secondLargest([1,2,3,4,5,6]))

/*
'|| '||'  '|' '||''''|  '||''|.   '|.   '|' '||''''|   .|'''.|  '||''|.       |     '||' '|' 
 '|. '|.  .'   ||  .     ||   ||   |'|   |   ||  .     ||..  '   ||   ||     |||      || |   
  ||  ||  |    ||''|     ||    ||  | '|. |   ||''|      ''|||.   ||    ||   |  ||      ||    
   ||| |||     ||        ||    ||  |   |||   ||       .     '||  ||    ||  .''''|.     ||    
    |   |     .||.....| .||...|'  .|.   '|  .||.....| |'....|'  .||...|'  .|.  .||.   .||.   

EVENS AND ODDS!

Create a function that accepts an array of numbers. Every time that array
has 3 odd values in a row, print "That's odd!" Every time the array has 3 even values
in a row, print "Even more so!"

Only print the messages when it's 3 in a row. If there are 5 consecutive odd
values, for example, it should only print the message one time. If there are 7 consecutive
even values, it should print the message two times.

EXAMPLES:
------------------------------------
[1,3,5,8,8,8]
OUTPUT:
That's Odd
Even more so!

------------------------------------
[1,2,3,4,5,6,7,8]
OUTPUT:

------------------------------------
[2,2,1,1,6,6,5,5,5]
OUTPUT:
That's odd!

------------------------------------
[1,1,1,3,3]
OUTPUT:
That's odd!
*/

// CREATE A FUNCTION WITH A PARAMETER THAT ACCEPTS AN ARRAY
    // ITERATE THROUGH THE ARRAY
    // CHECK TO SEE IF EACH NUMBER IS ODD OR EVEN
    // USE A VARIABLE TO KEEP TRACK OF NUMBER OF TIMES WE SEE EVEN OR ODD (RESET THE COUNTER FOR THE OTHER VARIABLE )
    // HINT: WE ARE GOING TO KEEPING TRACK OF NUMBER OF EVEN OR ODDS WE SEE SO FAR
    // HINT: THE COUNTERS ARE GOING TO NEED TO BE RESET WHEN YOU REACH 3 NUMBERS CONSECUTIVE OR THE OPPOSITE NUMBER SHOWS 







/* 
|''||''| '||'  '||' '||'  '|' '||''|.    .|'''.|  '||''|.       |     '||' '|' 
   ||     ||    ||   ||    |   ||   ||   ||..  '   ||   ||     |||      || |   
   ||     ||''''||   ||    |   ||''|'     ''|||.   ||    ||   |  ||      ||    
   ||     ||    ||   ||    |   ||   |.  .     '||  ||    ||  .''''|.     ||    
  .||.   .||.  .||.   '|..'   .||.  '|' |'....|'  .||...|'  .|.  .||.   .||.
ALWAYS HUNGRY
Create a funciton that accepts an array, and prints "yummy"
each time one of the values is equal to "food". If no array
values are "food", then print "I'm hungry" once.


Example: Given array [1, 4, "food", "hello", true, "food"]
Output:
yummy
yummy
--------------------------------------------------------------
Example: Given array [2, true, 5, "hello", 9, "four"]
Output:
I'm hungry
*/