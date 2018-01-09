// Exercise #1
// Write your solution below
var j = "";
for (var i=0; i <7; i++)
{
    
    j = j + "#";
    console.log(j);

}

/* 
Write your explanation for Exercise #1 here
My method for solving exercise one was done in a manner that started off my declaring
an empty string variable outside of the loop. This had to be done this way as no other
solution could be found. Moving on, using a range of 7 (from the example output), I simply
made the loop append each time the loop ran.
*/





// Exercise #2
// Write your solution below
function isEven(number)
{
    if (number%2 == 0) {
    console.log('the number is even!')
    }
    else {
    console.log('the number is odd!')
    }
}

/* 
Write your explanation for Exercise #2 here
Using the modulous operator, I can check to see if the number has a remainder
of 0 or 1 if divided by 2. This will then print even or odd respectively.
*/
