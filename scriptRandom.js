const resultEl = document.getElementById("result")
const lengthEl = document.getElementById("length")
const upperCaseEl = document.getElementById("upperCase")
const lowerCaseEl = document.getElementById("lowerCase")
const numberEl = document.getElementById("numbers")
const symbolEl = document.getElementById("symbolSign")
const generateEl = document.getElementById("generate")
/*counter and slider input*/
const rangeNumber = document.getElementsByClassName("rangeNumber")
const inputNumber = document.getElementsByClassName("inputNumber")

const randomFunction = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol
}

generate.addEventListener("click", (e) => {
    e.preventDefault();
    const hasUpperCase = upperCaseEl.checked;
    const hasLowerCase = lowerCaseEl.checked;
    const hasNumber = numberEl.checked;
    const hasSymbol = symbolEl.checked;
    const length = +lengthEl.value

    text = generatePassword(hasUpperCase, hasLowerCase, hasNumber, hasSymbol, length);
    resultEl.innerText = text
});

function generatePassword(upper, lower, number, symbol, length) {
    let generatedPassword = "";
    const typesCount = upper + lower + number + symbol;
    const typesArr = [{ upper }, { lower }, { number }, { symbol }].filter
        (item => Object.values(item)[0]);
    /* no type found*/
    if (typesCount === 0) {
        return "";
    }
    /* loop */
    for (let i = 0; i < length; i += typesCount) {
        typesArr.forEach(type => {
            const funcName = Object.keys(type)[0];
            generatedPassword += randomFunction[funcName]();
        });
    }
    /* password created with */
    const finalPassword = generatedPassword.slice(0, length);
    return finalPassword
   
}

function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol() {
    const symbol = "!@#$%^&*(){}[]=<>/,."
    return symbol[Math.floor(Math.random() * symbol.length)];

}

function syncCharAmount(e) {
    const value = e.target.value
    rangeNumber.value = value
    inputNumber.value = value
}