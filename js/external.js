"use strict";
console.log('Hello from external JavaScript');
alert("Welcome to my Website!");



// COLOR QUESTION
var userInput = prompt('What\'s your favorite color?');
console.log('The user entered: ' + userInput);
alert("Awesome, " + userInput.toLowerCase() + " is my favorite color too!");

//  RENTAL COST
alert("Let\'s determine your movie rental cost!");
var Price_per_day = 3.00;
var movieInput1 = prompt('How many days will you be renting "The Little Mermaid?"');
console.log('The user entered: ' + movieInput1);
var LittleMermaid = (movieInput1 * Price_per_day);
var movieInput2 = prompt('How many days will you be renting "Brother Bear?"');
console.log('The user entered: ' + movieInput2);
var BrotherBear = (movieInput2 * Price_per_day);
var movieInput3 = prompt('How many days will you be renting "Hercules?"');
console.log('The user entered: ' + movieInput3);
var Hercules = (movieInput3 * Price_per_day);
var Rental_Cost_Total = (LittleMermaid) + (BrotherBear) + (Hercules);
alert("Your total rental cost is " + "$" + Rental_Cost_Total);

// CONTRACTOR INCOME
alert("Let's calculate your income!");
var Google = 400.00;
var hourInput1 = prompt('How many hours did you work at Google?');
console.log('The user entered: ' + hourInput1);
var Amazon = 380.00;
var hourInput2 = prompt('How many hours did you work at Amazon?');
console.log('The user entered: ' + hourInput2);
var Facebook = 350.00;
var hourInput3 = prompt('How many hours did you work at Facebook?');
console.log('The user entered: ' + hourInput3);
var Total_Income = (Google * hourInput1) + (Amazon * hourInput2) + (Facebook * hourInput3);
alert("Your total income is: " + "$" + Total_Income);


//STUDENT ENROLLMENT
var classHasRoom = true;
var classScheduleGood = true;

var canBeEnrolled = classHasRoom && classScheduleGood;

// PRODUCT OFFER
alert("You may qualify for a product discount!");
var offer_is_valid = true;
var premium_member = false;
var regular_member = true;
var product_total = prompt("How many items are you purchasing today?");
console.log('The user entered: ' + product_total);
var discount_applied = ((premium_member) || (regular_member && (product_total > 2))) && offer_is_valid;

if (discount_applied) {
    alert("Congrats! Your product discount has been applied.");
}
else {
    alert("Sorry, we cannot apply your product discount due to 1 or more errors.");
}

//PASSWORD
var username = 'codeup';
var password = 'notastrongpassword';

var passworIsLongEnough = password.length >= 5;
var passwordIncludesUsername = password.includes(username);
var userNameIsShortEnough = username.length <= 20;
var noWhiteSpace = (password === password.trim() && username === username.trim());

var credentialsAreGood =    passworIsLongEnough &&
    !passwordIncludesUsername &&
    userNameIsShortEnough &&
    noWhiteSpace;