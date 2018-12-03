(function() {
    "use strict";

    // create a circle object
    var circle = {
         radius: 3,

        getArea: function () {
            var totalArea = Math.PI * (Math.pow(this.radius, 2));
            // TODO: complete this method
            // hint: area = pi * radius^2
            return Number(totalArea);
            // TODO: return the proper value
        },

        logInfo: function (doRounding) {
            doRounding = circle.getArea();
            // TODO: complete this method.
            if (doRounding %1 !==0) {
                return Math.round(circle.getArea());
            } else {
                return false;
            }
            // If doRounding is true, round the result to the nearest integer.
            // Otherwise, output the complete value
        }
    };

    circle.getArea();

    // log info about the circle
    console.log("This raw circle has a radius of "+ circle.radius[0]+" units.");
    circle.logInfo(false);
    console.log("The circle has an exact radius of "+circle.getArea(circle.radius[0])+".");
    circle.logInfo(true);
    console.log("Rounded to the nearest whole integer, this circles radius is " +circle.logInfo());



    console.log("=======================================================");
    // TODO: Change the radius of the circle to 5.
    circle.radius = 5;
    // log info about the circle
    console.log("This raw circle has a radius of "+ circle.radius+" units.");
    console.log("The circle has an exact radius of "+circle.getArea(circle.radius)+".");
    circle.logInfo(true);
    console.log("Rounded to the nearest whole integer, this circles radius is " +circle.logInfo(circle.radius));
})();
