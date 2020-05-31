const resultEl = document.getElementById("result")
const lengthEl = document.getElementById("length")
const upperCaseEl = document.getElementById("upperCase")
const lowerCaseEl = document.getElementById("lowerCase")
const numberEl = document.getElementById("number")
const symbolEl = document.getElementById("symbol")
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

generate.addEventListener("click", ()=>{
    const hasUpperCase = upperCaseEl.checked;
    const hasLowerCase = lowerCaseEl.checked;
    const hasNumber = numberEl.checked;
    const hasSymbol = symbolEl.checked;
    const length = +lengthEl

    resultEl.innerText = generatePassword(hasUpperCase, hasLowerCase, hasNumber, hasSymbol, length);
});

function generatePassword(lower, upper, number, symbol, length) {
    let generatedPassword="";
    const typesCount=lower+upper+number+symbol;
    const typesArr=[{ lower }, { upper }, { number }, { symbol }].filter
        (item=>Object.values(item)[0]);
/* no type found*/
    if(typesCount===0){
        return "";
    }
    /* loop */
    for(let i=0; i<length; i+=typesCount){
        typesArr.forEach(type=>{
            const funcName = Object.keys(type)[0];
            generatedPassword += randomFunction[funcName]();
        });
    }
/* password created with */
const finalPassword=generatedPassword.slice (0, length);
    return finalPassword
}

const textarea = document.createElement('textarea');
const password = resultEl.innerText;

textarea.value = password;
document.body.appendChild(textarea);

function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random()*26)+65);
}

function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random()*26)+97);
}

function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random()*10)+48);
}

function getRandomSymbol() {
    const symbol = "!@#$%^&*(){}[]=<>/,." 
    return Symbol[Math.floor(Math.random()*symbol.codeNumber)];
}

function syncCharAmount(e){
    const value = e.target.value
    rangeNumber.value = value
    inputNumber.value = value
}