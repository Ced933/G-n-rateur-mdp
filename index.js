"use strict";
const generateButton = document.querySelector('#generate-button');
const datalowerCase = "azertyuiopmlkjhgfdsqwxcvbn";
const dataUpperCase = datalowerCase.toUpperCase();
const dataNumbers = "1234567890";
const dataSymbole = "ù%`£*$-_àç!è§('+é&@#<>";
let range = document.getElementById('display-password-length');
let passwordOutPut = document.getElementById('password-output');
// checkbox 
const lowercase = document.getElementById('lowercase');
const uppercase = document.getElementById('uppercase');
const number = document.getElementById('number');
const symbole = document.getElementById('symbole');
// .checked = est ce que linput a été cliqué
console.log(dataUpperCase);
function generatePassword() {
    let data = [];
    if (lowercase.checked)
        data.push(...datalowerCase);
    if (uppercase.checked)
        data.push(...dataUpperCase);
    if (number.checked)
        data.push(...dataNumbers);
    if (symbole.checked)
        data.push(...dataSymbole);
    // console.log(data.length)
    // On va créer un array pour pouvoir mettre le password dedans 
    let password = [];
    // on va créer une fonction qui va nous renvoyer un chiffre de la taille de notre data c'est a dire s'il y a tous les type checké lowcase upper case number et symbol il y a 84 choix en tout 
    const letterRandom = () => { return Math.floor(Math.random() * data.length); };
    //  la fonction retourn un nombre 
    if (data.length === 0) {
        alert('Veuillez séléctionner des critères ');
        // mettre un return arrete la fonction il n'ira pas plus loin 
        return;
    }
    // boucle for tant qu i sera inférieur a range notre curseur pour choisir le nombre de carractere qu'on veut pour notre mot de passe par default 8
    for (let i = 1; i <= range.value; i++) {
        // A chaque tour de boucle la fonction letterRandom sera rejoué 
        // dans notre array password sera pushé un des caractère ex: data[6]
        password.push(data[letterRandom()]);
        // on peut aussi faire ça 
        // password += data[Math.floor(Math.random()*data.length)]
    }
    console.log(password.join(''));
    // .join('') pour casser le tableau 
    passwordOutPut.value = password.join('');
    // maintenant pour copier et coller le texte automatiquement 
    // selectionner le texte 
    passwordOutPut.select();
    // copié
    navigator.clipboard.writeText(passwordOutPut.value);
    generateButton.innerHTML = 'copié !';
    setTimeout(() => {
        generateButton.innerHTML = 'Générer mot de passe';
    }, 500);
}
generateButton.addEventListener('click', generatePassword);
