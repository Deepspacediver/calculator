console.log("hello world")

function add(n1, n2){
    let sum = n1 + n2;
    input.value = sum;
    return sum;  
}

function substract(n1, n2){
    let substraction = n1 - n2;
    input.value = substraction
    return substraction;   
}

function multiply(n1, n2){
    let multiplification = n1 * n2;
    input.value = multiplification;
    return multiplification;  
}

function divide(n1, n2){
    let division = n1 / n2;
    input.value = division;
    return division;  
}

    function operate(operator, n1, n2){
        if (operator == "+"){
            return add(n1, n2)
        }
        else if(operator == "-"){
            return substract(n1, n2)
        }
        else if(operator =="*"){
            return multiply(n1, n2)
        }
        else if(operator =="/"){
            return divide(n1, n2)
        }
    }



let input = document.querySelector("#input");

let buttons = document.querySelector(".number-wrapper");
let firstUserNumber;
buttons.addEventListener("click", (e) => {
    input.value += e.target.innerText
})


let operatorValue;
let operators = document.querySelector(".operators-wrap")

    operators.addEventListener('click', (e) =>{
    firstUserNumber = input.value;
    operatorValue = e.target.innerText;
    input.value = "";
    })

let secondUserNumber;
let equalButton = document.getElementById('equalBtn');

    equalButton.addEventListener('click', () => {
        secondUserNumber = input.value;
        operate(operatorValue, firstUserNumber,secondUserNumber)
    })