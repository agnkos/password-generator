const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?",
    "/"];
const symbLess = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const numLess = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?",
    "/"];
const numSymbLess = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

let passEl = document.getElementById('pass-el');
let passEl2 = document.getElementById('pass-el2');
let chosenArray = [];

function chooseArray() {
    let numCheck = document.getElementById('numbers');
    let symbCheck = document.getElementById('symbols');
    if (numCheck.checked && symbCheck.checked) {
        chosenArray = characters;
    } else if (numCheck.checked && !symbCheck.checked) {
        chosenArray = symbLess;
    } else if (!numCheck.checked && symbCheck.checked) {
        chosenArray = numLess;
    } else {
        chosenArray = numSymbLess;
    }
}

function generatePassword() {
    let passLength = document.getElementById('pass-length').value;
    passEl.innerHTML = '';
    passEl2.innerHTML = '';
    let errorMsg = document.getElementById('error-msg');
    if (!passLength) {
        errorMsg.textContent = 'You must choose length'
    } else if (passLength < 1 || passLength > 20) {
        errorMsg.textContent = 'Type in correct number'
    }
    else {
        errorMsg.textContent = '';
        for (let i = 0; i < passLength; i++) {
            chooseArray();
            let randomChar = Math.floor(Math.random() * chosenArray.length)
            passEl.textContent += chosenArray[randomChar];
            let randomChar2 = Math.floor(Math.random() * chosenArray.length)
            passEl2.innerHTML += chosenArray[randomChar2];
        }
        console.log(passLength)
    }
}

function copyPassword(passwordElementId, showElementId, number) {
    let passEl = document.getElementById(passwordElementId);
    let showEl = document.getElementById(showElementId);
    let copyText = passEl.textContent;
    navigator.clipboard.writeText(copyText);
    console.log(`Password ${number} copied!`);
    if (!showEl.classList.contains('show')) {
        showEl.classList.add('show');
    }
    setTimeout(function () {
        showEl.classList.remove('show')
    }, 2000)
}