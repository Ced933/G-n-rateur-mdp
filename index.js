"use strict";
const generateButton = document.querySelector('#generate-button');
const datalowerCase = "azertyuiopmlkjhgfdsqwxcvbn";
const dataUpperCase = datalowerCase.toUpperCase();
const dataNumbers = "1234567890";
const dataSymbole = "ù%`£*$-_àç!è§('+é&@#<>";
const uppercase = document.getElementById('uppercase');
console.log(dataUpperCase);
function generatePassword() {
    console.log('je génere un mot de passe');
    console.log(uppercase.checked);
}
generateButton.addEventListener('click', generatePassword);
