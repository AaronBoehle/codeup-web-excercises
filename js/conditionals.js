"use strict";

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * if what the user enters is not a number, use an alert to tell them that, and
 * do *not* display any of the above information.
 *
 * Can you refactor your code to use functions?
 */


function oddOrEvenNumber (input) {
    var inputDivided = (parseFloat(input)%2);
    if (inputDivided === 0) {
        return alert(input + " is a EVEN number.");
    } else {
        return alert(input + " is a ODD number.");
    }
}
function numberPlus100 (input) {
    input = parseFloat(input);
    var inputSum = input + 100;
    return alert(input + " plus 100 equals a sum of " + inputSum);
}
function negativeOrPositiveNumber (input) {
    var x = parseFloat(input);
        if (x >= 0) {
            return alert(input + " is a POSITIVE number.");
        } else if (x <= 0) {
            alert(input + " is a NEGATIVE number.");
        } else {
            return alert("You thought you could trick me!");
    }
}

var enterANumber = confirm('Would you like to enter a number?');
    if (enterANumber) {
        var input = prompt("Enter any number known to mankind");
        switch (enterANumber) {
            case oddOrEvenNumber(input):
            case numberPlus100(input):
            case negativeOrPositiveNumber(input):
                break;
            default:
                if (isNaN(input)) {
                    alert("That's not a number, silly!");
                    break;
                }
        }
    } else {
        alert("Nevermind then!");
    }
/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message that related to that
 * color. Only worry about the colors defined below, if the color passed is not
 * one of the ones defined above, return a message that says so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */
function analyzeColor (colors) {
    colors = colors.toLowerCase();
    switch(colors) {
        case "red":
        return alert("Like the rose in the garden, unless it is dead.");
        case "orange":
        return alert("For those who drink OJ at least once per day.");
        case "yellow":
        return alert("The color you turn when you're a sickly fellow.");
        case "green":
        return alert('Just like "The Hulk," quite mean and lean.');
        case "blue":
        return alert("Like oceans and skylines with beautiful views.");
        case "indigo":
        return alert("Sort of like violet, but definitely different though!");
        case "violet":
        return alert("Makes things look royal however you style it!");
        default:
        return alert("This is a color of the rainbow which I do not know.");
    }
}
// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color everytime the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];

console.log(randomColor);
console.log(analyzeColor(randomColor));

var userColor = prompt("Which color should I talk about?");
console.log(analyzeColor(userColor));

/**
 * TODO:
 * Pass the `randomColor` variable to your function and console.log the results.
 * You should see a different message everytime you refresh the page
 */

/**
 * TODO:
 * Refactor your above function to use a switch-case statement
 */

/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */

/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * all for free!.
 *
 * Write a function named `calculateTotal` that accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */




var luckyNumber = Math.floor(Math.random() * 6);
var x;
    function calculateTotal (luckyNumber, totalAmount) {
        totalAmount = prompt("What is your total bill?");
        console.log(luckyNumber);
        if (luckyNumber === 0) {
            x = 0;
            return alert("No discount to apply. Your total is $" + totalAmount);
        } else if (luckyNumber === 1) {
            return alert("Your lucky number is 1. After a 10% discount, your total bill went from $" + totalAmount + "to" + (totalAmount-(totalAmount*.1)) )
        }
}

calculateTotal(luckyNumber);





/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 6.
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
//
