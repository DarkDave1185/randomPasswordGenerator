const resultEl = document.getElementById("result")
const codeNumberEl = document.getElementById("codeNumber")
const upperCaseEl = document.getElementById("upperCase")
const lowerCaseEl = document.getElementById("lowerCase")
const numberEl = document.getElementById("number")
const symbolEl = document.getElementById("symbol")
const generateEl = document.getElementById("generate")

const randomFunction = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol
}

generate.addEventListener("click", ()=> {
    const codeNumber = +codeNumberEl.value;
    const hasUpperCase = upperCaseEl.checked;
    const hasLowerCase = lowerCaseEl.checked;
    const hasNumber = numberEl.checked;
    const hasSymbol = symbolEl.checked;

    console.log(hasUpperCase, hasLowerCase, hasNumber, hasSymbol)

    resultEl.innerText = generatePassword(
        hasUpperCase, hasLowerCase, hasNumber, hasSymbol, codeNumber
    );
});

function generatePassword(lower, upper, number, symbol, codeNumber) {
    let generatedPassword="";
    const typesCount=lower+upper+number+symbol;
    const typesArr=[{ lower }, { upper }, { number }, { symbol }].filter
        (item=>Object.values(item)[0]);
/* no type found*/
    if(typesCount===0){
        return "";
    }
    /* loop */
    for(let i=0; i<codeNumber; i+=typesCount){
        typesArr.forEach(type => {
            const funcName = Object.keys(type)[0];
            generatedPassword += randomFunction[funcName]();
        });
    }
    /* password created with */
    const finalPassword=generatedPassword.slice (0, codeNumber);
        return finalPassword
}

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