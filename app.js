'use strict'
const selectBill = document.querySelector('#bill');
const selectPercentage = document.querySelector('#percentage');
const outputTip = document.querySelector('#tip');


const bill = selectBill.value;
const percentage = selectPercentage.value;
// console.log(outputTip);


console.log(bill);
console.log(percentage);

const btn = document.querySelector('.btn');
const calcTip = (bill, percentage) => bill * percentage / 100;
tip = calcTip(bill, percentage);
btn.addEventListener('click', () => {

})