/* 
 __  __  ____  _   _ _____      __     __
|  \/  |/ __ \| \ | |  __ \   /\\ \   / /
| \  / | |  | |  \| | |  | | /  \\ \_/ / 
| |\/| | |  | | . ` | |  | |/ /\ \\   /  
| |  | | |__| | |\  | |__| / ____ \| |   
|_|  |_|\____/|_| \_|_____/_/    \_\_|   

Countdown by Fours
Write a function that prints positive numbers starting with 2020, counting down by fours (excluding 0)
    Challenge:Do this with a FOR loop first and then do it using a WHILE loop afterwards

Level Up: Flexible Countdown
Based on Countdown by fours, write a function that, given parameters of "lowNum", "highNum", and "mult", 
print all multiples of "mult" from "highNum" to "lowNum" using a for loop
Example: flexCount(2,9,3), it will print 9 6 3 on succesive lines.
Example: flexCount(2,16,3), it will print 15 12 9 6 3 on succesive lines.
Example: flexCount(1, 18, 4) => 16, 12, 8, 4

Sensei Bonus:
This is based on "Flexible Countdown." The parameter names are not as helpful, but the problem is essentially identical; don't be trown off! 
Given 4 parameters (param1, param2, param3, param4), print the multiples of param1, starting at param2, and extending to parm3.
There's one exception: if a multiple is equal to param4, then  skip it (don't print it). Do this using a while loop.
Example: Given (3,5,17,9), the output should be 6,12,15 on succesive lines, because 6,12, and 15 are multiples of 3, 
between 5 and 17, and excludes the value of 9.

*/

function countdownByFours(){

}

function flexCountdown(lowNum, highNum, mult){

}

function flexCountdownSensei(param1, param2, param3, param4){
    
}


/*
'|| '||'  '|' '||''''|  '||''|.   '|.   '|' '||''''|   .|'''.|  '||''|.       |     '||' '|' 
 '|. '|.  .'   ||  .     ||   ||   |'|   |   ||  .     ||..  '   ||   ||     |||      || |   
  ||  ||  |    ||''|     ||    ||  | '|. |   ||''|      ''|||.   ||    ||   |  ||      ||    
   ||| |||     ||        ||    ||  |   |||   ||       .     '||  ||    ||  .''''|.     ||    
    |   |     .||.....| .||...|'  .|.   '|  .||.....| |'....|'  .||...|'  .|.  .||.   .||.   
GREATER THAN SECOND
Create a function that accepts an array filled with numbers, find the SECOND LARGEST number and
return that number
Example: [1,2,3,4,5,6] => 5
Example: [6,4,8,10, 34, 14] => 14
Example: [-6,-9,5,-2,0] => 0
*/

// ITERATE THROUGH THE ARRAY AND FIND THE LARGEST NUMBER
// ITERATE THROUGH THE ARRAY AGAIN AND FIND THE SECOND LARGEST NUMBER
// RETURN THE NUMBER