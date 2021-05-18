'use strict'
const selectBill = document.querySelector('#bill');
const selectPercentage = document.querySelector('#percentage');
const outputTip = document.querySelector('#tip');
const total = document.getElementById('total');


let bill = selectBill.value;
bill = Number(bill);
const percentage = selectPercentage.value;

const btn = document.querySelector('.btn');
const calcTip = (bill, percentage) => bill * percentage / 100;
tip = calcTip(bill, percentage);
btn.addEventListener('click', () => {
    outputTip.innerHTML = tip;
    total.innerHTML = `${tip + bill}`;
})

const reset = () => {
    window.location.reload();
}

selectBill.addEventListener('change', reset);
selectPercentage.addEventListener('change', reset);