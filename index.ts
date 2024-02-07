const generateButton:any = document.querySelector('#generate-button')
const datalowerCase = "azertyuiopmlkjhgfdsqwxcvbn";
const dataUpperCase = datalowerCase.toUpperCase();
const dataNumbers = "1234567890";
const dataSymbole = "ù%`£*$-_àç!è§('+é&@#<>";

const uppercase:any = document.getElementById('uppercase')
console.log(dataUpperCase);
function generatePassword(){
    console.log('je génere un mot de passe');
    console.log(uppercase.checked);
    
}

generateButton.addEventListener('click',generatePassword)