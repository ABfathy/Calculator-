


let operatorSign = "";
let firstNum = "";
let secondNum = "";
let negation = "";





let numbers = document.querySelectorAll(".numbers button:not(.top)");

let numbersTop = document.querySelectorAll(".numbers .top");

let operators = document.querySelectorAll(".operators button");

let screen = document.querySelector("input"); 



numbersTop.forEach(number =>{

    number.addEventListener("click",() => editNumber(number));
})

numbers.forEach(number =>{
    number.addEventListener("click", () => assignNumber(number));
})

operators.forEach(operator => {
    operator.addEventListener("click",() => selectOperator(operator));

})


function selectOperator(operator){

    if(operator.innerText === "÷") operatorSign = "÷";

    if(operator.innerText === "×") operatorSign = "×";
    
    if(operator.innerText === "−") operatorSign = "−";

    if(operator.innerText === "+") operatorSign = "+";

    if(operator.innerText === "=") operation(Number(firstNum),Number(secondNum),operatorSign);

    
    updateScreenValue();

    

}

function editNumber(number){

    //if(number.innerText === "%" && variablesOnScreen[1] > 0);
    
    if(number.innerText === "C") 
        {
            firstNum = "";
            secondNum = "";
            operatorSign = "";
        } ;
    
    if(number.innerText === "+/-") variablesOnScreen.shift = "-";

    updateScreenValue();
    

}


function updateScreenValue(errorStatus){

    
    let variablesOnScreen = [negation,firstNum,operatorSign,secondNum]
    screen.value = variablesOnScreen.join("");

  
}

function resetValues(){

    negation = "";
    operatorSign = "";
    secondNum = "";

}

function assignNumber(number){
    
   
    if(operatorSign === ""){

        firstNum = firstNum.concat(number.innerText);
        

    } else {

       secondNum = secondNum.concat(number.innerText);
    }
    
    
    updateScreenValue();
}


function add(a , b){

    let sum = a + b;

    
    firstNum = sum;
   
}

function subtract(a , b){

    let subtraction = a - b;

    firstNum = subtraction;

   
}

function multiply(a , b){

    let product = a * b;

    firstNum = product;

    
}

function divide(a , b){

    if (b === 0 ){

       return "error";
        

    } else {

        let division = a / b;

        firstNum = division;
    }

}


function operation(firstNum , secondNum , operator){


    if(operator === "+"){

        add(firstNum,secondNum);

    }
    if(operator === "−"){

        subtract(firstNum,secondNum);
        
    }

    if(operator === "×"){

        multiply(firstNum,secondNum);
        
    }

    if(operator === "÷"){
        
        divide(firstNum,secondNum);
    }

    resetValues();

}
