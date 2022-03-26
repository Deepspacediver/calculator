

let input1 = document.querySelector("#input");
let input2 = document.querySelector('.input2')
let numbers = document.querySelectorAll(".numbers");
let operators = document.querySelectorAll(".basicOperator")
let equalButton = document.querySelector('#equalBtn')
let clearAllButton = document.querySelector('.clear-all-btn')
let clearLastEntityButton = document.querySelector('.clear-last-entity-btn')

let inputNumb1 ='';
let inputNumb2 ='';
let operatorValue='';
let result = null;

numbers.forEach(numbers =>{
    numbers.addEventListener('click', (e) =>{
        inputNumb2 += e.target.innerText;
        input2.innerText = inputNumb2;
    })
})

operators.forEach(operators =>{
    operators.addEventListener('click', (e) =>{
        if(!inputNumb2) return;
        const operatorName = e.target.innerText;
        if(inputNumb2 && inputNumb1 && operatorValue){
            mathOperate();
        }else {
            result = parseFloat(inputNumb2)
        }
        clearVariable(operatorName);
        operatorValue = operatorName;
    })
})

function clearVariable(name = ''){
    inputNumb1 += inputNumb2 + ' ' + name + ' ';
    input1.innerText = inputNumb1;
    input2.innerText =''
    inputNumb2 = ''
    input2.innerText = result;
}

function mathOperate(){
    if(operatorValue === '+'){
        result = parseFloat(result) + parseFloat(inputNumb2)
    }else if(operatorValue === '-'){
        result = parseFloat(result) - parseFloat(inputNumb2)
    }else if(operatorValue === '*'){
        result = parseFloat(result) * parseFloat(inputNumb2)
    }else if(operatorValue === '/'){
        if(inputNumb2 == 0){
            alert('Cannot divide by 0');
             inputNumb1='';
            inputNumb2 = '';
            result ='';
        }else result = parseFloat(result) / parseFloat(inputNumb2)
    }
}


    equalButton.addEventListener('click', (e) => {
        if(!inputNumb1 || !inputNumb2) return;
        mathOperate();
        clearVariable();
        input2.innerText = result
        inputNumb2 = result;
        inputNumb1='';
    })   

clearAllButton.addEventListener('click', () => {
    inputNumb1='';
    inputNumb2 = '';
    input1.innerText = 0;
    input2.innerText = 0;
    result = '';
})

clearLastEntityButton.addEventListener('click', () => {
    inputNumb2 = inputNumb2.substring(0, inputNumb2.length -1)
    input2.innerText = inputNumb2;
})