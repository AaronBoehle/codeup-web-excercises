"use strict";


    var reportContents = "Monthly Sales Report\nDate: 03-17-2015\nOffice: Codeup\n ===================================================\nEmployee Number, First Name, Last Name, Sales Units\n***************************************************\n\n1, Jane, Janeway, 3\n3, Tricia, Triciason, 5\n4, Jeannette, Jeanson, 4\n5, Charles Emmerson III, Winchester, 2\n6, Chet, Chedderson, 8\n7, Chaiam, Chaiamson, 12\n8, Dale, Dalesinger, 1\n9, Zig, Ziglar, 50\n10, Henry, Kissinger, 1\n11, Arthur Herbert, Fonzarelli, 23\n12, Betty, Boop, 67";
    var reportArray = reportContents.split('\n');
    console.log(reportArray);

    // ISOLATES TABLE VARIABLES //
    var indexString = reportArray.slice(4,5);
    var indexArray = indexString[0].split(",");
    console.log(indexArray);

    // TOTAL # OF EMPLOYEES & INDEX OF PERFORMANCE DATA //
    var employeeIndex = reportArray.slice(7, 17);
    console.log(employeeIndex);
    console.log("There are a total of "+employeeIndex.length+" employees.");

    // ARRAY OF INDIVIDUAL EMPLOYEE INFO //
    var totalUnitSold = 0;
    employeeIndex.forEach(function (employeeIndex) {
        var employeeDetail = employeeIndex.split(',');
        console.log(employeeDetail);


    });

// var totalNumberOfEmployees = ;
// var averageUnitsSoldPerEmployee ;
// var orderedList = ;



// Output should include:
// - total number of employees
// - total number of units sold
// - avg units sold per employee
// - Then output should share employee production, ordered from highest to lowest # of units

// * Units   |     Full Name       |   Employee Number
// * 5             Bob Boberson        2
//

