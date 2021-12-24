console.log("hello world")

function add(n1, n2){
    let sum = n1 + n2;
   // console.log(sum)
    return sum;  
}

function substract(n1, n2){
    let substraction = n1 - n2;
   // console.log(substraction)
    return substraction;   
}

function multiply(n1, n2){
    let multiplification = n1 * n2;
    //console.log(multiplification)
    return multiplification;  
}

function divide(n1, n2){
    let division = n1 / n2;
    //console.log(division)
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
    //console.log(e.target.innerText)
    input.value += e.target.innerText
    firstUserNumber = input.value;
})

let operators = document.querySelector(".operators-wrap")
//console.log(operators)

operators.addEventListener('click', (e) =>{
   console.log(firstUserNumber )
})

