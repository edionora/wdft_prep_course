/*
Exercise #1
Create a variable named "numbers" and assign an empty array to it.
*/
var numbers = new Array ();
console.log('Hello World!');

/*
Exercise #2
Using the loop provided for you below, use the array push method to insert the numbers 1 to 10 into the array.
*/


/* The given for loop provided does not insert 1 to 10. It does 0 to 9
for(var i=0;i<10;i++) */
for(var i=1;i<=10;i++) { //This is the correct parameters if
                         // 1 to 10 is desired to be inserted
    //use the array push() method here.
    numbers.push(i);
}

/*
Exercise #3
Test that you used the array push method correctly by console logging the first item in the array. Console log the last item in the array afterwards.
*/
console.log(numbers[0]);
console.log(numbers[9]);

/*
Exercise #5
Create an empty object and assign it to the variable car below.
Give the car object a property called "colour" and assign it the value of "black". Test that your code works correctly by outputting the "colour" property to the console. You should see the value "black" printed out.
*/
var car = {
    colour: 'Black'
}
console.log(car.colour);

