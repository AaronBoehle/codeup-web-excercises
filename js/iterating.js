    "use strict";
    /**
     * TODO:
     * Create an array of 4 people's names and store it in a variable called
     * 'names'.
     */
    /**
     * TODO:
     * Create a log statement that will log the number of elements in the names
     * array.
     */
    /**
     * TODO:
     * Create log statements that will print each of the names individually by
     * accessing each element's index.
     */
    /**
     * TODO:
     * Write some code that uses a for loop to log every item in the names
     * array.
     */
    /**
     * TODO:
     * Refactor your above code to use a `forEach` loop
     */
    /**
     * TODO:
     * Create the following three functions, each will accept an array and
     * return an an element from it
     *
     * - first: returns the first item in the array
     * - second: returns the second item in the array
     * - last: returns the last item in the array
     *
     * Example:
     *  > first([1, 2, 3, 4, 5]) // returns 1
     *  > second([1, 2, 3, 4, 5]) // returns 2
     *  > last([1, 2, 3, 4, 5]) // return 5
     */

    var names = ['Jack', 'Jim', 'Johnny', 'Jose'];
    console.log(names.length);
    console.log(names[0]);
    console.log(names[1]);
    console.log(names[2]);
    console.log(names[3]);

    /**
     * for (var i = 0; i<names.length; i++) {
     *     console.log("Horsemen #"+i+" is "+names[i]".");
     */

    names.forEach(function(names) {
        console.log("Meet Horsemen "+names+".");
    });

    function first(names) {
        return names[0];
    }
    function second(names) {
        return names[1];
    }
    function last(names) {
        return names[names.length -1];
    }

    //Exercise 1:
    // Write a function named oneHundred() that returns an array with integers starting at 1 and ending at 100;
    //

    function oneHundred() {
        var integers = [];
        for (var i=0;i<=99;i++) {
            integers[i] = i+1;
        }
        return integers;
    }
    console.log(oneHundred());

    // Exercise 2:
    // Write a function named reverse() that takes in an array and returns a reversed copy of the provided array. This function should not alter the orignal array sent into it.
    //

    function reverse(input) {
        var output=[];
        for (var i=input.length-1; i>=0; i--) {
            output.push(input[i]);
        }
        return output;
    }
    console.log(reverse((oneHundred())));

    // Exercise 3:
    // Write a function named sumAll() that takes in an array of numbers and returns the sum of all the numbers. Use sumAll() on oneHundred() to get the sum of all numbers 1 + 2 + 3... + 100
    //

    function sumAll (input) {
        var sum=0;
        input.forEach(function (input) {
            sum += input;
        });
        return sum;
    }
    console.log(sumAll(oneHundred()));

    // Exercise 4:
    // Write a function named multiplyAll() that takes in an array of numbers and returns the product of all numbers. Use multiplyAll on oneOnehundred() to get the product of 1*2*3*...100

    function multiplyAll (input) {
        var product=1;
        input.forEach(function (input) {
            product *= input;
        });
        return product;
    }
    console.log(multiplyAll(oneHundred()));


