/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    var age = window.prompt("Age: ");
    var gender = window.prompt("Gender: ");
    var town = window.prompt("Town: ");

    window.confirm("your age is " + age + " you are a " + gender + " you live in " + town);
})();
