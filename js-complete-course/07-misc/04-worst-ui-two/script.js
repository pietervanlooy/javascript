/* becode/javascript
 *
 * /07-misc/04-worst-ui-two/script.js - 7.4: la pire interface (2) : phone clicker
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.
(function() {

    const btns = document.getElementsByTagName('button');
    for (let i=0;i<btns.length;i++){
        btns[i].addEventListener('click',()=>{
            let min = parseInt(btns[i].getAttribute('data-min'));
            let max = parseInt(btns[i].getAttribute('data-max'));
            let value = parseInt(btns[i].innerHTML);
            if (value < max) {
                value++;
                btns[i].innerHTML = (value < 10) ? `0${value}` : value;
            }

            let num='';
            for (let j=0;j<btns.length;j++){
                num += btns[j].innerHTML;
            }

            document.getElementById('target').innerHTML = `0${num}`;
        })
    }
})();
