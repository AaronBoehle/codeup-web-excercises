(function(){
    "use strict";

    var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    var planetsArray = planetsString.split('|');
    var planetsBreak = planetsArray.join("<br>");

    /**
     * TODO:
     * Convert planetsString to an array, and save it in a variable named
     * planetsArray.
     * console.log planetsArray to check your work
     */

     console.log(planetsArray);
     console.log(planetsBreak);
    /**
     * TODO:
     * Create a string with <br> tags between each planet. console.log() your
     * results. Why might this be useful?
     */

    console.log("Adding '< br >' logged all planets as a single string, including the breaks as part of said text. We can then specify/manipulate these breaks using JavaScript functions.");

     /**
     * BONUS:
     * Create another string that would display your planets in an undordered
     * list. You will need an opening AND closing <ul> tags around the entire
     * string, and <li> tags around each planet.
     */

     document.body.innerHTML += "<ul><li>"
        + planetsArray.join("</li><li>") + ("</li><ul>");
})();
