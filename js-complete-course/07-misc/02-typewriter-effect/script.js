/* becode/javascript
 *
 * /07-misc/02-typewriter-effect/script.js - 7.2: effet machine à écrire
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {


    let target = document.getElementById('target');

    let str = target.innerHTML.replace(/\s{2,}/g,' ');
    let strArray = str.split('');
    target.innerHTML ='';
    let i=0;
    let time=200;
    setInterval(() => {
        if (i<strArray.length){
            target.innerHTML += strArray[i];
        }
        i++;
    }, time);
})();
