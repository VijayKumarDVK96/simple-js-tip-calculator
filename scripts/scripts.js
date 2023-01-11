'use strict';

let amount = document.getElementById('amount');
let services = document.getElementById('services');
let persons = document.getElementById('persons');
let total_tip = 0;
let per_person = 0;
let tip_display = document.getElementsByClassName('tip');
let total_display = document.getElementById('total');
let each_display = document.getElementById('each');

/*
By getting the bill amount, calculate the percentage so that total tip will be processed. After that divide the total tip by number of person and calculate the per person tip amount.
*/

document.querySelector('#calculate').addEventListener('click', function(e) {
    e.preventDefault();
    total_tip = services.value * amount.value;
    per_person = total_tip / persons.value;

    tip_display[0].style.display = 'block';

    total_display.innerText = total_tip.toFixed(2);
    each_display.innerText = per_person.toFixed(2);
});