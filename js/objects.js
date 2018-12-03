/**
 * TODO:
 * Create an object with firstName and lastName properties that are strings
 * with your first and last name. Store this object in a variable named
 * `person`.
 *
 * Example:
 *  > console.log(person.firstName) // "Rick"
 *  > console.log(person.lastName) // "Sanchez"
 */
/**
 * TODO:
 * Add a sayHello method to the person object that returns a greeting using
 * the firstName and lastName properties.
 * console.log the returned message to check your work
 *
 * Example
 * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
 */

    "use strict";

    var person = {};
        person.firstName = 'Aaron';
        person.lastName = 'Boehle';
        person.sayHello = function () {
            return "Hello from Aaron Boehle!";
        };

    console.log(person.firstName);
    console.log(person.lastName);
    console.log(person.sayHello());

    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

     var shoppers = [
         {name: 'Cameron', amount: 180},
         {name: 'Ryan', amount: 250},
         {name: 'George', amount: 320}
     ];

     shoppers.forEach(function (shoppers) {
         if (shoppers.amount>200) {
             var discount = parseFloat(shoppers.amount*.12);
             var newTotal = shoppers.amount - discount;
             console.log(shoppers.name + " spent $" + shoppers.amount.toFixed(2) +" on their HEB products. For spending more than $200.00, we are giving " + shoppers.name  +" a 12% discount of $" + discount.toFixed(2) + " for a final total of $" + newTotal.toFixed(2) + "!");
         } else {
             var discountNeedsMoney = 200-shoppers.amount;
            console.log(shoppers.name + " spend $" + shoppers.amount.toFixed(2)+ " on their HEB products. In order to receive a 12% discount on their total purchase, "+ shoppers.name + " must spend at least $"+ discountNeedsMoney.toFixed(2) + " more!.");
         }
     });



    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */
    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */



        var books = [
            {
                title: "Harry Potter and the Goblet of Fire",
                author:
                        {
                            firstName: "J.K.",
                            lastName: "Rowling"
                        }
            },
            {
                title: "The 7 Habits of Highly Effective People",
                author:
                        {
                            firstName: "Stephen",
                            lastName: "Covey"
                        }

            },
            {
                title: "The Hobbit",
                author:
                        {
                            firstName: "J.R.",
                            lastName: "Tolkien"
                        }
            },
            {
                title: "The Rise and Fall of the Third Reich",
                author:
                        {
                            firstName: "William",
                            lastName: "Shirer"
                        }
            },
            {
                title: "Da Vinci",
                author:

                        {
                            firstName: "Walter",
                            lastName: "Issaacson"
                        }
            }
            ];

        function createBook(title, author) {
            var name = author.split(' ');
            return {
                title: title,
                author: {
                    firstName: name[0],
                    lastName: name[1]
                }
            }
        }

        books.push(createBook("Einstein", "Walter Isaaccson"));

        function showBookInfo (books) {
            console.log("Title: " + books.title + "\nAuthor: " + books.author.firstName + ' ' + books.author.lastName);
}
            books.forEach(function(books, index) {
                console.log("Book #" + (index+1));
                showBookInfo(books);
            });








    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     *
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */

